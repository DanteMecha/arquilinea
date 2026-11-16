"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import { localizePath, t, type Locale } from "@/i18n/dictionary";
import {
  digitalDecks,
  sortCardsByYear,
  type DigitalCard,
} from "@/data/digitalDeck";
import {
  discountRedeemUrl,
  discountTiers,
  pickDiscountCode,
  type DiscountTierId,
} from "@/data/discounts";

const STORAGE_KEY = "arquilinea-desafio-session";

type Stage = "loading" | "select" | "play" | "lost" | "finished" | "allplayed";

type StoredSession = {
  playedDeckIds: string[];
  finished: boolean;
  code: string | null;
  percent: number | null;
  kind: DiscountTierId | null;
};

type FinalResult = {
  code: string;
  percent: number;
  kind: DiscountTierId;
};

type DragState = {
  index: number;
  active: boolean;
  pointerId: number;
  startX: number;
  startY: number;
  slug: string;
};

const emptySession: StoredSession = {
  playedDeckIds: [],
  finished: false,
  code: null,
  percent: null,
  kind: null,
};

function shuffle<T>(items: T[]): T[] {
  const next = [...items];

  for (let index = next.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [next[index], next[target]] = [next[target], next[index]];
  }

  return next;
}

function readSession(): StoredSession {
  if (typeof window === "undefined") {
    return emptySession;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return emptySession;
    }

    const parsed: unknown = JSON.parse(raw);

    if (!parsed || typeof parsed !== "object") {
      return emptySession;
    }

    const record = parsed as Record<string, unknown>;
    const validDeckIds = new Set(digitalDecks.map((deck) => deck.id));
    const playedDeckIds = Array.isArray(record.playedDeckIds)
      ? record.playedDeckIds.filter(
          (id): id is string => typeof id === "string" && validDeckIds.has(id),
        )
      : [];
    const finished = record.finished === true;
    const code =
      typeof record.code === "string" && record.code.length > 0
        ? record.code
        : null;
    const percent =
      typeof record.percent === "number" && Number.isFinite(record.percent)
        ? record.percent
        : null;
    const kind =
      record.kind === "win" ? record.kind : null;

    return {
      playedDeckIds: [...new Set(playedDeckIds)],
      finished,
      code,
      percent,
      kind,
    };
  } catch {
    return emptySession;
  }
}

function storeSession(session: StoredSession): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  } catch {
    return;
  }
}

function GripIcon() {
  return (
    <svg
      viewBox="0 0 16 24"
      width="16"
      height="24"
      aria-hidden="true"
      focusable="false"
    >
      {[6, 12, 18].map((cy) => (
        <g key={cy}>
          <circle cx="5" cy={cy} r="1.7" fill="currentColor" />
          <circle cx="11" cy={cy} r="1.7" fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}

export function ChallengeGame({ locale }: { locale: Locale }) {
  const [stage, setStage] = useState<Stage>("loading");
  const [isMobile, setIsMobile] = useState(false);
  const [selectedDeckIndex, setSelectedDeckIndex] = useState<number | null>(null);
  const [playedDeckIds, setPlayedDeckIds] = useState<string[]>([]);
  const [order, setOrder] = useState<string[]>([]);
  const [finalResult, setFinalResult] = useState<FinalResult | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [announcement, setAnnouncement] = useState("");
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [overIndex, setOverIndex] = useState<number | null>(null);
  const dragState = useRef<DragState | null>(null);
  const resultRef = useRef<HTMLElement>(null);
  const lostRef = useRef<HTMLElement>(null);
  const selectTitleRef = useRef<HTMLHeadingElement>(null);
  const boardRef = useRef<HTMLOListElement>(null);
  const hasStartedRef = useRef(false);

  const deck =
    selectedDeckIndex === null ? null : digitalDecks[selectedDeckIndex] ?? null;
  const cardsBySlug = useMemo(() => {
    const map = new Map<string, DigitalCard>();

    for (const card of deck?.cards ?? []) {
      map.set(card.slug, card);
    }

    return map;
  }, [deck]);

  const orderedCards = order
    .map((slug) => cardsBySlug.get(slug))
    .filter((card): card is DigitalCard => Boolean(card));
  const sortedCards = useMemo(
    () => sortCardsByYear(deck?.cards ?? []),
    [deck],
  );
  const remainingDecks = digitalDecks.filter(
    (item) => !playedDeckIds.includes(item.id),
  );

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const session = readSession();
      setPlayedDeckIds(session.playedDeckIds);

      if (
        session.finished &&
        session.code &&
        session.percent !== null &&
        session.kind
      ) {
        setFinalResult({
          code: session.code,
          percent: session.percent,
          kind: session.kind,
        });
        setStage("finished");
        return;
      }

      if (session.playedDeckIds.length >= digitalDecks.length) {
        setStage("allplayed");
        storeSession({
          playedDeckIds: session.playedDeckIds,
          finished: true,
          code: null,
          percent: null,
          kind: null,
        });
        return;
      }

      setStage("select");
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!copiedCode) {
      return;
    }

    const timeout = window.setTimeout(() => setCopiedCode(null), 2200);
    return () => window.clearTimeout(timeout);
  }, [copiedCode]);

  useEffect(() => {
    if (finalResult || stage === "allplayed") {
      resultRef.current?.focus();
    } else if (stage === "lost") {
      lostRef.current?.focus();
    }
  }, [finalResult, stage]);

  useEffect(() => {
    if (stage === "select" && hasStartedRef.current) {
      selectTitleRef.current?.focus();
    }
  }, [stage]);

  useEffect(() => {
    if (stage === "play") {
      boardRef.current?.focus();
    }
  }, [stage]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 700px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isMobile || (stage !== "play" && stage !== "lost")) {
      return;
    }

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [stage, isMobile]);

  function resetDragState() {
    setDragIndex(null);
    setOverIndex(null);
    dragState.current = null;
  }

  function startDeck(index: number) {
    const nextDeck = digitalDecks[index];

    if (!nextDeck || playedDeckIds.includes(nextDeck.id)) {
      return;
    }

    hasStartedRef.current = true;
    setSelectedDeckIndex(index);
    setOrder(shuffle(nextDeck.cards.map((card) => card.slug)));
    setStage("play");
    setFinalResult(null);
    setAnnouncement(
      `${nextDeck.name[locale]}. ${t(locale, "challenge.instructions")}`,
    );
    resetDragState();
  }

  function goToSelect() {
    hasStartedRef.current = true;
    setStage("select");
    setSelectedDeckIndex(null);
    setOrder([]);
    setAnnouncement("");
    resetDragState();
  }

  function shuffleCurrent() {
    if (!deck) {
      return;
    }

    setOrder(shuffle(deck.cards.map((card) => card.slug)));
    setAnnouncement(t(locale, "challenge.shuffled"));
    resetDragState();
  }

  function moveCard(from: number, to: number) {
    if (from === to || to < 0 || to >= order.length) {
      return;
    }

    const moved = cardsBySlug.get(order[from]);

    setOrder((current) => {
      const next = [...current];
      const [card] = next.splice(from, 1);
      next.splice(to, 0, card);
      return next;
    });

    if (moved) {
      setAnnouncement(
        `${moved.name[locale]}: ${t(locale, "challenge.position")} ${
          to + 1
        } ${t(locale, "challenge.of")} ${order.length}`,
      );
    }
  }

  function canDragFrom(target: EventTarget | null, pointerType: string) {
    if (pointerType === "mouse") {
      return true;
    }

    return (
      target instanceof Element &&
      Boolean(target.closest("[data-drag-handle]"))
    );
  }

  function handlePointerDown(
    event: PointerEvent<HTMLButtonElement>,
    index: number,
  ) {
    if (
      stage !== "play" ||
      !deck ||
      !canDragFrom(event.target, event.pointerType)
    ) {
      return;
    }

    dragState.current = {
      index,
      active: false,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      slug: order[index] ?? "",
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLButtonElement>) {
    const state = dragState.current;

    if (!state || state.pointerId !== event.pointerId) {
      return;
    }

    if (!state.active) {
      const dx = event.clientX - state.startX;
      const dy = event.clientY - state.startY;

      if (Math.hypot(dx, dy) < 6) {
        return;
      }

      state.active = true;
      setDragIndex(state.index);
    }

    event.preventDefault();

    const element = document.elementFromPoint(event.clientX, event.clientY);
    const cardElement = element?.closest<HTMLElement>("[data-card-index]");

    if (!cardElement) {
      return;
    }

    const targetIndex = Number(cardElement.dataset.cardIndex);

    if (Number.isNaN(targetIndex) || targetIndex === state.index) {
      return;
    }

    const from = state.index;

    setOrder((current) => {
      if (from < 0 || from >= current.length) {
        return current;
      }

      const next = [...current];
      const [card] = next.splice(from, 1);
      next.splice(targetIndex, 0, card);
      return next;
    });

    state.index = targetIndex;
    setOverIndex(targetIndex);

    const moved = cardsBySlug.get(state.slug);

    if (moved) {
      setAnnouncement(
        `${moved.name[locale]}: ${t(locale, "challenge.position")} ${
          targetIndex + 1
        } ${t(locale, "challenge.of")} ${order.length}`,
      );
    }
  }

  function handlePointerEnd(event: PointerEvent<HTMLButtonElement>) {
    const state = dragState.current;

    if (!state) {
      return;
    }

    dragState.current = null;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    setDragIndex(null);
    setOverIndex(null);
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    if (stage !== "play") {
      return;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      moveCard(index, index - 1);
      return;
    }

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      moveCard(index, index + 1);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      moveCard(index, 0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      moveCard(index, order.length - 1);
    }
  }

  function checkOrder() {
    if (stage !== "play" || !deck || order.length === 0) {
      return;
    }

    const isCorrect = sortedCards.every(
      (card, index) => order[index] === card.slug,
    );
    const nextPlayed = playedDeckIds.includes(deck.id)
      ? playedDeckIds
      : [...playedDeckIds, deck.id];

    setPlayedDeckIds(nextPlayed);
    resetDragState();

    if (isCorrect) {
      const code = pickDiscountCode("win");
      const percent = discountTiers.win.percent;

      setFinalResult({ code, percent, kind: "win" });
      setStage("finished");
      storeSession({
        playedDeckIds: nextPlayed,
        finished: true,
        code,
        percent,
        kind: "win",
      });
      setAnnouncement(
        `${t(locale, "challenge.winTitle")} ${t(
          locale,
          "challenge.winText",
        ).replace("{percent}", String(percent))}`,
      );
      return;
    }

    if (nextPlayed.length >= digitalDecks.length) {
      setStage("allplayed");
      storeSession({
        playedDeckIds: nextPlayed,
        finished: true,
        code: null,
        percent: null,
        kind: null,
      });
      setAnnouncement(
        `${t(locale, "challenge.allPlayedTitle")}. ${t(
          locale,
          "challenge.allPlayedText",
        )}`,
      );
      return;
    }

    setStage("lost");
    storeSession({
      playedDeckIds: nextPlayed,
      finished: false,
      code: null,
      percent: null,
      kind: null,
    });
    setAnnouncement(
      `${t(locale, "challenge.lostTitle")}. ${t(
        locale,
        "challenge.lostText",
      )}`,
    );
  }

  async function copyCode(code: string) {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = code;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }

    setCopiedCode(code);
  }

  function resetChallenge() {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.removeItem(STORAGE_KEY);
      } catch {
        // ignore storage errors
      }
    }

    hasStartedRef.current = true;
    setStage("select");
    setSelectedDeckIndex(null);
    setPlayedDeckIds([]);
    setOrder([]);
    setFinalResult(null);
    setCopiedCode(null);
    setAnnouncement("");
    resetDragState();
  }

  const finalText = finalResult
    ? t(locale, "challenge.winText").replace(
        "{percent}",
        String(finalResult.percent),
      )
    : "";

  const finalPanel = finalResult ? (
    <section
      ref={resultRef}
      className="challenge-result"
      tabIndex={-1}
      aria-label={t(locale, "challenge.resultAria")}
    >
      <h2>
        {t(locale, "challenge.winTitle")}
      </h2>
      <p>{finalText}</p>

      <div className="challenge-code">
        <span className="challenge-code-percent">
          {finalResult.percent}% {t(locale, "challenge.off")}
        </span>
        <span className="challenge-code-label">
          {t(locale, "challenge.yourCode")}
        </span>
        <code>{finalResult.code}</code>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => copyCode(finalResult.code)}
        >
          {copiedCode === finalResult.code
            ? t(locale, "challenge.copied")
            : t(locale, "challenge.copy")}
        </button>
      </div>

      <p className="challenge-code-note">{t(locale, "challenge.codeNote")}</p>

      <div className="challenge-actions-row">
        <a
          className="btn btn-primary"
          href={discountRedeemUrl}
          target="_blank"
          rel="noopener"
        >
          {t(locale, "challenge.redeem")}
        </a>
        <button className="btn btn-ghost" type="button" onClick={resetChallenge}>
          {t(locale, "challenge.playAgain")}
        </button>
        <Link className="btn btn-ghost" href={localizePath(locale, "/")}>
          {t(locale, "challenge.backHome")}
        </Link>
      </div>
    </section>
  ) : null;

  const allPlayedPanel = (
    <section
      ref={resultRef}
      className="challenge-result"
      tabIndex={-1}
      aria-label={t(locale, "challenge.resultAria")}
    >
      <h2>{t(locale, "challenge.allPlayedTitle")}</h2>
      <p>{t(locale, "challenge.allPlayedText")}</p>

      <div className="challenge-actions-row">
        <button className="btn btn-primary" type="button" onClick={resetChallenge}>
          {t(locale, "challenge.playAgain")}
        </button>
        <Link className="btn btn-ghost" href={localizePath(locale, "/")}>
          {t(locale, "challenge.backHome")}
        </Link>
      </div>
    </section>
  );

  return (
    <div className="challenge">
      <p className="sr-only" aria-live="polite">
        {announcement}
      </p>

      {stage === "loading" ? (
        <p className="challenge-loading">
          {t(locale, "challenge.loadingSession")}
        </p>
      ) : null}

      {stage === "select" ? (
        <div className="challenge-select">
          <h2
            ref={selectTitleRef}
            className="challenge-select-title"
            tabIndex={-1}
          >
            {t(locale, "challenge.chooseDeck")}
          </h2>
          <p className="challenge-instructions">
            {t(locale, "challenge.chooseDeckHint")}
          </p>

          <ul
            className="challenge-deck-list"
            role="list"
            aria-label={t(locale, "challenge.deckLabel")}
          >
            {digitalDecks.map((item, index) => {
              const played = playedDeckIds.includes(item.id);

              return (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`challenge-deck-option${
                      played ? " is-played" : ""
                    }`}
                    disabled={played}
                    onClick={() => startDeck(index)}
                  >
                    <span className="challenge-deck-option-name">
                      {item.name[locale]}
                    </span>
                    <span className="challenge-deck-option-meta">
                      {t(locale, "challenge.cards").replace(
                        "{count}",
                        String(item.cards.length),
                      )}
                    </span>
                    {played ? (
                      <span className="challenge-deck-option-badge">
                        {t(locale, "challenge.played")}
                      </span>
                    ) : null}
                  </button>
                </li>
              );
            })}
          </ul>

          <p className="challenge-select-note">
            {t(locale, "challenge.oneCode")}
          </p>
        </div>
      ) : null}

      {deck && (stage === "play" || stage === "lost") ? (
        <div
          className={`challenge-play-overlay${
            stage === "lost" ? " is-lost" : ""
          }`}
          role={isMobile ? "dialog" : undefined}
          aria-modal={isMobile ? "true" : undefined}
          aria-label={t(
            locale,
            stage === "play" ? "challenge.boardLabel" : "challenge.resultAria",
          )}
        >
          <div className="challenge-play-backdrop" aria-hidden="true" onClick={goToSelect} />
          <div className="challenge-play-modal">
            <button
              className="challenge-exit"
              type="button"
              onClick={goToSelect}
              aria-label={t(locale, "challenge.exit")}
              title={t(locale, "challenge.exit")}
            >
              ×
            </button>
            <div className="challenge-playing-head">
              <p className="challenge-playing-deck">{deck.name[locale]}</p>
              {stage === "play" ? (
                <button
                  className="btn btn-ghost"
                  type="button"
                  onClick={goToSelect}
                >
                  {t(locale, "challenge.changeDeck")}
                </button>
              ) : null}
            </div>
            {stage === "play" ? (
              <>
                <p className="challenge-instructions">
                  {t(locale, "challenge.instructions")}
                </p>
                <p className="challenge-hint" id="challenge-hint">
                  {t(locale, "challenge.dragHint")}{" "}
                  {t(locale, "challenge.keyboardHint")}
                </p>
                <ol
                  ref={boardRef}
                  role="list"
                  tabIndex={-1}
                  className="challenge-board"
                  aria-label={t(locale, "challenge.boardLabel")}
                >
                  {orderedCards.map((card, index) => {
                    const label = `${index + 1}. ${card.name[locale]}`;

                    return (
                      <li key={card.slug}>
                        <button
                          type="button"
                          data-card-index={index}
                          className={[
                            "challenge-card",
                            dragIndex === index ? "is-dragging" : "",
                            overIndex === index ? "is-over" : "",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                          tabIndex={0}
                          aria-label={label}
                          aria-roledescription={t(locale, "challenge.cardRole")}
                          aria-describedby="challenge-hint"
                          onPointerDown={(event) =>
                            handlePointerDown(event, index)
                          }
                          onPointerMove={handlePointerMove}
                          onPointerUp={handlePointerEnd}
                          onPointerCancel={handlePointerEnd}
                          onKeyDown={(event) => handleKeyDown(event, index)}
                        >
                          <span
                            className="challenge-position"
                            aria-hidden="true"
                          >
                            {index + 1}
                          </span>

                          <img
                            className="challenge-image"
                            src={card.front}
                            alt=""
                            width={630}
                            height={630}
                            draggable={false}
                            loading="lazy"
                          />

                          <span
                            className="challenge-grip"
                            data-drag-handle
                            title={t(locale, "challenge.dragHint")}
                            aria-hidden="true"
                          >
                            <GripIcon />
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ol>

                <div className="challenge-actions-row">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={checkOrder}
                    disabled={order.length === 0}
                  >
                    {t(locale, "challenge.check")}
                  </button>
                  <button
                    className="btn btn-ghost"
                    type="button"
                    onClick={shuffleCurrent}
                    disabled={order.length === 0}
                  >
                    {t(locale, "challenge.shuffle")}
                  </button>
                </div>
              </>
            ) : (
              <>
                {finalResult ? (
                  finalPanel
                ) : (
                  <>
                    <section
                      ref={lostRef}
                      className="challenge-lost"
                      tabIndex={-1}
                      aria-label={t(locale, "challenge.resultAria")}
                    >
                      <h2>{t(locale, "challenge.lostTitle")}</h2>
                      <p>{t(locale, "challenge.lostText")}</p>
                      <p className="challenge-remaining">
                        {t(locale, "challenge.remaining").replace(
                          "{count}",
                          String(remainingDecks.length),
                        )}
                      </p>
                    </section>

                    <div className="challenge-actions-row">
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={goToSelect}
                      >
                        {t(locale, "challenge.chooseAnother")}
                      </button>
                    </div>
                  </>
                )}

                <h2 className="challenge-order-title">
                  {t(locale, "challenge.orderTitle")}
                </h2>

                <ol
                  role="list"
                  className="challenge-board is-result"
                  aria-label={t(locale, "challenge.orderTitle")}
                >
                  {sortedCards.map((card, index) => {
                    const isCorrectPosition = order[index] === card.slug;

                    return (
                      <li key={card.slug}>
                        <button
                          type="button"
                          data-card-index={index}
                          className={[
                            "challenge-card",
                            isCorrectPosition ? "is-correct" : "is-incorrect",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                          tabIndex={-1}
                          aria-label={`${t(
                            locale,
                            isCorrectPosition
                              ? "challenge.correct"
                              : "challenge.incorrect",
                          )}: ${card.name[locale]} — ${t(
                            locale,
                            "challenge.yearLabel",
                          )} ${card.yearLabel}`}
                        >
                          <span
                            className="challenge-position"
                            aria-hidden="true"
                          >
                            {index + 1}
                          </span>

                          <img
                            className="challenge-image"
                            src={card.back}
                            alt=""
                            width={630}
                            height={630}
                            draggable={false}
                            loading="lazy"
                          />

                          <span className="challenge-caption">
                            <strong>{card.name[locale]}</strong>
                            <span>{card.author[locale]}</span>
                            <span>{card.place[locale]}</span>
                            <span className="challenge-year">
                              {card.yearLabel}
                            </span>
                          </span>

                          <span className="challenge-mark" aria-hidden="true">
                            {isCorrectPosition ? "✓" : "✗"}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </>
            )}
          </div>
        </div>
      ) : null}

      {stage === "finished" ? finalPanel : null}
      {stage === "allplayed" ? allPlayedPanel : null}
    </div>
  );
}

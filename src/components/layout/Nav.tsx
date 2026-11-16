"use client";

import Link from "next/link";
import { useState } from "react";
import { localizePath, t, type Locale } from "@/i18n/dictionary";
import { LangSwitch } from "./LangSwitch";

type NavProps = {
  locale: Locale;
  variant: "home" | "product" | "challenge";
  buyUrl?: string;
};

export function Nav({ locale, variant, buyUrl }: NavProps) {
  const [open, setOpen] = useState(false);
  const homeHref = localizePath(locale, "/");
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link
          className="logo"
          href={homeHref}
          aria-label={t(locale, "logo.aria")}
          onClick={close}
        >
          <img src="/assets/logos/LogoPNG.png" alt="Arquilínea" />
        </Link>

        {false ? (
          <div className="nav-lang-desktop">
            <LangSwitch locale={locale} />
          </div>
        ) : null}

        <button
          type="button"
          className="nav-menu-btn"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={t(locale, open ? "nav.menu.close" : "nav.menu.open")}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="nav-menu"
          className={`nav-links${open ? " is-open" : ""}`}
          aria-label={t(locale, "nav.principal")}
        >
          {variant === "home" ? (
            <>
              <a href="#juego" onClick={close}>
                {t(locale, "nav.juego")}
              </a>
              <a href="#versiones" onClick={close}>
                {t(locale, "nav.ediciones")}
              </a>
              <a href="#jugar" onClick={close}>
                {t(locale, "nav.jugar")}
              </a>
              <a href="#comprar" onClick={close}>
                {t(locale, "nav.comprar")}
              </a>
              <Link href={localizePath(locale, "desafio")} onClick={close}>
                {t(locale, "nav.desafio")}
              </Link>
            </>
          ) : variant === "challenge" ? (
            <>
              <Link href={homeHref} onClick={close}>
                {t(locale, "nav.inicio")}
              </Link>
              {buyUrl ? (
                <a href={buyUrl} target="_blank" rel="noopener" onClick={close}>
                  {t(locale, "nav.comprar")}
                </a>
              ) : null}
            </>
          ) : (
            <>
              <Link href={homeHref} onClick={close}>
                {t(locale, "nav.volver")}
              </Link>
              {buyUrl ? (
                <a href={buyUrl} target="_blank" rel="noopener" onClick={close}>
                  {t(locale, "nav.comprar")}
                </a>
              ) : null}
            </>
          )}
          {false ? (
            <div className="nav-lang-mobile">
              <span className="nav-lang-label">
                {t(locale, "nav.chooseLanguage")}
              </span>
              <LangSwitch locale={locale} />
            </div>
          ) : null}
        </nav>
      </div>
    </header>
  );
}

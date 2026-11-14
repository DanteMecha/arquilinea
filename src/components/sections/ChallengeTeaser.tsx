import Link from "next/link";
import { localizePath, t, type Locale } from "@/i18n/dictionary";
import { digitalDecks } from "@/data/digitalDeck";

export function ChallengeTeaser({ locale }: { locale: Locale }) {
  const cards = digitalDecks[0]?.cards ?? [];

  return (
    <section className="challenge-teaser" aria-labelledby="challenge-teaser-title">
      <div className="container">
        <div className="challenge-teaser-inner">
          <div className="challenge-teaser-text">
            <p className="eyebrow">{t(locale, "challenge.teaser.eyebrow")}</p>
            <h2 id="challenge-teaser-title">
              {t(locale, "challenge.teaser.title")}
            </h2>
            <p>{t(locale, "challenge.teaser.text")}</p>
            <Link
              className="btn btn-primary"
              href={localizePath(locale, "desafio")}
            >
              {t(locale, "challenge.teaser.cta")}
            </Link>
          </div>

          <div className="challenge-teaser-cards" aria-hidden="true">
            {cards.map((card) => (
              <img
                key={card.slug}
                src={card.front}
                alt=""
                width={630}
                height={630}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

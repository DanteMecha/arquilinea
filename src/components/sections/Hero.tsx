import { t, type Locale } from "@/i18n/dictionary";

export function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="eyebrow">{t(locale, "hero.eyebrow")}</p>

          <h1>
            {t(locale, "hero.title1")}
            <br />
            <span>
              {t(locale, "hero.title2")}{" "}
              <span className="accent-word">
                {t(locale, "hero.titleAccent")}
              </span>
            </span>
          </h1>

          <p className="sub">{t(locale, "hero.sub")}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#comprar">
              {t(locale, "hero.buy")}
            </a>
            <a className="btn btn-ghost" href="#jugar">
              {t(locale, "hero.how")}
            </a>
          </div>
        </div>

        <div className="hero-media">
          <figure className="polaroid">
            <img
              src="/assets/mazos/mazos.jpeg"
              alt={t(locale, "hero.mediaAlt")}
              width={1254}
              height={1254}
              loading="eager"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

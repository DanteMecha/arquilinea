import {
  t,
  type Locale,
  type TranslationKey,
} from "@/i18n/dictionary";

const stats: {
  numKey: TranslationKey;
  titleKey: TranslationKey;
  textKey: TranslationKey;
}[] = [
  { numKey: "stats.1.num", titleKey: "stats.1.title", textKey: "stats.1.text" },
  { numKey: "stats.2.num", titleKey: "stats.2.title", textKey: "stats.2.text" },
  { numKey: "stats.3.num", titleKey: "stats.3.title", textKey: "stats.3.text" },
  { numKey: "stats.4.num", titleKey: "stats.4.title", textKey: "stats.4.text" },
];

export function StatsSection({ locale }: { locale: Locale }) {
  return (
    <section className="section" id="juego">
      <div className="container">
        <div className="section-head">
          <h2>{t(locale, "juego.title")}</h2>
          <p>{t(locale, "juego.subtitle")}</p>
        </div>

        <div className="grid">
          {stats.map((stat) => (
            <div className="included-item" key={stat.numKey}>
              <div className="num">{t(locale, stat.numKey)}</div>
              <h4>{t(locale, stat.titleKey)}</h4>
              <p>{t(locale, stat.textKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

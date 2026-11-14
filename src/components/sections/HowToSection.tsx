import { t, type Locale, type TranslationKey } from "@/i18n/dictionary";
import { howToModes } from "@/data/howto";
import { HowToCard } from "@/components/HowToCard";

const timelineKeys: TranslationKey[] = [
  "timeline.1",
  "timeline.2",
  "timeline.3",
  "timeline.4",
];

export function HowToSection({ locale }: { locale: Locale }) {
  return (
    <section className="section" id="jugar">
      <div className="container">
        <div className="section-head">
          <p
            className="kicker"
            dangerouslySetInnerHTML={{
              __html: t(locale, "howto.kicker"),
            }}
          />
          <h2>{t(locale, "howto.title")}</h2>
        </div>

        <div className="howto-common included-item">
          <h3>{t(locale, "howto.common.title")}</h3>
          <p>{t(locale, "howto.common.text")}</p>
        </div>

        <div className="timeline" aria-hidden="true">
          {timelineKeys.map((key) => (
            <span className="timeline-item" key={key}>
              {t(locale, key)}
            </span>
          ))}
        </div>

        <h3 className="howto-modes-title">{t(locale, "howto.modes.title")}</h3>

        <div className="howto-grid">
          {howToModes.map((mode) => (
            <HowToCard key={mode.id} mode={mode} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}

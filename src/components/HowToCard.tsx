import { t, type Locale } from "@/i18n/dictionary";
import type { HowToMode } from "@/data/howto";

export function HowToCard({
  mode,
  locale,
}: {
  mode: HowToMode;
  locale: Locale;
}) {
  return (
    <article className="howto-card" data-col={mode.color}>
      <span className="tab">{mode.tab}</span>
      <h3>{t(locale, mode.nameKey)}</h3>

      <dl className="howto-meta">
        {mode.fields.map((field) => (
          <div key={field.labelKey}>
            <dt>{t(locale, field.labelKey)}</dt>
            <dd>{t(locale, field.valueKey)}</dd>
          </div>
        ))}
      </dl>

      <h4>{t(locale, "howto.label.steps")}</h4>
      <ol className="howto-steps">
        {mode.steps.map((stepKey) => (
          <li key={stepKey}>{t(locale, stepKey)}</li>
        ))}
      </ol>

      <p className="howto-end">
        <strong>{t(locale, "howto.label.end")}</strong>:{" "}
        <span>{t(locale, mode.endKey)}</span>
      </p>
      <p className="howto-note">
        <strong>{t(locale, "howto.label.note")}</strong>:{" "}
        <span>{t(locale, mode.noteKey)}</span>
      </p>
    </article>
  );
}

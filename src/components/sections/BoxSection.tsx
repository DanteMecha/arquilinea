import {
  t,
  type Locale,
  type TranslationKey,
} from "@/i18n/dictionary";

const boxItems: {
  numKey: TranslationKey;
  titleKey: TranslationKey;
  textKey: TranslationKey;
}[] = [
  { numKey: "caja.1.num", titleKey: "caja.1.title", textKey: "caja.1.text" },
  { numKey: "caja.2.num", titleKey: "caja.2.title", textKey: "caja.2.text" },
  { numKey: "caja.3.num", titleKey: "caja.3.title", textKey: "caja.3.text" },
];

export function BoxSection({ locale }: { locale: Locale }) {
  return (
    <section className="section band-orange">
      <div className="container">
        <div className="section-head">
          <h2>{t(locale, "caja.title")}</h2>
        </div>

        <div className="included-grid">
          {boxItems.map((item) => (
            <div className="included-item" key={item.numKey}>
              <div className="num">{t(locale, item.numKey)}</div>
              <h4>{t(locale, item.titleKey)}</h4>
              <p>{t(locale, item.textKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { t, type Locale } from "@/i18n/dictionary";
import { editions, formatArs } from "@/data/editions";

export function BuySection({ locale }: { locale: Locale }) {
  const fromPrice = Math.min(
    ...editions.map((edition) => edition.priceValue),
  );

  return (
    <section className="section buy" id="comprar">
      <div className="container">
        <h2>{t(locale, "buy.title")}</h2>
        <p>{t(locale, "buy.subtitle")}</p>

        <div className="buy-actions">
          <a
            className="btn btn-primary"
            href="https://www.miltrazos.com.ar/mil-trazos1/arquilinea/"
            target="_blank"
            rel="noopener"
          >
            {t(locale, "buy.button")}
          </a>
          <span className="price">
            {t(locale, "price.from")} {formatArs(locale, fromPrice)}
          </span>
        </div>

        <p className="buy-note">{t(locale, "buy.note")}</p>
      </div>
    </section>
  );
}

import { t, type Locale } from "@/i18n/dictionary";
import { products } from "@/data/editions";
import { EditionCard } from "@/components/EditionCard";

export function EditionsSection({ locale }: { locale: Locale }) {
  return (
    <section className="section band-violet" id="versiones">
      <div className="container">
        <div className="section-head">
          <h2>{t(locale, "versiones.title")}</h2>
          <p>{t(locale, "versiones.subtitle")}</p>
          <a
            className="see-all"
            href="https://www.miltrazos.com.ar/mil-trazos1/arquilinea/"
            target="_blank"
            rel="noopener"
          >
            {t(locale, "versiones.seeAll")}
          </a>
        </div>

        <div className="grid">
          {products.map((edition) => (
            <EditionCard
              key={edition.slug}
              edition={edition}
              locale={locale}
              showBuy
            />
          ))}
        </div>
      </div>
    </section>
  );
}

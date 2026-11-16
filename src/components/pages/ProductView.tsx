import Link from "next/link";
import { localizePath, t, type Locale } from "@/i18n/dictionary";
import { formatArs, getRelated, type Edition } from "@/data/editions";
import { Adbar } from "@/components/layout/Adbar";
import { Nav } from "@/components/layout/Nav";
import { ProductFooter } from "@/components/layout/Footer";
import { EditionCard } from "@/components/EditionCard";
import { Gallery } from "@/components/Gallery";
import { ProductJsonLd } from "@/components/ProductJsonLd";
import { ScrollToTop } from "@/components/ScrollToTop";

export function ProductView({
  edition,
  locale,
}: {
  edition: Edition;
  locale: Locale;
}) {
  const homeHref = localizePath(locale, "/");
  const related = getRelated(edition);

  return (
    <>
      <ScrollToTop />
      <Adbar locale={locale} />
      <Nav locale={locale} variant="product" buyUrl={edition.buyUrl} />

      <main>
        <section className="product-hero" data-col={edition.color}>
          <div className="container">
            <Link className="breadcrumb" href={homeHref}>
              {t(locale, "product.back")}
            </Link>

            <div className="product-grid">
              <Gallery
                images={edition.gallery}
                locale={locale}
                width={edition.coverWidth}
                height={edition.coverHeight}
              />

              <div className="product-info">
                <h1>{edition.title[locale]}</h1>
                <p className="lead">{edition.lead[locale]}</p>

                <p className="price">
                  {edition.priceFrom ? `${t(locale, "price.from")} ` : ""}
                  {formatArs(locale, edition.priceValue)}
                </p>
                <p className="price-note">
                  {edition.priceNote?.[locale] ??
                    t(locale, "product.priceNote")}
                </p>

                {edition.promo ? (
                  <div className="promo">
                    <span className="promo-tag">
                      {edition.promo.tag[locale]}
                    </span>
                    <p className="promo-title">
                      {edition.promo.title[locale]}
                    </p>
                    <p className="promo-price">
                      {formatArs(locale, edition.promo.priceValue)}
                    </p>
                  </div>
                ) : null}

                <div className="product-actions">
                  <a
                    className="btn btn-primary"
                    href={edition.buyUrl}
                    target="_blank"
                    rel="noopener"
                  >
                    {t(locale, "product.buy")}
                  </a>
                  <Link className="btn btn-ghost" href={homeHref}>
                    {t(locale, "product.keepExploring")}
                  </Link>
                </div>

                <ul className="specs">
                  {(edition.specs?.[locale] ?? []).map((spec) => (
                    <li key={spec}>{spec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="related">
          <div className="container">
            <h2>{t(locale, "product.related")}</h2>
            <div className="related-slider">
              {related.map((item) => (
                <div className="related-slide" key={item.slug}>
                  <EditionCard edition={item} locale={locale} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ProductFooter locale={locale} />
      <ProductJsonLd edition={edition} locale={locale} />
    </>
  );
}

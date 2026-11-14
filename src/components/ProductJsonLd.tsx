import { absoluteUrl } from "@/lib/site";
import type { Locale } from "@/i18n/dictionary";
import { editionHref, type Edition } from "@/data/editions";

export function ProductJsonLd({
  edition,
  locale,
}: {
  edition: Edition;
  locale: Locale;
}) {
  const url = absoluteUrl(editionHref(edition, locale));

  const data = {
    "@context": "https://schema.org",
    "@type": edition.isBook ? "Book" : "Product",
    name: edition.title[locale],
    image: [absoluteUrl(edition.cover)],
    description: edition.lead[locale],
    sku: `arquilinea-${edition.slug}`,
    brand: {
      "@type": "Brand",
      name: "Arquilínea",
    },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "ARS",
      price: edition.priceValue,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

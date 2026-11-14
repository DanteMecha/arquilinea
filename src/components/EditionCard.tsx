import Link from "next/link";
import { t, type Locale } from "@/i18n/dictionary";
import { editionHref, type Edition } from "@/data/editions";

type EditionCardProps = {
  edition: Edition;
  locale: Locale;
  showBuy?: boolean;
};

export function EditionCard({
  edition,
  locale,
  showBuy = false,
}: EditionCardProps) {
  const href = editionHref(edition, locale);
  const title = edition.title[locale];

  return (
    <article className="edition-card" data-col={edition.color}>
      <span className="tab">{edition.tabLabel?.[locale] ?? edition.tab}</span>

      <Link
        className="card-media"
        href={href}
        aria-label={`${t(locale, "product.view")}: ${title}`}
      >
        <img
          src={edition.cover}
          alt={edition.coverAlt[locale]}
          loading="lazy"
        />
      </Link>

      <div className="card-body">
        <h3>
          <Link href={href}>{title}</Link>
        </h3>
        <p>{edition.summary[locale]}</p>
        <span className="year-ribbon">{edition.ribbon[locale]}</span>

        <div className="card-actions">
          <Link className="btn btn-primary" href={href}>
            {t(locale, "product.view")}
          </Link>
          {showBuy ? (
            <a
              className="btn btn-ghost"
              href={edition.buyUrl}
              target="_blank"
              rel="noopener"
            >
              {t(locale, "product.buyShort")}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

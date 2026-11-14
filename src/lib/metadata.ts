import type { Metadata } from "next";
import { t, type Locale } from "@/i18n/dictionary";
import { editionHref, type Edition } from "@/data/editions";

export function homeMetadata(locale: Locale): Metadata {
  const path = locale === "es" ? "/" : "/en/";
  const title = t(locale, "meta.home.title");
  const description = t(locale, "meta.home.description");
  const image = "/assets/mazos/mazos.jpeg";

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        es: "/",
        en: "/en/",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      url: path,
      title,
      description,
      images: [
        {
          url: image,
          width: 1254,
          height: 1254,
          alt: t(locale, "hero.mediaAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function productMetadata(edition: Edition, locale: Locale): Metadata {
  const path = editionHref(edition, locale);
  const esPath = editionHref(edition, "es");
  const enPath = editionHref(edition, "en");
  const title = `${edition.title[locale]} — Arquilínea`;
  const description = edition.lead[locale];

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        es: esPath,
        en: enPath,
        "x-default": esPath,
      },
    },
    openGraph: {
      type: "website",
      url: path,
      title,
      description,
      images: [
        {
          url: edition.cover,
          width: edition.coverWidth,
          height: edition.coverHeight,
          alt: edition.coverAlt[locale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [edition.cover],
    },
  };
}

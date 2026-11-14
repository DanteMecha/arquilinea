import type { Locale } from "@/i18n/dictionary";
import { localizePath } from "@/i18n/dictionary";

export type EditionColor = "1" | "2" | "3" | "4";

export type LocalizedText = Record<Locale, string>;

export type GalleryImage = {
  src: string;
  alt: LocalizedText;
};

export type Edition = {
  slug: string;
  path: string;
  tab: string;
  tabLabel?: LocalizedText;
  color: EditionColor;
  cover: string;
  coverAlt: LocalizedText;
  coverWidth: number;
  coverHeight: number;
  title: LocalizedText;
  summary: LocalizedText;
  lead: LocalizedText;
  ribbon: LocalizedText;
  buyUrl: string;
  priceValue: number;
  priceFrom?: boolean;
  priceNote?: LocalizedText;
  specs?: Record<Locale, string[]>;
  promo?: {
    tag: LocalizedText;
    title: LocalizedText;
    priceValue: number;
  };
  gallery: GalleryImage[];
  isBook?: boolean;
};

const sharedSpecs: Record<Locale, string[]> = {
  es: [
    "48 cartas ilustradas de 8 × 8 cm",
    "Caja contenedora de 10,5 × 10,5 cm",
    "Libro desplegable con instrucciones",
    "2+ jugadores · 8+ años",
    "Combinable con las otras ediciones",
  ],
  en: [
    "48 illustrated cards, 8 × 8 cm",
    "Storage box, 10.5 × 10.5 cm",
    "Fold-out booklet with instructions",
    "2+ players · 8+ years",
    "Combinable with the other editions",
  ],
};

export function formatArs(locale: Locale, value: number): string {
  const formatted = new Intl.NumberFormat(
    locale === "es" ? "es-AR" : "en-US",
    { maximumFractionDigits: 0 },
  ).format(value);

  return `$${formatted} ARS`;
}

const boxesGallery: GalleryImage = {
  src: "/assets/portadas/cajas.jpg",
  alt: {
    es: "Cajas de Arquilínea",
    en: "Arquilínea boxes",
  },
};

export const editions: Edition[] = [
  {
    slug: "hasta-siglo-xix",
    path: "ediciones/hasta-siglo-xix",
    tab: "01",
    color: "1",
    cover: "/assets/portadas/arquilinea_1_hasta_siglo_xix.png",
    coverAlt: {
      es: "Hasta el siglo XIX — Arquilínea",
      en: "Up to the 19th century — Arquilínea",
    },
    coverWidth: 269,
    coverHeight: 270,
    title: {
      es: "Hasta el siglo XIX",
      en: "Up to the 19th century",
    },
    summary: {
      es: "Desde la Antigüedad hasta el siglo XIX: los cimientos de la historia de la arquitectura.",
      en: "From Antiquity to the 19th century: the foundations of architectural history.",
    },
    lead: {
      es: "Desde la Antigüedad hasta el siglo XIX: los cimientos de la historia de la arquitectura. Un recorrido por las obras que definieron el lenguaje de Occidente y de otras tradiciones.",
      en: "From Antiquity to the 19th century: the foundations of architectural history. A journey through the works that shaped the language of the West and other traditions.",
    },
    ribbon: {
      es: "Antigüedad · s. XIX",
      en: "Antiquity · 19th c.",
    },
    buyUrl: "https://www.miltrazos.com.ar/mil-trazos1/arquilinea/",
    priceFrom: true,
    priceValue: 34000,
    specs: sharedSpecs,
    gallery: [
      {
        src: "/assets/portadas/arquilinea_1_hasta_siglo_xix.png",
        alt: {
          es: "Hasta el siglo XIX — Arquilínea",
          en: "Up to the 19th century — Arquilínea",
        },
      },
      {
        src: "/assets/cartas/cartas-1.jpg",
        alt: {
          es: "Hasta el siglo XIX — cartas",
          en: "Up to the 19th century — cards",
        },
      },
      {
        src: "/assets/cartas/cartas-1-sq.jpg",
        alt: {
          es: "Hasta el siglo XIX — detalle de cartas",
          en: "Up to the 19th century — card detail",
        },
      },
      {
        src: "/assets/mazos/fotoJuego1.jpeg",
        alt: {
          es: "Hasta el siglo XIX en juego",
          en: "Up to the 19th century in play",
        },
      },
      boxesGallery,
    ],
  },
  {
    slug: "desde-siglo-xx",
    path: "ediciones/desde-siglo-xx",
    tab: "02",
    color: "2",
    cover: "/assets/portadas/arquilinea_2_desde_siglo_xx.png",
    coverAlt: {
      es: "Desde el siglo XX — Arquilínea",
      en: "From the 20th century — Arquilínea",
    },
    coverWidth: 269,
    coverHeight: 270,
    title: {
      es: "Desde el siglo XX",
      en: "From the 20th century",
    },
    summary: {
      es: "Movimientos modernos y contemporáneos que cambiaron la forma de construir y habitar.",
      en: "Modern and contemporary movements that changed how we build and live.",
    },
    lead: {
      es: "Movimientos modernos y contemporáneos que cambiaron la forma de construir y habitar. La edición que conecta la modernidad con el presente.",
      en: "Modern and contemporary movements that changed how we build and live. The edition that connects modernity with the present.",
    },
    ribbon: {
      es: "s. XX · Contemporáneo",
      en: "20th c. · Contemporary",
    },
    buyUrl:
      "https://www.miltrazos.com.ar/productos/arquilinea-2-juego-de-cartas/",
    priceFrom: true,
    priceValue: 34000,
    specs: sharedSpecs,
    gallery: [
      {
        src: "/assets/portadas/arquilinea_2_desde_siglo_xx.png",
        alt: {
          es: "Desde el siglo XX — Arquilínea",
          en: "From the 20th century — Arquilínea",
        },
      },
      {
        src: "/assets/cartas/cartas-2.jpg",
        alt: {
          es: "Desde el siglo XX — cartas",
          en: "From the 20th century — cards",
        },
      },
      {
        src: "/assets/cartas/cartas-2-sq.jpg",
        alt: {
          es: "Desde el siglo XX — detalle de cartas",
          en: "From the 20th century — card detail",
        },
      },
      {
        src: "/assets/mazos/fotoJuego2.jpeg",
        alt: {
          es: "Desde el siglo XX en juego",
          en: "From the 20th century in play",
        },
      },
      boxesGallery,
    ],
  },
  {
    slug: "arquitectas",
    path: "ediciones/arquitectas",
    tab: "03",
    color: "3",
    cover: "/assets/portadas/arquilinea_3_arquitectas.png",
    coverAlt: {
      es: "ArquitectAs — Arquilínea",
      en: "ArquitectAs — Arquilínea",
    },
    coverWidth: 273,
    coverHeight: 267,
    title: {
      es: "ArquitectAs",
      en: "ArquitectAs",
    },
    summary: {
      es: "Un recorrido por la trayectoria y las obras de las mujeres en la arquitectura.",
      en: "A journey through the careers and works of women in architecture.",
    },
    lead: {
      es: "Un recorrido por la trayectoria y las obras de las mujeres en la arquitectura. Una edición para poner sus nombres en la línea del tiempo.",
      en: "A journey through the careers and works of women in architecture. An edition that puts their names on the timeline.",
    },
    ribbon: {
      es: "Mujeres · Historia",
      en: "Women · History",
    },
    buyUrl:
      "https://www.miltrazos.com.ar/productos/arquilinea-3-arquitectas-juego-de-cartas/",
    priceFrom: true,
    priceValue: 34000,
    specs: sharedSpecs,
    gallery: [
      {
        src: "/assets/portadas/arquilinea_3_arquitectas.png",
        alt: {
          es: "ArquitectAs — Arquilínea",
          en: "ArquitectAs — Arquilínea",
        },
      },
      {
        src: "/assets/cartas/cartas-3.jpg",
        alt: {
          es: "ArquitectAs — cartas",
          en: "ArquitectAs — cards",
        },
      },
      {
        src: "/assets/cartas/cartas-3-sq.jpg",
        alt: {
          es: "ArquitectAs — detalle de cartas",
          en: "ArquitectAs — card detail",
        },
      },
      {
        src: "/assets/mazos/fotoJuego3.jpeg",
        alt: {
          es: "ArquitectAs en juego",
          en: "ArquitectAs in play",
        },
      },
      boxesGallery,
    ],
  },
  {
    slug: "latinoamerica",
    path: "ediciones/latinoamerica",
    tab: "04",
    color: "4",
    cover: "/assets/portadas/arquilinea_4_latinoamerica.png",
    coverAlt: {
      es: "Latinoamérica — Arquilínea",
      en: "Latin America — Arquilínea",
    },
    coverWidth: 273,
    coverHeight: 269,
    title: {
      es: "Latinoamérica",
      en: "Latin America",
    },
    summary: {
      es: "La arquitectura de nuestra región, su identidad, su paisaje y su historia.",
      en: "The architecture of our region: its identity, its landscape, its history.",
    },
    lead: {
      es: "La arquitectura de nuestra región, su identidad, su paisaje y su historia. Obras que dialogan con el territorio y la memoria.",
      en: "The architecture of our region: its identity, its landscape, its history. Works that dialogue with territory and memory.",
    },
    ribbon: {
      es: "Nuestra región",
      en: "Our region",
    },
    buyUrl: "https://www.miltrazos.com.ar/mil-trazos1/arquilinea/",
    priceFrom: true,
    priceValue: 34000,
    specs: sharedSpecs,
    gallery: [
      {
        src: "/assets/portadas/arquilinea_4_latinoamerica.png",
        alt: {
          es: "Latinoamérica — Arquilínea",
          en: "Latin America — Arquilínea",
        },
      },
      {
        src: "/assets/cartas/cartas-4.jpg",
        alt: {
          es: "Latinoamérica — cartas",
          en: "Latin America — cards",
        },
      },
      {
        src: "/assets/cartas/cartas-4-sq.jpg",
        alt: {
          es: "Latinoamérica — detalle de cartas",
          en: "Latin America — card detail",
        },
      },
      {
        src: "/assets/mazos/fotoJuego4.jpeg",
        alt: {
          es: "Latinoamérica en juego",
          en: "Latin America in play",
        },
      },
      boxesGallery,
    ],
  },
];

export const book: Edition = {
  slug: "biografias",
  path: "libro-arquitectas",
  tab: "Libro",
  tabLabel: {
    es: "Libro",
    en: "Book",
  },
  color: "3",
  cover: "/assets/portadas/arquilinea_biografias.png",
  coverAlt: {
    es: "Biografías ilustradas — Arquilínea",
    en: "Illustrated biographies — Arquilínea",
  },
  coverWidth: 493,
  coverHeight: 487,
  title: {
    es: "Biografías ilustradas",
    en: "Illustrated biographies",
  },
  summary: {
    es: "Las biografías ilustradas de las arquitectas que transformaron la historia. El complemento de la edición ArquitectAs.",
    en: "Illustrated biographies of the women architects who transformed history. The companion to the ArquitectAs edition.",
  },
  lead: {
    es: "Las biografías ilustradas de las arquitectas que transformaron la historia. El complemento de la edición ArquitectAs.",
    en: "Illustrated biographies of the women architects who transformed history. The companion to the ArquitectAs edition.",
  },
  ribbon: {
    es: "Biografías · ArquitectAs",
    en: "Biographies · ArquitectAs",
  },
  buyUrl:
    "https://www.miltrazos.com.ar/productos/arquitectas-libro-biografias-ilustradas-1wv8d/",
  priceValue: 27000,
  priceNote: {
    es: "Libro de biografías ilustradas.",
    en: "Illustrated biographies book.",
  },
  specs: {
    es: [
      "Libro de biografías ilustradas de arquitectas",
      "Ilustraciones de Ethy Kozak",
      "Complemento de la edición ArquitectAs",
      "Disponible en mil trazos",
    ],
    en: [
      "Illustrated biographies book of women architects",
      "Illustrations by Ethy Kozak",
      "Companion to the ArquitectAs edition",
      "Available at mil trazos",
    ],
  },
  promo: {
    tag: {
      es: "Promo",
      en: "Combo",
    },
    title: {
      es: "Libro + Juego 3 ArquitectAs",
      en: "Book + ArquitectAs game 3",
    },
    priceValue: 54000,
  },
  gallery: [
    {
      src: "/assets/portadas/arquilinea_biografias.png",
      alt: {
        es: "Biografías ilustradas — Arquilínea",
        en: "Illustrated biographies — Arquilínea",
      },
    },
    {
      src: "/assets/cartas/cartas-3.jpg",
      alt: {
        es: "ArquitectAs — cartas",
        en: "ArquitectAs — cards",
      },
    },
    {
      src: "/assets/cartas/cartas-3-sq.jpg",
      alt: {
        es: "ArquitectAs — detalle de cartas",
        en: "ArquitectAs — card detail",
      },
    },
    {
      src: "/assets/mazos/fotoJuego3.jpeg",
      alt: {
        es: "ArquitectAs en juego",
        en: "ArquitectAs in play",
      },
    },
    boxesGallery,
  ],
  isBook: true,
};

export const products: Edition[] = [...editions, book];

export function getEditionBySlug(slug: string): Edition | undefined {
  return editions.find((edition) => edition.slug === slug);
}

export function getRelated(edition: Edition): Edition[] {
  return products.filter((item) => item.slug !== edition.slug);
}

export function editionHref(edition: Edition, locale: Locale): string {
  return localizePath(locale, edition.path);
}

import type { Locale } from "@/i18n/dictionary";

export type LocalizedText = Record<Locale, string>;

export type DigitalCard = {
  slug: string;
  name: LocalizedText;
  author: LocalizedText;
  place: LocalizedText;
  year: number;
  yearLabel: string;
  front: string;
  back: string;
  alt: LocalizedText;
};

export type DigitalDeck = {
  id: string;
  name: LocalizedText;
  cards: DigitalCard[];
};

const asset = (slug: string) => `/assets/cartasDigitales/${slug}`;

function card(
  slug: string,
  name: LocalizedText,
  author: LocalizedText,
  place: LocalizedText,
  year: number,
  yearLabel: string,
): DigitalCard {
  return {
    slug,
    name,
    author,
    place,
    year,
    yearLabel,
    front: asset(`${slug}_frente.jpg`),
    back: asset(`${slug}_dorso.jpg`),
    alt: {
      es: `${name.es} — Arquilínea`,
      en: `${name.en} — Arquilínea`,
    },
  };
}

const hotelLlaoLlao = card(
  "hotel-llao-llao",
  { es: "Hotel Llao Llao", en: "Llao Llao Hotel" },
  { es: "Alejandro Bustillo", en: "Alejandro Bustillo" },
  { es: "Bariloche, Río Negro", en: "Bariloche, Río Negro" },
  1938,
  "1938",
);

const paradorAriston = card(
  "parador-ariston",
  { es: "Parador Aristón", en: "Parador Aristón" },
  { es: "Marcel Breuer", en: "Marcel Breuer" },
  { es: "Mar del Plata, Buenos Aires", en: "Mar del Plata, Buenos Aires" },
  1948,
  "1948",
);

const hotelProvincial = card(
  "hotel-provincial",
  { es: "Hotel Provincial", en: "Provincial Hotel" },
  { es: "Alejandro Bustillo", en: "Alejandro Bustillo" },
  { es: "Mar del Plata, Buenos Aires", en: "Mar del Plata, Buenos Aires" },
  1950,
  "1950",
);

const cabildoDeSalta = card(
  "cabildo-de-salta",
  { es: "Cabildo de Salta", en: "Cabildo of Salta" },
  { es: "Arquitectura colonial", en: "Colonial architecture" },
  { es: "Salta, Salta", en: "Salta, Salta" },
  1626,
  "1626",
);

const bibliotecaNacional = card(
  "biblioteca-nacional",
  { es: "Biblioteca Nacional", en: "National Library" },
  {
    es: "Clorindo Testa, Alicia Cazzaniga, Francisco Bullrich",
    en: "Clorindo Testa, Alicia Cazzaniga, Francisco Bullrich",
  },
  { es: "Ciudad de Buenos Aires", en: "Buenos Aires City" },
  1992,
  "1962–1992",
);

const catedralDeLaPlata = card(
  "catedral-de-la-plata",
  { es: "Catedral de La Plata", en: "Cathedral of La Plata" },
  {
    es: "Pedro Benoit, Ernesto Meyer, Emilio Coutaret",
    en: "Pedro Benoit, Ernesto Meyer, Emilio Coutaret",
  },
  { es: "La Plata, Buenos Aires", en: "La Plata, Buenos Aires" },
  1999,
  "1884–1999",
);

const casaCurutchet = card(
  "casa-curutchet",
  { es: "Casa Curutchet", en: "Curutchet House" },
  { es: "Le Corbusier", en: "Le Corbusier" },
  { es: "La Plata, Buenos Aires", en: "La Plata, Buenos Aires" },
  1953,
  "1949–1953",
);

const terrazaPalace = card(
  "terraza-palace",
  { es: "Terraza Palace", en: "Terraza Palace" },
  { es: "Antonio Bonet Castellana", en: "Antonio Bonet Castellana" },
  { es: "Mar del Plata, Buenos Aires", en: "Mar del Plata, Buenos Aires" },
  1960,
  "1957–1960",
);

const edificioBrown = card(
  "edificio-brown",
  { es: "Edificio Brown", en: "Brown Building" },
  { es: "Gerardo Caballero, Maite Fernández", en: "Gerardo Caballero, Maite Fernández" },
  { es: "Rosario, Santa Fe", en: "Rosario, Santa Fe" },
  2005,
  "2005",
);

export const digitalDecks: DigitalDeck[] = [
  {
    id: "ocio",
    name: {
      es: "Arquitectura del ocio",
      en: "Architecture of leisure",
    },
    cards: [hotelLlaoLlao, paradorAriston, hotelProvincial],
  },
  {
    id: "equipamientos",
    name: {
      es: "Equipamientos y cultura",
      en: "Civic and cultural buildings",
    },
    cards: [cabildoDeSalta, bibliotecaNacional, catedralDeLaPlata],
  },
  {
    id: "vivienda",
    name: {
      es: "Vivienda y ciudad",
      en: "Housing and city",
    },
    cards: [casaCurutchet, terrazaPalace, edificioBrown],
  },
];

export function sortCardsByYear(cards: DigitalCard[]): DigitalCard[] {
  return [...cards].sort((a, b) => a.year - b.year);
}

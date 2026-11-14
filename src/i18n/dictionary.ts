export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

const es = {
  "meta.home.title": "Arquilínea — El juego de la arquitectura en el tiempo",
  "meta.home.description":
    "Arquilínea es el juego de cartas que desafía la observación, el conocimiento, la estrategia y la memoria. Organizá cronológicamente las obras de la historia de la arquitectura.",

  "adbar.1": "48 cartas ilustradas",
  "adbar.2": "4 ediciones combinables",
  "adbar.3": "Competitivo y colaborativo",
  "adbar.4": "Envío a todo el país",

  "nav.principal": "Principal",
  "nav.juego": "El juego",
  "nav.ediciones": "Ediciones",
  "nav.jugar": "Cómo jugar",
  "nav.comprar": "Comprar",
  "nav.volver": "Volver a ediciones",
  "nav.links": "Enlaces",
  "lang.aria": "Cambiar idioma / Switch language",
  "logo.aria": "Arquilínea — inicio",

  "hero.title1": "Arquilínea.",
  "hero.title2": "El juego de",
  "hero.titleAccent": "la arquitectura en el tiempo.",
  "hero.eyebrow": "El juego de la arquitectura en el tiempo",
  "hero.sub":
    "Observación, conocimiento, estrategia y memoria. Organizá cronológicamente las grandes obras de la arquitectura, solo o en equipo.",
  "hero.buy": "Comprar",
  "hero.how": "Cómo se juega",
  "hero.mediaAlt": "Mazos de las cuatro ediciones de Arquilínea",

  "juego.title": "Un juego que pone a prueba tu conocimiento de arquitectura.",
  "juego.subtitle":
    "Arquilínea pone a prueba el conocimiento, la estrategia y la memoria, con variantes competitivas y colaborativas.",

  "stats.1.num": "48",
  "stats.1.title": "Cartas por juego",
  "stats.1.text": "Ilustradas, de 8 × 8 cm.",
  "stats.2.num": "4",
  "stats.2.title": "Ediciones",
  "stats.2.text": "Hasta el s. XIX · Desde el s. XX · ArquitectAs · Latinoamérica.",
  "stats.3.num": "2+",
  "stats.3.title": "Formas de jugar",
  "stats.3.text": "Competitiva y colaborativa.",
  "stats.4.num": "8+",
  "stats.4.title": "Para todas las edades",
  "stats.4.text": "Para chicos, grandes y aulas.",

  "versiones.title": "Cuatro recorridos por la arquitectura.",
  "versiones.subtitle": "Cada edición es un mazo independiente y combinable, de 48 cartas.",
  "versiones.seeAll": "Ver colección",

  "timeline.1": "Antigüedad",
  "timeline.2": "s. XIX",
  "timeline.3": "s. XX",
  "timeline.4": "Hoy",

  "howto.kicker":
    'Presentamos tres variantes. Más propuestas en: <a href="https://www.instagram.com/arqui_linea/" target="_blank" rel="noopener">@arqui_linea</a>.',
  "howto.title": "Cómo jugar",
  "howto.common.title": "Regla común",
  "howto.common.text":
    "Frente: obra ilustrada. Reverso: datos para comprobar. Cada grupo puede acordar el nivel de exigencia (obra, autoría, año) y jugar con una edición o combinarlas.",
  "howto.modes.title": "Modos de juego",
  "howto.label.goal": "Objetivo",
  "howto.label.desarrollo": "Desarrollo",
  "howto.label.players": "Participantes",
  "howto.label.setup": "Preparación",
  "howto.label.steps": "Cómo se juega",
  "howto.label.end": "Fin / victoria",
  "howto.label.note": "Nota",

  "howto.m1.name": "Línea de tiempo — individual o colaborativa",
  "howto.m1.goal": "Construir la línea cronológica más larga posible sin errores.",
  "howto.m1.desarrollo":
    "Cada participante roba una carta, la ubica en la línea según su época y la da vuelta para verificar. Si acierta, sigue la ronda; si no, termina el intento.",
  "howto.m1.players": "1 persona o en grupo cooperativo.",
  "howto.m1.setup":
    "Colocá una carta en el centro con los datos visibles como referencia inicial y dejá el resto del mazo boca abajo.",
  "howto.m1.steps.1":
    "Cada participante saca una carta. Quien obtiene la fecha más baja comienza. (Estas cartas se vuelven a poner en el mazo y se mezclan).",
  "howto.m1.steps.2":
    "Se reparten 4 cartas a cada participante o equipo, con el dorso hacia abajo.",
  "howto.m1.steps.3": "Se pone en el centro una carta cualquiera, con el dorso hacia arriba.",
  "howto.m1.steps.4":
    "El primer jugador elegirá una de sus cartas (sin ver el dorso) y la ubicará antes (si cree que es una obra anterior) o después (si cree que es posterior) de la carta que está en el centro de la mesa.",
  "howto.m1.steps.5":
    "Al darla vuelta, se verifica si está bien ubicada y se sigue la ronda hacia la izquierda.",
  "howto.m1.steps.6":
    "Si no está correctamente ubicada deberá corregir la posición y tomar una nueva carta del mazo.",
  "howto.m1.steps.7": "Se repite esta forma de juego en el sentido de la ronda.",
  "howto.m1.steps.8":
    "A medida que la línea de tiempo se va haciendo más larga es más difícil acertar la ubicación de la carta.",
  "howto.m1.end":
    "El juego termina al equivocarse (o al agotar el mazo). Se busca superar la fila más larga lograda.",
  "howto.m1.note":
    "Cada grupo puede adaptar la dinámica a su manera: jugar hasta equivocarse para marcar récord o acordar otra variante.",

  "howto.m2.name": "¿Cómo se llama?",
  "howto.m2.goal": "Recolectar la mayor cantidad de cartas.",
  "howto.m2.desarrollo":
    "Se muestra una carta por vez y el grupo intenta reconocer la obra. Quien acierta primero se la queda; si nadie la reconoce, se aparta y se continúa.",
  "howto.m2.players": "2 a 4 participantes, individual o por equipos.",
  "howto.m2.setup":
    "Colocá el mazo en el centro con la obra a la vista y los datos ocultos.",
  "howto.m2.steps.1":
    "Se toma la siguiente carta del mazo y se la ubica a la derecha o a la izquierda de la que está en la mesa, dependiendo si se cree que es anterior o posterior.",
  "howto.m2.steps.2":
    "Se da vuelta la carta y se leen los datos: si está bien ubicada se repite con la siguiente carta del mazo.",
  "howto.m2.steps.3":
    "A medida que la línea de tiempo se va haciendo más extensa, aumenta la dificultad para decidir la ubicación.",
  "howto.m2.end": "Cuando se termina el mazo, gana quien o el equipo que tenga más cartas.",
  "howto.m2.note":
    "Versión escalable: según el nivel, se puede pedir solo el nombre de la obra o sumar autoría y año.",

  "howto.m3.name": "Línea de tiempo — competitiva",
  "howto.m3.goal": "Quedarse sin cartas en la mano.",
  "howto.m3.desarrollo":
    "Por turnos, cada participante suma una carta a la línea y responde los datos de la obra según el nivel acordado.",
  "howto.m3.players": "2 a 6 participantes, individual o por equipos.",
  "howto.m3.setup":
    "Colocá una carta en el centro con los datos visibles y repartí 4 cartas a cada participante con los datos ocultos.",
  "howto.m3.steps.1":
    "El primer participante o equipo en decir en voz alta alguno de los datos que figuran en el dorso de la carta (nombre de la obra, autor/a, ubicación, año de construcción), se la queda.",
  "howto.m3.steps.2":
    "Para corroborar que sea correcto, dar vuelta la carta antes de pasar a la siguiente. Si no es correcto, se deja la carta al costado.",
  "howto.m3.steps.3":
    "La ronda continúa con la misma dinámica hasta que se termine el mazo o la cantidad de vueltas acordadas antes de comenzar el juego.",
  "howto.m3.end": "Gana quien primero se queda sin cartas.",
  "howto.m3.note":
    "Consejo: conviene guardar para el final las cartas cuya fecha se conoce con más certeza, porque la línea se vuelve más ajustada.",

  "caja.title": "Qué encontrás en la caja.",
  "caja.1.num": "48",
  "caja.1.title": "Cartas ilustradas",
  "caja.1.text": "Formato de 8 × 8 cm.",
  "caja.2.num": "10,5",
  "caja.2.title": "Caja contenedora",
  "caja.2.text": "De 10,5 × 10,5 cm.",
  "caja.3.num": "1",
  "caja.3.title": "Libro desplegable",
  "caja.3.text": "Blanco y negro, con las instrucciones para jugar.",

  "price.from": "Desde",
  "buy.title": "Llevá Arquilínea a tu mesa.",
  "buy.subtitle": "Elegí tu edición y comprala online con envío a todo el país.",
  "buy.button": "Comprar en mil trazos",
  "buy.note":
    "Envío gratis en mil trazos. Consultá también la disponibilidad en Máquinas de Mirar.",

  "product.back": "← Volver a ediciones",
  "product.buy": "Comprar en mil trazos",
  "product.keepExploring": "Seguir explorando",
  "product.priceNote":
    "Precio de referencia. Consultá el valor actual y las promociones en mil trazos.",
  "product.related": "Otras ediciones",
  "product.view": "Ver producto",
  "product.buyShort": "Comprar",

  "footer.stripAlt": "Arquilínea por el mundo",
  "footer.credits.title": "Hecho con mirada y detalle.",
  "footer.credits.subtitle":
    "Arquilínea es un proyecto de Ethy Kozak, editado por mil trazos.",
  "footer.credit.1.label": "Idea, selección e ilustraciones",
  "footer.credit.1.value": "Ethy Kozak",
  "footer.credit.2.label": "Diseño de cartas e instrucciones",
  "footer.credit.2.value": "Paula Fränkel · @mil.trazos",
  "footer.credit.3.label": "Diseño de caja",
  "footer.credit.3.value": "Paula Spritz · @juegosdelcaracol",
  "footer.credit.4.label": "Agradecimientos",
  "footer.credit.4.value":
    "Daniel Kozak, Ines Moisset, Carolina Quiroga y Carolina Fränkel",
  "footer.contact":
    'Recibimos sugerencias, comentarios y otras formas de jugar: <a href="mailto:arquilinea.arg@gmail.com">arquilinea.arg@gmail.com</a>',
  "footer.contactProduct":
    'Recibimos sugerencias, comentarios y otras formas de jugar: <a href="mailto:arquilinea.arg@gmail.com">arquilinea.arg@gmail.com</a> · IG: <a href="https://www.instagram.com/arqui_linea/" target="_blank" rel="noopener">@arqui_linea</a>',
  "footer.copyright": "© 2026 Arquilínea · Ethy Kozak",
  "footer.link.instagram": "Instagram · @arqui_linea",
  "footer.link.miltrazos": "mil trazos",
  "footer.link.maquinas": "Máquinas de Mirar",
} as const satisfies Record<string, string>;

export type TranslationKey = keyof typeof es;

const en = {
  "meta.home.title": "Arquilínea — The game of architecture through time",
  "meta.home.description":
    "Arquilínea is the card game that challenges observation, knowledge, strategy and memory. Order the works of architectural history chronologically.",

  "adbar.1": "48 illustrated cards",
  "adbar.2": "4 combinable editions",
  "adbar.3": "Competitive & collaborative",
  "adbar.4": "Nationwide shipping",

  "nav.principal": "Main",
  "nav.juego": "The game",
  "nav.ediciones": "Editions",
  "nav.jugar": "How to play",
  "nav.comprar": "Buy",
  "nav.volver": "Back to editions",
  "nav.links": "Links",
  "lang.aria": "Cambiar idioma / Switch language",
  "logo.aria": "Arquilínea — home",

  "hero.title1": "Arquilínea.",
  "hero.title2": "The game of",
  "hero.titleAccent": "the architecture through time.",
  "hero.eyebrow": "The game of the architecture through time",
  "hero.sub":
    "Observation, knowledge, strategy and memory. Order the great works of architecture chronologically, solo or in teams.",
  "hero.buy": "Buy",
  "hero.how": "How it plays",
  "hero.mediaAlt": "Decks of the four Arquilínea editions",

  "juego.title": "A game that makes you look differently.",
  "juego.subtitle":
    "Arquilínea challenges observation, knowledge, strategy and memory, with competitive and collaborative variants.",

  "stats.1.num": "48",
  "stats.1.title": "Cards per deck",
  "stats.1.text": "Illustrated, 8 × 8 cm each.",
  "stats.2.num": "4",
  "stats.2.title": "Editions",
  "stats.2.text": "Up to the 19th c. · From the 20th c. · ArquitectAs · Latin America.",
  "stats.3.num": "2+",
  "stats.3.title": "Ways to play",
  "stats.3.text": "Competitive and collaborative.",
  "stats.4.num": "8+",
  "stats.4.title": "For all ages",
  "stats.4.text": "For kids, grown-ups and classrooms.",

  "versiones.title": "Four journeys through architecture.",
  "versiones.subtitle": "Each edition is an independent, combinable deck of 48 cards.",
  "versiones.seeAll": "See collection",

  "timeline.1": "Antiquity",
  "timeline.2": "19th c.",
  "timeline.3": "20th c.",
  "timeline.4": "Today",

  "howto.kicker":
    'We present three variants. More ideas at: <a href="https://www.instagram.com/arqui_linea/" target="_blank" rel="noopener">@arqui_linea</a>.',
  "howto.title": "How to play",
  "howto.common.title": "Common rule",
  "howto.common.text":
    "Front: illustrated work. Back: data to verify. Each group can agree on the level of detail (work, author, year) and play with one edition or mix them.",
  "howto.modes.title": "Game modes",
  "howto.label.goal": "Goal",
  "howto.label.desarrollo": "Gameplay",
  "howto.label.players": "Players",
  "howto.label.setup": "Setup",
  "howto.label.steps": "How to play",
  "howto.label.end": "End / win",
  "howto.label.note": "Note",

  "howto.m1.name": "Timeline — solo or cooperative",
  "howto.m1.goal": "Build the longest possible chronological line without mistakes.",
  "howto.m1.desarrollo":
    "Each player draws a card, places it on the line according to its period, and flips it to verify. A correct placement continues the round; a mistake ends the attempt.",
  "howto.m1.players": "1 person or a cooperative group.",
  "howto.m1.setup":
    "Place one card in the center with its data visible as the starting reference and leave the rest of the deck face down.",
  "howto.m1.steps.1":
    "Each player draws a card. Whoever gets the earliest date goes first. (These cards are returned to the deck and shuffled.)",
  "howto.m1.steps.2":
    "Deal 4 cards to each player or team, with the data side hidden.",
  "howto.m1.steps.3": "Place any card in the center, with its data visible.",
  "howto.m1.steps.4":
    "The first player chooses one of their cards (without looking at the data) and places it before (if they think it is an earlier work) or after (if they think it is later) the card in the center.",
  "howto.m1.steps.5":
    "When flipped, check whether it is correctly placed and continue the round to the left.",
  "howto.m1.steps.6":
    "If it is not correctly placed, they must fix its position and draw a new card from the deck.",
  "howto.m1.steps.7": "This way of playing is repeated in the direction of the round.",
  "howto.m1.steps.8":
    "As the timeline grows longer, it becomes harder to place each card correctly.",
  "howto.m1.end":
    "The game ends on a mistake (or when the deck runs out). The aim is to beat the longest line achieved.",
  "howto.m1.note":
    "Each group can adapt the dynamic: play until a mistake to set a record or agree on another variant.",

  "howto.m2.name": "What's it called?",
  "howto.m2.goal": "Collect the most cards.",
  "howto.m2.desarrollo":
    "Show one card at a time and the group tries to recognize the work. Whoever answers first keeps it; if no one does, set it aside and continue.",
  "howto.m2.players": "2 to 4 players, individually or in teams.",
  "howto.m2.setup":
    "Place the deck in the center with the work visible and the data hidden.",
  "howto.m2.steps.1":
    "Draw the next card from the deck and place it to the right or left of the card on the table, depending on whether you think it is earlier or later.",
  "howto.m2.steps.2":
    "Flip the card and read the data: if it is correctly placed, repeat with the next card from the deck.",
  "howto.m2.steps.3":
    "As the timeline grows longer, it becomes harder to decide where each card goes.",
  "howto.m2.end":
    "When the deck is finished, the player or team with the most cards wins.",
  "howto.m2.note":
    "Scalable version: depending on the level, ask for just the work's name or add author and year.",

  "howto.m3.name": "Timeline — competitive",
  "howto.m3.goal": "Get rid of all the cards in your hand.",
  "howto.m3.desarrollo":
    "In turns, each player adds a card to the line and answers questions about the work according to the agreed level.",
  "howto.m3.players": "2 to 6 players, individually or in teams.",
  "howto.m3.setup":
    "Place one card in the center with data visible and deal 4 cards to each player with data hidden.",
  "howto.m3.steps.1":
    "The first player or team to say out loud any of the data on the back of the card (work name, author, location, year of construction) keeps it.",
  "howto.m3.steps.2":
    "To confirm it is correct, flip the card before moving on to the next one. If it is not correct, the card is set aside.",
  "howto.m3.steps.3":
    "The round continues the same way until the deck runs out or the agreed number of rounds is reached.",
  "howto.m3.end": "The first player to run out of cards wins.",
  "howto.m3.note":
    "Tip: save cards whose date you know best for last, as the line becomes tighter.",

  "caja.title": "What's in the box.",
  "caja.1.num": "48",
  "caja.1.title": "Illustrated cards",
  "caja.1.text": "8 × 8 cm format.",
  "caja.2.num": "10.5",
  "caja.2.title": "Storage box",
  "caja.2.text": "Measuring 10.5 × 10.5 cm.",
  "caja.3.num": "1",
  "caja.3.title": "Fold-out booklet",
  "caja.3.text": "Black and white, with the rules of the game.",

  "price.from": "From",
  "buy.title": "Bring Arquilínea to your table.",
  "buy.subtitle":
    "Choose your edition and buy it online with nationwide shipping.",
  "buy.button": "Buy at mil trazos",
  "buy.note": "Free shipping at mil trazos. Check availability at Máquinas de Mirar too.",

  "product.back": "← Back to editions",
  "product.buy": "Buy at mil trazos",
  "product.keepExploring": "Keep exploring",
  "product.priceNote":
    "Reference price. Check current price and promotions at mil trazos.",
  "product.related": "Other editions",
  "product.view": "View product",
  "product.buyShort": "Buy",

  "footer.stripAlt": "Arquilínea around the world",
  "footer.credits.title": "Made with a keen eye and detail.",
  "footer.credits.subtitle":
    "Arquilínea is a project by Ethy Kozak, published by mil trazos.",
  "footer.credit.1.label": "Idea, selection & illustrations",
  "footer.credit.1.value": "Ethy Kozak",
  "footer.credit.2.label": "Card & instructions design",
  "footer.credit.2.value": "Paula Fränkel · @mil.trazos",
  "footer.credit.3.label": "Box design",
  "footer.credit.3.value": "Paula Spritz · @juegosdelcaracol",
  "footer.credit.4.label": "Acknowledgements",
  "footer.credit.4.value":
    "Daniel Kozak, Ines Moisset, Carolina Quiroga y Carolina Fränkel",
  "footer.contact":
    'We welcome suggestions, comments, and other ways to play: <a href="mailto:arquilinea.arg@gmail.com">arquilinea.arg@gmail.com</a>',
  "footer.contactProduct":
    'We welcome suggestions, comments, and other ways to play: <a href="mailto:arquilinea.arg@gmail.com">arquilinea.arg@gmail.com</a> · IG: <a href="https://www.instagram.com/arqui_linea/" target="_blank" rel="noopener">@arqui_linea</a>',
  "footer.copyright": "© 2026 Arquilínea · Ethy Kozak",
  "footer.link.instagram": "Instagram · @arqui_linea",
  "footer.link.miltrazos": "mil trazos",
  "footer.link.maquinas": "Máquinas de Mirar",
} satisfies Record<TranslationKey, string>;

export const dictionary: Record<Locale, Record<TranslationKey, string>> = {
  es,
  en,
};

export function t(locale: Locale, key: TranslationKey): string {
  return dictionary[locale][key] ?? dictionary[defaultLocale][key] ?? key;
}

export function localizePath(locale: Locale, path: string): string {
  const normalized = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}/`;

  if (locale === defaultLocale) {
    return normalized;
  }

  return normalized === "/" ? "/en/" : `/en${normalized}`;
}

export function alternateLocalePath(pathname: string, target: Locale): string {
  const withoutLocale =
    pathname === "/en" || pathname === "/en/"
      ? "/"
      : pathname.replace(/^\/en(?=\/|$)/, "") || "/";

  return localizePath(target, withoutLocale);
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

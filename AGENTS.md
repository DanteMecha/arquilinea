# Arquilínea — Guía para agentes

## Proyecto
Sitio de Arquilínea, juego de cartas de arquitectura. Next.js 16 (App Router), React 19, TypeScript y CSS sin framework. Bilingüe ES/EN con export estático para Cloudflare Pages.

## Comandos
- `npm run dev` — desarrollo en `http://localhost:3000`.
- `npm run build` — genera el sitio estático en `out/`.
- `npm run start` — sirve `out/` localmente para revisar el build.
- `npm run lint` — ESLint.
- Deploy: publicar `out/` en Cloudflare Pages. Definir `NEXT_PUBLIC_SITE_URL` (fallback: `https://arquilinea.com.ar`).

## Estructura
- `src/app/(es)/` — rutas en español: home, `ediciones/[slug]`, `libro-arquitectas`.
- `src/app/(en)/en/` — mismas rutas en inglés bajo `/en/`.
- `src/app/(es)/layout.tsx`, `src/app/(en)/layout.tsx` — root layouts por grupo de rutas y `<html lang>`.
- `src/app/sitemap.ts`, `src/app/robots.ts` — sitemap y robots estáticos.
- `src/i18n/dictionary.ts` — fuente de verdad de textos ES/EN, helpers `t()`, `localizePath()`, `alternateLocalePath()`.
- `src/data/editions.ts` — ediciones, libro, precios, galerías, URLs de compra y relacionados.
- `src/data/howto.ts` — variantes y contenido de “Cómo jugar”.
- `src/data/digitalDeck.ts`, `src/data/discounts.ts` — cartas/mazos y códigos del desafío digital.
- `src/components/ChallengeGame.tsx` — lógica del desafío; rutas `/desafio/` y `/en/desafio/`.
- `src/lib/site.ts` — URL base del sitio.
- `src/lib/metadata.ts` — metadata, canonical, hreflang, Open Graph y Twitter.
- `src/components/` — layout (`Nav`, `LangSwitch`, `Footer`, `Adbar`), secciones, cards, galería, JSON-LD y plantillas (`HomePage`, `ProductView`).
- `src/styles/styles.css` — estilos globales y componentes; importa `typography.css`.
- `src/styles/typography.css` — fuentes/imports y variables tipográficas (`--font-hand`, `--font-body`).
- `public/assets/`
  - `logos/` — `Logo.jpeg`, `LogoPNG.png`, `favicon.svg`, etc.
  - `portadas/` — portadas de ediciones/libro y `cajas.jpg`.
  - `cartas/` — fotos/detalles de cartas (`cartas-*.jpg`).
  - `mazos/` — fotos de juego y mazos (`fotoJuego*.jpeg`, `mazos.jpeg`).
  - `porElMundo/` — fotos usadas en la galería del footer.
  - `ui/` — recursos de interfaz (`topo.svg`).
- `public/_redirects`, `public/_headers` — configuración de Cloudflare Pages.
- `next.config.ts` — `output: "export"`, `trailingSlash: true`, imágenes sin optimización.

## Convenciones
- **Bilingüe por rutas:** español en `/`, inglés en `/en/`. Todo texto nuevo debe ir en `src/i18n/dictionary.ts` (o en `src/data/*` si es contenido de producto) con ambos idiomas.
- **SEO:** cada página define metadata con `src/lib/metadata.ts`; mantener canonical, `hreflang` (`es`, `en`, `x-default`) y JSON-LD de producto/libro.
- **Tipografía/colores:** usar variables de `typography.css` y `:root` en `styles.css` (`--c1..--c4`, `--ink`, `--paper`, `--hard-shadow`, etc.).
- **Componentes:** cards (`.edition-card`, `.howto-card`, `.included-item`), features (`.feature`), timeline decorativa (`.timeline`), bandas (`.band-*`), botones (`.btn-primary`, `.btn-ghost`).
- **“Cómo jugar”:** 3 modos — (1) Línea de tiempo — individual o colaborativa, (2) ¿Cómo se llama?, (3) Línea de tiempo — competitiva — más regla común y notas. Textos en `src/i18n/dictionary.ts` (`howto.*`) y `src/data/howto.ts`. Modo 1: el intento termina al equivocarse (récord de fila más larga), dinámica adaptable por el grupo. Modo 2: escalable en exigencia (obra/autoría/año). No forzar reglas sobre mezclar ediciones.
- **Assets:** colocar en la subcarpeta correcta de `public/assets/` y referenciar con rutas absolutas (`/assets/...`). Evitar duplicados. Usar `<img>` (no `next/image`) porque el export es estático y las imágenes están sin optimizar. `_headers` cachea `/assets/*` por 1 día; al reemplazar una imagen, renombrarla o esperar la propagación.
- **Compra:** en esta fase los botones enlazan a mil trazos. La compra nativa dentro del sitio es fase 2; no redirigir la compra a otro dominio cuando se implemente.
- **Accesibilidad/estilo:** HTML semántico, `alt` en imágenes, respetar `prefers-reduced-motion`, mantener responsive existente.

## Desafío digital
- Rutas `/desafio/` y `/en/desafio/`; teaser en la home. Textos en `challenge.*`.
- Flujo: elegir mazo → ordenar las cartas por año de finalización → acierto 10%. Si falla, el mazo queda jugado y se elige otro; al jugar todos sin acierto no hay premio. Un solo código por sesión.
- Persistencia: `localStorage` `arquilinea-desafio-session` (`playedDeckIds`, `finished`, `code`, `percent`, `kind`).
- **Bloqueo:** los códigos actuales (`ARQ-10-TEST`) son de prueba, visibles en el bundle y validados en el cliente. No hay canje real, unicidad ni control de uso hasta implementar tienda/backend. No publicarlos como descuento productivo.

## Próximas fases (no implementar sin pedido)
- Tienda nativa: México primero (MXN, IVA 16%, OXXO/SPEI/tarjetas/MSI), Argentina después (ARS). Fulfillment por socio local y precios fijos por país, sin conversión automática.
- Pasarela sugerida: headless Shopify + Shopify Payments MX (requiere empresa mexicana). Custom checkout solo si el checkout fuera del dominio es innegociable. Definir antes facturación/CFDI, envíos, dominio y presupuesto.

## Tareas comunes
- Cambiar textos: editar `src/i18n/dictionary.ts` o el data file correspondiente, siempre en ES y EN.
- Cambiar tipografías: editar `src/styles/typography.css`.
- Agregar/editar reglas de juego: `src/i18n/dictionary.ts` + `src/data/howto.ts` + estilos `.howto-*` en `src/styles/styles.css`.
- Páginas de producto: seguir el patrón de `src/components/pages/ProductView.tsx` (hero con galería, specs, relacionados, JSON-LD).
- Cambiar precios o links de compra: editar `priceValue` (y `promo.priceValue` si aplica) en `src/data/editions.ts`; el texto visible, el JSON-LD y el “Desde” de la home se derivan de ahí.

## Verificación rápida
- `npm run lint` y `npm run build`.
- Revisar en `out/` que `<html lang>`, canonical, `hreflang`, links ES/EN y JSON-LD sean correctos.
- Revisar enlaces/rutas de assets y layout responsive (mobile/desktop). No hay suite de tests.

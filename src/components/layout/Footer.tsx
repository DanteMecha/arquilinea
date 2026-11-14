import {
  t,
  type Locale,
  type TranslationKey,
} from "@/i18n/dictionary";

const footerLinks: { key: TranslationKey; href: string }[] = [
  {
    key: "footer.link.instagram",
    href: "https://www.instagram.com/arqui_linea/",
  },
  {
    key: "footer.link.miltrazos",
    href: "https://www.miltrazos.com.ar/mil-trazos1/arquilinea/",
  },
  {
    key: "footer.link.maquinas",
    href: "https://maquinasdemirar.mitiendanube.com/productos/arquilinea-el-juego-de-la-arquitectura-en-el-tiempo/",
  },
];

const footerCredits: {
  labelKey: TranslationKey;
  valueKey: TranslationKey;
}[] = [
  { labelKey: "footer.credit.1.label", valueKey: "footer.credit.1.value" },
  { labelKey: "footer.credit.2.label", valueKey: "footer.credit.2.value" },
  { labelKey: "footer.credit.3.label", valueKey: "footer.credit.3.value" },
  { labelKey: "footer.credit.4.label", valueKey: "footer.credit.4.value" },
];

const stripImages = Array.from(
  { length: 6 },
  (_, index) => `/assets/porElMundo/porElMundo_${index + 1}.jpeg`,
);

function FooterLinks({ locale }: { locale: Locale }) {
  return (
    <nav className="footer-links" aria-label={t(locale, "nav.links")}>
      {footerLinks.map((link) => (
        <a key={link.key} href={link.href} target="_blank" rel="noopener">
          {t(locale, link.key)}
        </a>
      ))}
    </nav>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <>
      <div className="footer-strip">
        <div className="footer-strip-grid">
          {stripImages.map((src) => (
            <img
              key={src}
              src={src}
              alt={t(locale, "footer.stripAlt")}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="credits">
            <h2>{t(locale, "footer.credits.title")}</h2>
            <p className="sub">{t(locale, "footer.credits.subtitle")}</p>

            <dl>
              {footerCredits.map((credit) => (
                <div key={credit.labelKey}>
                  <dt>{t(locale, credit.labelKey)}</dt>
                  <dd>{t(locale, credit.valueKey)}</dd>
                </div>
              ))}
            </dl>

            <p
              className="footer-contact"
              dangerouslySetInnerHTML={{ __html: t(locale, "footer.contact") }}
            />
          </div>
        </div>

        <div className="footer-inner">
          <span>{t(locale, "footer.copyright")}</span>
          <FooterLinks locale={locale} />
        </div>
      </footer>
    </>
  );
}

export function ProductFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>{t(locale, "footer.copyright")}</span>
        <FooterLinks locale={locale} />
      </div>
      <div className="footer-contact-row">
        <p
          className="footer-contact"
          dangerouslySetInnerHTML={{
            __html: t(locale, "footer.contactProduct"),
          }}
        />
      </div>
    </footer>
  );
}

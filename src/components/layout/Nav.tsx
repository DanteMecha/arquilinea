import Link from "next/link";
import { localizePath, t, type Locale } from "@/i18n/dictionary";
import { LangSwitch } from "./LangSwitch";

type NavProps = {
  locale: Locale;
  variant: "home" | "product";
  buyUrl?: string;
};

export function Nav({ locale, variant, buyUrl }: NavProps) {
  const homeHref = localizePath(locale, "/");

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link className="logo" href={homeHref} aria-label={t(locale, "logo.aria")}>
          <img src="/assets/logos/LogoPNG.png" alt="Arquilínea" />
        </Link>

        <nav className="nav-links" aria-label={t(locale, "nav.principal")}>
          {variant === "home" ? (
            <>
              <a href="#juego">{t(locale, "nav.juego")}</a>
              <a href="#versiones">{t(locale, "nav.ediciones")}</a>
              <a href="#jugar">{t(locale, "nav.jugar")}</a>
              <a href="#comprar">{t(locale, "nav.comprar")}</a>
            </>
          ) : (
            <>
              <Link href={homeHref}>{t(locale, "nav.volver")}</Link>
              {buyUrl ? (
                <a href={buyUrl} target="_blank" rel="noopener">
                  {t(locale, "nav.comprar")}
                </a>
              ) : null}
            </>
          )}
        </nav>

        <LangSwitch locale={locale} />
      </div>
    </header>
  );
}

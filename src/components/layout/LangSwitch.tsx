"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  alternateLocalePath,
  t,
  type Locale,
} from "@/i18n/dictionary";

export function LangSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";

  return (
    <nav className="lang" aria-label={t(locale, "lang.aria")}>
      <span className="lang-label">
        <Link
          className={`lang-es${locale === "es" ? " is-active" : ""}`}
          href={alternateLocalePath(pathname, "es")}
          hrefLang="es"
          aria-current={locale === "es" ? "page" : undefined}
        >
          ES
        </Link>
        <Link
          className={`lang-en${locale === "en" ? " is-active" : ""}`}
          href={alternateLocalePath(pathname, "en")}
          hrefLang="en"
          aria-current={locale === "en" ? "page" : undefined}
        >
          EN
        </Link>
      </span>
    </nav>
  );
}

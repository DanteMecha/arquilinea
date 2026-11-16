import type { Locale } from "@/i18n/dictionary";
import { Adbar } from "@/components/layout/Adbar";
import { Nav } from "@/components/layout/Nav";
import { SiteFooter } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { StatsSection } from "@/components/sections/StatsSection";
import { EditionsSection } from "@/components/sections/EditionsSection";
import { HowToSection } from "@/components/sections/HowToSection";
import { BoxSection } from "@/components/sections/BoxSection";
import { ChallengeTeaser } from "@/components/sections/ChallengeTeaser";
import { BuySection } from "@/components/sections/BuySection";
import { ScrollToTop } from "@/components/ScrollToTop";

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <ScrollToTop />
      <Adbar locale={locale} />
      <Nav locale={locale} variant="home" />

      <main>
        <Hero locale={locale} />
        <StatsSection locale={locale} />
        <EditionsSection locale={locale} />
        <HowToSection locale={locale} />
        <BoxSection locale={locale} />
        <ChallengeTeaser locale={locale} />
        <BuySection locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </>
  );
}

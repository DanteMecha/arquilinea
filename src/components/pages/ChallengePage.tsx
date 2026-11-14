import { t, type Locale } from "@/i18n/dictionary";
import { discountRedeemUrl } from "@/data/discounts";
import { Adbar } from "@/components/layout/Adbar";
import { Nav } from "@/components/layout/Nav";
import { SiteFooter } from "@/components/layout/Footer";
import { ChallengeGame } from "@/components/ChallengeGame";

export function ChallengePage({ locale }: { locale: Locale }) {
  return (
    <>
      <Adbar locale={locale} />
      <Nav locale={locale} variant="challenge" buyUrl={discountRedeemUrl} />

      <main>
        <section className="challenge-hero">
          <div className="container">
            <p className="eyebrow">{t(locale, "challenge.eyebrow")}</p>
            <h1>{t(locale, "challenge.title")}</h1>
            <p className="sub">{t(locale, "challenge.sub")}</p>
          </div>
        </section>

        <section className="section challenge-section">
          <div className="container">
            <ChallengeGame locale={locale} />
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />
    </>
  );
}

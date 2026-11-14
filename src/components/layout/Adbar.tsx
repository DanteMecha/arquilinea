import { t, type Locale } from "@/i18n/dictionary";

export function Adbar({ locale }: { locale: Locale }) {
  const items = [
    t(locale, "adbar.1"),
    t(locale, "adbar.2"),
    t(locale, "adbar.3"),
    t(locale, "adbar.4"),
  ];

  return (
    <div className="adbar" aria-hidden="true">
      <div className="adbar-track">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

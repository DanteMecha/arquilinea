export type DiscountTierId = "win" | "consolation";

export type DiscountTier = {
  id: DiscountTierId;
  percent: number;
  codes: string[];
};

export const discountTiers: Record<DiscountTierId, DiscountTier> = {
  win: {
    id: "win",
    percent: 10,
    codes: ["ARQ-10-TEST"],
  },
  consolation: {
    id: "consolation",
    percent: 5,
    codes: ["ARQ-5-TEST"],
  },
};

export const discountRedeemUrl =
  "https://www.miltrazos.com.ar/mil-trazos1/arquilinea/";

export function pickDiscountCode(tier: DiscountTierId): string {
  const { codes } = discountTiers[tier];

  if (codes.length === 0) {
    return "";
  }

  return codes[Math.floor(Math.random() * codes.length)];
}

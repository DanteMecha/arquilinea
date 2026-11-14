import type { Metadata } from "next";
import { ChallengePage } from "@/components/pages/ChallengePage";
import { challengeMetadata } from "@/lib/metadata";

export const metadata: Metadata = challengeMetadata("es");

export default function Page() {
  return <ChallengePage locale="es" />;
}

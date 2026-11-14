import type { Metadata } from "next";
import { ChallengePage } from "@/components/pages/ChallengePage";
import { challengeMetadata } from "@/lib/metadata";

export const metadata: Metadata = challengeMetadata("en");

export default function Page() {
  return <ChallengePage locale="en" />;
}

import type { TranslationKey } from "@/i18n/dictionary";

export type HowToMode = {
  id: string;
  tab: string;
  color: "1" | "3" | "4";
  nameKey: TranslationKey;
  fields: { labelKey: TranslationKey; valueKey: TranslationKey }[];
  steps: TranslationKey[];
  endKey: TranslationKey;
  noteKey: TranslationKey;
};

export const howToModes: HowToMode[] = [
  {
    id: "m1",
    tab: "01",
    color: "1",
    nameKey: "howto.m1.name",
    fields: [
      { labelKey: "howto.label.goal", valueKey: "howto.m1.goal" },
      { labelKey: "howto.label.desarrollo", valueKey: "howto.m1.desarrollo" },
      { labelKey: "howto.label.players", valueKey: "howto.m1.players" },
      { labelKey: "howto.label.setup", valueKey: "howto.m1.setup" },
    ],
    steps: [
      "howto.m1.steps.1",
      "howto.m1.steps.2",
      "howto.m1.steps.3",
      "howto.m1.steps.4",
      "howto.m1.steps.5",
      "howto.m1.steps.6",
      "howto.m1.steps.7",
      "howto.m1.steps.8",
    ],
    endKey: "howto.m1.end",
    noteKey: "howto.m1.note",
  },
  {
    id: "m2",
    tab: "02",
    color: "3",
    nameKey: "howto.m2.name",
    fields: [
      { labelKey: "howto.label.goal", valueKey: "howto.m2.goal" },
      { labelKey: "howto.label.desarrollo", valueKey: "howto.m2.desarrollo" },
      { labelKey: "howto.label.players", valueKey: "howto.m2.players" },
      { labelKey: "howto.label.setup", valueKey: "howto.m2.setup" },
    ],
    steps: ["howto.m2.steps.1", "howto.m2.steps.2", "howto.m2.steps.3"],
    endKey: "howto.m2.end",
    noteKey: "howto.m2.note",
  },
  {
    id: "m3",
    tab: "03",
    color: "4",
    nameKey: "howto.m3.name",
    fields: [
      { labelKey: "howto.label.goal", valueKey: "howto.m3.goal" },
      { labelKey: "howto.label.desarrollo", valueKey: "howto.m3.desarrollo" },
      { labelKey: "howto.label.players", valueKey: "howto.m3.players" },
      { labelKey: "howto.label.setup", valueKey: "howto.m3.setup" },
    ],
    steps: ["howto.m3.steps.1", "howto.m3.steps.2", "howto.m3.steps.3"],
    endKey: "howto.m3.end",
    noteKey: "howto.m3.note",
  },
];

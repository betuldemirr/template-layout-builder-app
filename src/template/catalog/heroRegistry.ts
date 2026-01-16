import type { VariantEntry } from "../types";
import HeroA from "../../sections/hero/HeroA";
import HeroB from "../../sections/hero/HeroB";

export const heroRegistry: VariantEntry[] = [
  {
    id: "hero.a",
    section: "hero",
    name: "Hero A",
    description: "Left text with CTA, right visual placeholder",
    Component: HeroA,
    schema: {
      title: { type: "string", default: "AI website builder" },
      subtitle: { type: "string", default: "Compose pages using modular sections and design tokens" },
      primaryAction: { type: "string", default: "Get Started" },
    },
  },
  {
    id: "hero.b",
    section: "hero",
    name: "Hero B",
    description: "Centered headline with CTA",
    Component: HeroB,
    schema: {
      title: { type: "string", default: "Design better websites with AI" },
      subtitle: { type: "string", default: "Let AI assemble your layout from sections" },
      primaryAction: { type: "string", default: "Get Started" },
      imgUrl: {
        type: "string",
        default: "https://picsum.photos/seed/picsum/1600/900",
      },
    },
  },
];

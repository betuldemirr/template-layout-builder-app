import type { VariantEntry } from "../types";
import FeaturesA from "../../sections/features/FeaturesA";
import FeaturesB from "../../sections/features/FeaturesB";

export const featuresRegistry: VariantEntry[] = [
  {
    id: "features.a",
    section: "features",
    name: "Features A",
    description: "3-column feature grid with bar",
    Component: FeaturesA,
    schema: {
      heading: {
        type: "string",
        default: "Simple and flexible features",
      },
      subtitle: {
        type: "string",
        default: "A clean set of features designed to work with any layout style.",
      },
      items: {
        type: "array",
        description: "List of feature items",
        default: [
          {
            title: "Clean structure",
            description: "Organized sections help you maintain a readable layout.",
          },
          {
            title: "Adaptable design",
            description: "Each part can be rearranged to fit different page types.",
          },
          {
            title: "Fast editing",
            description: "Make quick adjustments without affecting the whole layout.",
          },
        ],
        items: {
          type: "object",
          properties: {
            title: { type: "string", default: "Feature title" },
            description: { type: "string", default: "Feature description" },
          },
        },
      },
    },
  },
  {
    id: "features.b",
    section: "features",
    name: "Features B",
    description: "Left large heading, right vertical list layout",
    Component: FeaturesB,
    schema: {
      heading: {
        type: "string",
        default: "Built for everyday use",
      },
      subtitle: {
        type: "string",
        default: "Designed with scalability and AI-driven UX in mind",
      },
      items: {
        type: "array",
        description: "Vertical list of feature items",
        default: [
          {
            title: "AI-driven layouts",
            description: "Adapt sections dynamically as AI recommends the best structure.",
          },
          {
            title: "Reusable tokens",
            description: "A unified design system ensures global consistency.",
          },
          {
            title: "Themeable components",
            description: "Switch light/dark instantly with shared semantic tokens.",
          },
        ],
        items: {
          type: "object",
          properties: {
            title: { type: "string", default: "Feature title" },
            description: { type: "string", default: "Feature description" },
          },
        },
      },
    },
  },
];
import type { VariantEntry } from "../types";
import { headerRegistry } from "./headerRegistry";
import { heroRegistry } from "./heroRegistry";
import { featuresRegistry } from "./featuresRegistry";

export const catalog: VariantEntry[] = [
  ...headerRegistry,
  ...heroRegistry,
  ...featuresRegistry,
];

export const catalogById = new Map<string, VariantEntry>(
  catalog.map((c) => [c.id, c])
);

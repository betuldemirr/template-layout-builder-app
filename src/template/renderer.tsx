import React from "react";
import { catalogById } from "./catalog";
import type { VariantEntry } from "./types";

export function renderVariantById(id: string, props: any = {}) {
  const entry: VariantEntry | undefined = catalogById.get(id);

  if (!entry) {
    return <div>Unknown component: {id}</div>;
  }

  const Component = entry.Component;

  return <Component {...props} />;
}

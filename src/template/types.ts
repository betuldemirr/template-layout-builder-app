import type React from "react";

export type SectionType = "header" | "hero" | "features"; // section type

export type SchemaFieldType = "string" | "number" | "boolean" | "array" | "object"; //basic schema types

export type PrimitiveSchemaField = {
  type: "string" | "number" | "boolean";
  default?: string | number | boolean;
  description?: string;
};

export type ArraySchemaField = {
  type: "array";
  description?: string;
  default?: unknown[];
  items: VariantSchemaField;
};

export type ObjectSchemaField = {
  type: "object";
  description?: string;
  default?: Record<string, unknown>;
  properties: Record<string, VariantSchemaField>;
};

export type VariantSchemaField =
  | PrimitiveSchemaField
  | ArraySchemaField
  | ObjectSchemaField;

export type VariantSchema = Record<string, VariantSchemaField>; // all schema props for a component

export type VariantMeta = { //for metadata
  id: string;
  section: SectionType;
  name: string;
  description: string;
};

export type VariantEntry = VariantMeta & {
  Component: React.ComponentType<any>;
  schema?: VariantSchema;
};

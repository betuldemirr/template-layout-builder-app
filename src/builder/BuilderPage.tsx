import React, { useMemo, useState } from "react";
import { catalog } from "../template/catalog";
import { renderVariantById } from "../template/renderer";
import VariantSelect from "./components/VariantSelect";
import PreviewFrame from "./components/PreviewFrame";
import ThemeScope from "../theme/ThemeScope";
import { useTheme } from "../theme/useTheme";
import type { ThemeName } from "../theme/tokens";

export default function BuilderPage() {
  const headerOptions = useMemo(
    () =>
      catalog
        .filter((s) => s.section === "header")
        .map((s) => ({ value: s.id, label: s.name })),
    []
  );
  const heroOptions = useMemo(() =>  
      catalog
        .filter((s) => s.section === "hero")
        .map((s) => ({ value: s.id, label: s.name })),
    []
  );
  const featuresOptions = useMemo(() =>  
      catalog
        .filter((s) => s.section === "features")
        .map((s) => ({ value: s.id, label: s.name })),
    []
  );

  const [selectedHeaderId, setSelectedHeaderId] = useState<string>(
    headerOptions[0]?.value ?? "header.a"
  );
  const [selectedHeroId, setSelectedHeroId] = useState<string>(
    heroOptions[0]?.value ?? "hero.a"
  );
  const [selectedFeatureId, setSelectedFeatureId] = useState<string>(
    featuresOptions[0]?.value ?? "features.a"
  );
  
  const { themeName, setThemeName, tokens } = useTheme();

  const themeOptions = useMemo(
    () =>
      [
        { value: "light", label: "Light" },
        { value: "dark", label: "Dark" },
      ] as const,
    []
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-center items-center">
        <h1 className="text-xl font-semibold m-0">
          Template Skeleton & Selectable Layout System
        </h1>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[340px_1fr]">
        <aside className="h-fit rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="text-xs font-semibold tracking-widest text-muted m-0">
            Layout Selection
          </h2>

          <VariantSelect<ThemeName>
            label="Theme"
            value={themeName}
            options={themeOptions}
            onChange={setThemeName}
          />
          <VariantSelect
            label="Header Variant"
            value={selectedHeaderId}
            options={headerOptions}
            onChange={setSelectedHeaderId}
          />
          <VariantSelect
            label="Hero Variant"
            value={selectedHeroId}
            options={heroOptions}
            onChange={setSelectedHeroId}
          />
          <VariantSelect
            label="Features Variant"
            value={selectedFeatureId}
            options={featuresOptions}
            onChange={setSelectedFeatureId}
          />
        </aside>

        <PreviewFrame >
          <ThemeScope tokens={tokens} className="min-h-full bg-bg text-text">
            {renderVariantById(selectedHeaderId)}
            {renderVariantById(selectedHeroId)}
            {renderVariantById(selectedFeatureId)}
          </ThemeScope>
        </PreviewFrame>
      </div>
    </div>
  );
}
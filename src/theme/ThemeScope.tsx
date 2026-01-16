import React from "react";
import { ThemeTokensType } from "./tokens";

type Props = {
  tokens: ThemeTokensType;
  children: React.ReactNode;
  className?: string;
};

export default function ThemeScope({ tokens, children, className }: Props) {
  const style: React.CSSProperties = {
    ["--bg" as any]: tokens.colors.bg,
    ["--surface" as any]: tokens.colors.surface,
    ["--text" as any]: tokens.colors.text,
    ["--muted" as any]: tokens.colors.muted,
    ["--border" as any]: tokens.colors.border,
    ["--primary" as any]: tokens.colors.primary,
    ["--onPrimary" as any]: tokens.colors.onPrimary,

    ["--font" as any]: tokens.typography.fontFamily,

    ["--space-xs" as any]: `${tokens.spacing.xs}px`,
    ["--space-sm" as any]: `${tokens.spacing.sm}px`,
    ["--space-md" as any]: `${tokens.spacing.md}px`,
    ["--space-lg" as any]: `${tokens.spacing.lg}px`,
    ["--space-xl" as any]: `${tokens.spacing.xl}px`,

    ["--radius-sm" as any]: `${tokens.radius.sm}px`,
    ["--radius-md" as any]: `${tokens.radius.md}px`,
    ["--radius-lg" as any]: `${tokens.radius.lg}px`,
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

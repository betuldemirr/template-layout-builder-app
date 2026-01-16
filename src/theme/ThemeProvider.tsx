import React, { createContext, useMemo, useState } from "react";
import { themes, type ThemeName, type ThemeTokensType, defaultThemeName } from "./tokens";

type ThemeContextValue = {
  themeName: ThemeName;
  tokens: ThemeTokensType;
  setThemeName: (name: ThemeName) => void;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

type Props = { children: React.ReactNode; defaultTheme?: ThemeName };

export function ThemeProvider({ children, defaultTheme = defaultThemeName }: Props) {
  const [themeName, setThemeName] = useState<ThemeName>(defaultTheme);

  const value = useMemo(
    () => ({
      themeName,
      tokens: themes[themeName],
      setThemeName,
    }),
    [themeName]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

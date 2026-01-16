export type ThemeTokensType = {
  colors: {
    bg: string;
    surface: string;
    text: string;
    muted: string;
    border: string;
    primary: string;
    onPrimary: string;
  };

  typography: {
    fontFamily: string;
    size: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    weight: {
      regular: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    lineHeight: {
      tight: number;
      normal: number;
      relaxed: number;
    };
  };

  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };

  radius: {
    sm: number;
    md: number;
    lg: number;
  };

  shadow: {
    sm: string;
    md: string;
  };
};

const fontFamily = `system-ui, Arial, sans-serif, Roboto`;

const base: Pick<ThemeTokensType, "typography" | "spacing" | "radius" | "shadow"> = {
  typography: {
    fontFamily,
    size: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 24,
    },
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.7,
    },
  },
  spacing: {
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radius: {
    sm: 10,
    md: 12,
    lg: 16,
  },
  shadow: {
    sm: "0 1px 2px rgba(0,0,0,0.05)",
    md: "0 10px 20px rgba(0,0,0,0.10)",
  },
};

export const lightTokens: ThemeTokensType = {
  colors: {
    bg: "#ffffff",
    surface: "#ffffff",
    text: "#0f172a",
    muted: "#64748b",
    border: "#e5e7eb",
    primary: "#4f46e5",
    onPrimary: "#ffffff",
  },
  ...base,
};

export const darkTokens: ThemeTokensType = {
  colors: {
    bg: "#0b0f17",
    surface: "#111827",
    text: "#e5e7eb",
    muted: "#9ca3af",
    border: "rgba(255,255,255,0.10)",
    primary: "#6366f1",
    onPrimary: "#ffffff",
  },
  ...base,
};

export const themes = {
  light: lightTokens,
  dark: darkTokens,
} as const;

export type ThemeName = keyof typeof themes;

export const defaultThemeName: ThemeName = "light";

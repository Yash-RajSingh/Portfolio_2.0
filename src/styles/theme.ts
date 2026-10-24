export const theme = {
  colorScheme: "light",
  colors: {
    background: "#f4f6fa",
    surface: "#ffffff",
    surfaceAlt: "#eef2f8",
    border: "#dde3ec",
    grid: "#dfe6f3",
    text: "#13203a",
    textMuted: "#5b6476",

    ink: "#13203a",
    onInk: "#ffffff",
    inkMuted: "#9aa6bf",

    accent: "#1f7a4d",
    accentSoft: "#dcefe3",
    onAccent: "#ffffff",
    warm: "#e0a43a",

    barMuted: "#c6d1e0",
    barSoft: "#a9bcd8",

    tileGreen: "#9ccbb0",
    tileBlue: "#b3c6e3",
    tileYellow: "#f2c983",

    thumbSlate: "#e3e8ef",
    thumbBlue: "#dbe4f3",
    thumbSand: "#f6e7c6",
  },
  spacing: (n: number) => `${n / 4}rem`,
  radius: "0.75rem",
  maxWidth: "86rem",
  font: {
    family: "'Inter', system-ui, -apple-system, Segoe UI, sans-serif",
    display: "'Bricolage Grotesque', 'Inter', system-ui, sans-serif",
    mono: "'JetBrains Mono', ui-monospace, Consolas, monospace",
    size: {
      xs: "0.75rem",
      sm: "0.8125rem",
      base: "0.9375rem",
      lg: "1.125rem",
      xl: "1.75rem",
    },
  },
  header: {
    height: "3.5rem",
  },
};

export const darkTheme: AppThemeShape = {
  ...theme,
  colorScheme: "dark",
  colors: {
    background: "#0f1a2c",
    surface: "#14223a",
    surfaceAlt: "#111e33",
    border: "#24334d",
    grid: "#1b2a44",
    text: "#e6ecf5",
    textMuted: "#9aa6bf",

    ink: "#14223a",
    onInk: "#e6ecf5",
    inkMuted: "#9aa6bf",

    accent: "#4fd1a0",
    accentSoft: "#1d4d3a",
    onAccent: "#0f1a2c",
    warm: "#e0a43a",

    barMuted: "#2a3a57",
    barSoft: "#34486b",

    tileGreen: "#245a45",
    tileBlue: "#3a5480",
    tileYellow: "#7d6220",

    thumbSlate: "#1c2b45",
    thumbBlue: "#22365a",
    thumbSand: "#3d3420",
  },
};

type AppThemeShape = typeof theme;
export type AppTheme = AppThemeShape;

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}

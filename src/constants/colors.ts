import { brand } from "@/lib/branding";

export const brandColors = {
  primary: brand.primaryColor,
  secondary: brand.secondaryColor,
  accent: brand.accentColor,
  background: brand.backgroundColor,
  surface: brand.surfaceColor,
  textPrimary: brand.textPrimaryColor,
  textSecondary: brand.textSecondaryColor,
  border: "rgba(17, 24, 39, 0.12)",
} as const;

export const semanticColors = {
  heroGlow: "rgba(0, 87, 255, 0.16)",
  cardBorder: "rgba(7, 43, 120, 0.12)",
  muted: "#E5E7EB",
} as const;

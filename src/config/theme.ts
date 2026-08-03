import { brandColors } from "@/constants/colors";
import { brand } from "@/lib/branding";

export const themeConfig = {
  mode: "system",
  colors: brandColors,
  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
  },
  radius: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
    "2xl": "2rem",
  },
  shadows: {
    soft: "0 12px 30px -12px rgba(7, 43, 120, 0.18)",
    corporate: "0 24px 60px -20px rgba(7, 43, 120, 0.24)",
    modern: "0 20px 40px -18px rgba(15, 23, 42, 0.24)",
  },
  animation: {
    fast: "150ms ease-out",
    base: "250ms ease-out",
    slow: "400ms ease-out",
  },
  transitions: {
    fast: "150ms cubic-bezier(0.2, 0.8, 0.2, 1)",
    base: "250ms cubic-bezier(0.2, 0.8, 0.2, 1)",
    slow: "400ms cubic-bezier(0.2, 0.8, 0.2, 1)",
  },
  containerWidths: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1440px",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  typography: {
    fontFamily: brand.fontFamily,
    headingWeight: brand.headingWeight,
    bodyWeight: brand.bodyWeight,
    buttonWeight: brand.buttonWeight,
  },
} as const;

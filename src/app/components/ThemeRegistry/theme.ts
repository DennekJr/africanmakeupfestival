import { Inter } from "next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    boldBody: CSSProperties;
    bodyTitle: CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    boldBody?: CSSProperties;
    bodyTitle?: CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    boldBody: true;
    bodyTitle: true;
  }
}

const inter = Inter({
  subsets: ["latin"],
});

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "hsl(240 5.9% 10%)",
    },
    // primaryForeground: {
    //   default: "hsl(0 0% 98%)",
    // },
    secondary: {
      main: "hsl(240 4.8% 95.9%)",
    },
    // secondaryForeground: {
    //   default: "hsl(240 5.9% 10%)",
    // },
    // muted: {
    //   default: "hsl(240 4.8% 95.9%)",
    // },
    // mutedForeground: {
    //   default: "hsl(240 3.8% 46.1%)",
    // },
    // accent: {
    //   default: "hsl(240 4.8% 95.9%)",
    // },
    // accentForeground: {
    //   default: "hsl(240 5.9% 10%)",
    // },
    // destructive: {
    //   default: "hsl(2 74% 48%)",
    // },
    // destructiveForeground: {
    //   default: "hsl(0 0% 99%)",
    // },
    // success: {
    //   main: "hsl(140 82% 33%)",
    // },
    // successForeground: {
    //   default: "hsl(0 0% 99%)",
    // },
    // border: {
    //   default: "hsl(240 5.9% 90%)",
    // },
    // input: {
    //   default: "hsl(218 16% 84%)",
    // },
    // ring: {
    //   default: "hsl(240 5.9% 10%)",
    // },
    // radius: {
    //   default: "1rem",
    // },
    // grey100: {
    //   default: "hsl(0 0% 99%)",
    // },
    // grey200: {
    //   default: "hsl(0 0% 96%)",
    // },
    // grey300: {
    //   default: "hsl(0 0% 95%)",
    // },
    // grey400: {
    //   default: "hsl(240 3% 93%)",
    // },
    // grey500: {
    //   default: "hsl(0 0% 90%)",
    // },
    // grey600: {
    //   default: "hsl(240 3% 87%)",
    // },
    // grey700: {
    //   default: "hsl(240 3% 79%)",
    // },
    // grey800: {
    //   default: "hsl(255 2% 68%)",
    // },
    // grey900: {
    //   default: "hsl(260 2% 50%)",
    // },
    // grey1000: {
    //   default: "hsl(255 5% 32%)",
    // },
    // grey1100: {
    //   default: "hsl(257 8% 18%)",
    // },
    // grey1200: {
    //   default: "hsl(255 7% 12%)",
    // },
    // grey1300: {
    //   default: "hsl(270 10% 4%)",
    // },
    // background: {
    //   default: "hsl(0 0% 100%)",
    // },
    // foreground: {
    //   default: "hsl(240 10% 3.9%)",
    // },
    // card: {
    //   default: "hsl(0 0% 95%)",
    // },
    // cardForeground: {
    //   default: "hsl(240 10% 3.9%)",
    // },
    // popover: {
    //   default: "hsl(0 0% 100%)",
    // },
    // popoverForeground: {
    //   default: "hsl(240 10% 3.9%)",
    // },
    // borderColor: {
    //   default: "hsl(240 3% 93% 0.2)",
    // },
    // overlay: {
    //   default: "hsl(0 0% 0% 0.4)",
    // },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: { fontSize: "2.125rem", fontWeight: 700 },
    h2: { fontSize: "1.875rem", fontWeight: 700 },
    h3: { fontSize: "1.5rem", fontWeight: 700 },
    h4: { fontSize: "1.25rem", fontWeight: 700 },
    h5: { fontSize: "1.125rem", fontWeight: 700 },
    h6: { fontSize: "1rem", fontWeight: 700 },
    boldBody: { fontSize: "1rem", fontWeight: 600 },
    bodyTitle: { fontSize: "1rem", fontWeight: 500, color: "#a4a5a7" },
  },
});

theme = responsiveFontSizes(theme);
export default theme;

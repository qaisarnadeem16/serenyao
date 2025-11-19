import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        md: '2.5rem',
      },
      screens: {
        DEFAULT: '100%',
        md: '768px',
        lg: '1024px',
        xl: '1140px',
      },
    },
    extend: {
      maxWidth: {
        'container': '1140px',
      },
      colors: {
        // System colors
        primary: "#202020",
        secondary: "#C6FE7A",
        text: "#6A6A6A",
        accent: "#F4FF6B",
        // Custom colors
        orange: "#FF7F48",
        purple: "#A980FF",
        "soft-purple": "#C6AAFF",
        gray: "#C6C0D4",
        border: "#F2F2F2",
        "main-bg": "#F2F2F2",
        white: "#FFFFFF",
        // shadcn/ui colors
        background: "#FFFFFF",
        foreground: "#202020",
        muted: {
          DEFAULT: "#F2F2F2",
          foreground: "#6A6A6A",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#202020",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#202020",
        },
      },
      fontFamily: {
        sans: ["Outfit", "Roboto", "sans-serif"],
        serif: ["Roboto Slab", "serif"],
        outfit: ["Outfit", "sans-serif"],
        "roboto-slab": ["Roboto Slab", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        // H1
        "h1": ["4rem", { lineHeight: "1.3", letterSpacing: "-0.04em", fontWeight: "600" }],
        "h1-tablet": ["3.5rem", { lineHeight: "1.3", letterSpacing: "-0.04em", fontWeight: "600" }],
        // H2
        "h2": ["3.625rem", { lineHeight: "1.3", letterSpacing: "-0.04em", fontWeight: "500" }],
        "h2-tablet": ["4rem", { lineHeight: "1.3", letterSpacing: "-0.04em", fontWeight: "500" }],
        // H3
        "h3": ["3rem", { lineHeight: "1.3", letterSpacing: "-0.04em", fontWeight: "500" }],
        "h3-tablet": ["2.25rem", { lineHeight: "1.3", letterSpacing: "-0.04em", fontWeight: "500" }],
        // H4
        "h4": ["2.25rem", { lineHeight: "1.3", letterSpacing: "-0.04em", fontWeight: "500" }],
        "h4-tablet": ["2rem", { lineHeight: "1.3", letterSpacing: "-0.04em", fontWeight: "500" }],
        // H5
        "h5": ["2rem", { lineHeight: "1.3", letterSpacing: "-0.04em", fontWeight: "500" }],
        "h5-tablet": ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.04em", fontWeight: "500" }],
        // H6
        "h6": ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.04em", fontWeight: "500" }],
        // Body
        "body1": ["1.125rem", { lineHeight: "1.6", letterSpacing: "-0.04em", fontWeight: "400" }],
        "body1-tablet": ["1rem", { lineHeight: "1.6", letterSpacing: "-0.04em", fontWeight: "400" }],
        "body2": ["1rem", { lineHeight: "1.6", letterSpacing: "-0.04em", fontWeight: "400" }],
        "body2-tablet": ["0.875rem", { lineHeight: "1.6", letterSpacing: "-0.04em", fontWeight: "400" }],
        "body3": ["0.875rem", { lineHeight: "1.6", letterSpacing: "-0.04em", fontWeight: "400" }],
        "body3-tablet": ["0.75rem", { lineHeight: "1.6", letterSpacing: "-0.04em", fontWeight: "400" }],
        // Subtitle
        "subtitle": ["0.875rem", { lineHeight: "1.2", fontWeight: "500" }],
        "subtitle-tablet": ["0.75rem", { lineHeight: "1.2", fontWeight: "500" }],
        // Button
        "button": ["1rem", { lineHeight: "1", letterSpacing: "-0.04em", fontWeight: "500" }],
        // Caption
        "caption": ["0.75rem", { lineHeight: "1.6", letterSpacing: "-0.04em", fontWeight: "400" }],
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;


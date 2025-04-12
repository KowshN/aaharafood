import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Indian-inspired color palette
        saffron: {
          50: "#fff8e6",
          100: "#ffefc4",
          200: "#ffe29d",
          300: "#ffd575",
          400: "#ffc94e",
          500: "#ffbc26",
          600: "#e6a922",
          700: "#b3841a",
          800: "#805e13",
          900: "#4d380b",
        },
        spice: {
          50: "#fdf2f2",
          100: "#fce4e4",
          200: "#f9c9c9",
          300: "#f5adad",
          400: "#f28585",
          500: "#ee5d5d",
          600: "#d65454",
          700: "#a74141",
          800: "#782f2f",
          900: "#491c1c",
        },
        turmeric: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        neem: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        peacock: {
          50: "#edfcfd",
          100: "#d2f5f9",
          200: "#a8eaf2",
          300: "#70d7e5",
          400: "#2cbbd1",
          500: "#1a9db1",
          600: "#167d94",
          700: "#166678",
          800: "#175363",
          900: "#184654",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "cooking-stir": {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        "cooking-boil": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "cooking-chop": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(5px)" },
        },
        "spice-sprinkle": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
        "flame-flicker": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(0.95)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "cooking-stir": "cooking-stir 2s ease-in-out infinite",
        "cooking-boil": "cooking-boil 1.5s ease-in-out infinite",
        "cooking-chop": "cooking-chop 0.5s ease-in-out infinite",
        "spice-sprinkle": "spice-sprinkle 2s ease-in-out infinite",
        "flame-flicker": "flame-flicker 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

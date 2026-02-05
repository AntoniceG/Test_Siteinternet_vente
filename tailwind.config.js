module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "text-2xl-font-semibold": "var(--text-2xl-font-semibold-font-family)",
        "text-5xl-font-semibold": "var(--text-5xl-font-semibold-font-family)",
        "text-6xl-font-semibold": "var(--text-6xl-font-semibold-font-family)",
        "text-7xl-font-semibold": "var(--text-7xl-font-semibold-font-family)",
        "text-8xl-font-semibold": "var(--text-8xl-font-semibold-font-family)",
        "text-base-font-medium": "var(--text-base-font-medium-font-family)",
        "text-base-font-normal": "var(--text-base-font-normal-font-family)",
        "text-base-font-semibold": "var(--text-base-font-semibold-font-family)",
        "text-lg-font-bold": "var(--text-lg-font-bold-font-family)",
        "text-lg-font-semibold": "var(--text-lg-font-semibold-font-family)",
        "text-sm-font-medium": "var(--text-sm-font-medium-font-family)",
        "text-sm-font-normal": "var(--text-sm-font-normal-font-family)",
        "text-sm-font-semibold": "var(--text-sm-font-semibold-font-family)",
        "text-xl-font-medium": "var(--text-xl-font-medium-font-family)",
        "text-xl-font-semibold": "var(--text-xl-font-semibold-font-family)",
        "text-xs-font-medium": "var(--text-xs-font-medium-font-family)",
        "text-xs-font-normal": "var(--text-xs-font-normal-font-family)",
        "text-xs-font-semibold": "var(--text-xs-font-semibold-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "backdrop-blur-backdrop-blur-xl":
          "var(--backdrop-blur-backdrop-blur-xl)",
        "blur-blur-2xl": "var(--blur-blur-2xl)",
        "box-shadow-shadow": "var(--box-shadow-shadow)",
        "box-shadow-shadow-2xl": "var(--box-shadow-shadow-2xl)",
        "box-shadow-shadow-sm": "var(--box-shadow-shadow-sm)",
        "box-shadow-shadow-xl": "var(--box-shadow-shadow-xl)",
        "glow-brand-lg": "var(--glow-brand-lg)",
        "glow-brand-sm": "var(--glow-brand-sm)",
        "glow-emerald-lg": "var(--glow-emerald-lg)",
        "glow-emerald-sm": "var(--glow-emerald-sm)",
      },
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};

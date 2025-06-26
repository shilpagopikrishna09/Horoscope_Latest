import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        // Cosmic theme colors
        cosmic: {
          50: "hsl(var(--cosmic-50))",
          100: "hsl(var(--cosmic-100))",
          200: "hsl(var(--cosmic-200))",
          300: "hsl(var(--cosmic-300))",
          400: "hsl(var(--cosmic-400))",
          500: "hsl(var(--cosmic-500))",
          600: "hsl(var(--cosmic-600))",
          700: "hsl(var(--cosmic-700))",
          800: "hsl(var(--cosmic-800))",
          900: "hsl(var(--cosmic-900))",
          950: "hsl(var(--cosmic-950))",
        },
        mystic: {
          50: "hsl(var(--mystic-50))",
          100: "hsl(var(--mystic-100))",
          200: "hsl(var(--mystic-200))",
          300: "hsl(var(--mystic-300))",
          400: "hsl(var(--mystic-400))",
          500: "hsl(var(--mystic-500))",
          600: "hsl(var(--mystic-600))",
          700: "hsl(var(--mystic-700))",
          800: "hsl(var(--mystic-800))",
          900: "hsl(var(--mystic-900))",
          950: "hsl(var(--mystic-950))",
        },
        gold: {
          50: "hsl(var(--gold-50))",
          100: "hsl(var(--gold-100))",
          200: "hsl(var(--gold-200))",
          300: "hsl(var(--gold-300))",
          400: "hsl(var(--gold-400))",
          500: "hsl(var(--gold-500))",
          600: "hsl(var(--gold-600))",
          700: "hsl(var(--gold-700))",
          800: "hsl(var(--gold-800))",
          900: "hsl(var(--gold-900))",
          950: "hsl(var(--gold-950))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "cosmic-glow": {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.05)",
          },
        },
        "stars-twinkle": {
          "0%, 100%": {
            opacity: "0.3",
          },
          "50%": {
            opacity: "1",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "cosmic-glow": "cosmic-glow 3s ease-in-out infinite",
        "stars-twinkle": "stars-twinkle 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
      },
      backgroundImage: {
        "cosmic-gradient":
          "linear-gradient(135deg, hsl(var(--cosmic-900)) 0%, hsl(var(--mystic-900)) 50%, hsl(var(--cosmic-800)) 100%)",
        "mystic-gradient":
          "linear-gradient(135deg, hsl(var(--mystic-50)) 0%, hsl(var(--cosmic-50)) 50%, hsl(var(--gold-50)) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

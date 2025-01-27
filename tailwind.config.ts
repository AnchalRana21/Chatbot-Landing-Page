import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      screens: {
        mobile: {
          max: "1024px",
          min: "0px",
        },
        desktop: {
          max: "2048px",
          min: "1025px",
        },
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Helvetica", "Lato", "Arial", "Segoe UI", "Verdana", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
        "Basier Circle": ["-apple-system", "BlinkMacSystemFont", "Helvetica", "Lato", "Arial", "Segoe UI", "Verdana", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
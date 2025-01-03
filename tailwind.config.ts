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
        foreground: "var(--foreground)",
        // Custom colors for borders
        border: "var(--border)", // You can now use 'border-border' in your classes
      },
      borderColor: {
        'border': 'var(--border)', // Define border color
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
     center: true,
    screens:{
      xl:"1140px",
    }
    },
    extend: {
      colors: {
        "light-purple":"#952FFE",
        "light-pink":"#C641C6",
         "light-orange":"#FF676B",
         "dark-blue":"#0A0A2B"
      },
      backgroundImage: {
        "hero": "url('/assets/images/hero-bg.webp')",
        "hero-sm": "url('/assets/images/hero-sm-bg.webp')",
      }
    },
  },
  plugins: [],
} satisfies Config;

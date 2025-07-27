import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        clicker: ["var(--font-clicker)", "cursive"],
        playfair: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;

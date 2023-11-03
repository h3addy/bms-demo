import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "bg-primary": "#1a1a1a",
      "brand-yellow": "#ffb441",
      "brand-grey": "#262626",
      "brand-blue": "#4436ca",
    },
    extend: {},
  },
  plugins: [],
};
export default config;

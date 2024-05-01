import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#18dc0c",
        secondary: "#11291b",
      },
      keyframes: {
        wave: {
          "0%": { boxShadow: "0 -10vh 20vh #0c0", top: "-100vh" },
          "48%,52%": { boxShadow: "0 -10vh 20vh #090" },
          "50%": { boxShadow: "0 -10vh 20vh #060" },
          "100%": { boxShadow: "0 -10vh 20vh #0c0", top: "200vh" },
        },
        "color-pulse": {
          "0%,100%": { color: "#0c0" },
          "48%,52%": { color: "#090" },
          "50%": { color: "#060" },
        },
      },
      animation: {
        wave: "wave 10s infinite ease-in-out",
        "color-pulse": "color-pulse 5s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;

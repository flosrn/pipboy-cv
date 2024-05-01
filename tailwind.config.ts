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
          "0%": { opacity: "1" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        distortion: {
          "0%,100%": { transform: "scale(1) rotate(0deg)" },
          "25%": { transform: "scale(1.001) rotate(0.7deg)" },
          "50%": { transform: "scale(1.003) rotate(-0.7deg)" },
          "75%": { transform: "scale(1.001) rotate(0.7deg)" },
        },
      },
      animation: {
        wave: "wave 10s infinite ease-in-out",
        "color-pulse": "color-pulse 1s ease-in-out",
        distortion: "distortion 0.08s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;

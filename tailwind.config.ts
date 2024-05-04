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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)",
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
        boot: {
          "0%,100%": { top: "145px" },
          "10%": { top: "335px" },
          "20%": { top: "80px" },
          "30%": { top: "335px" },
          "40%": { top: "80px" },
          "50%": { top: "335px" },
          "60%": { top: "80px" },
          "70%": { top: "335px" },
          "80%": { top: "80px" },
          "90%": { top: "335px" },
        },
      },
      animation: {
        wave: "wave 10s infinite ease-in-out",
        "color-pulse": "color-pulse 1s ease-in-out",
        distortion: "distortion 0.08s ease-in-out",
        boot: "boot 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;

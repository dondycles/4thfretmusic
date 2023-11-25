import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      agbalumo: ["var(--font-agbalumo)"],
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#78350f",
            secondary: "#9ca3af",
            background: "#ffffff",
            foreground: "#0d0d0d",
            content1: "#ffffff",
            content2: "#1d1d1d",
            content3: "#1d1d1d",
          },
        },
        dark: {
          colors: {
            primary: "#78350f",
            secondary: "#9ca3af",
            background: "#0d0d0d",
            foreground: "#ffffff",
            content1: "#1d1d1d",
            content2: "#ffffff",
            content3: "#dddddd",
          },
        },
      },
    }),
    require("tailwind-scrollbar"),
  ],
};
export default config;

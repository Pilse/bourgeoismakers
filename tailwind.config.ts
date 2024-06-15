import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#089E83",
      },
      fontSize: {
        "display/xl": ["64px", { lineHeight: "72px", fontWeight: "700" }],
        "display/l": ["56px", { lineHeight: "1", fontWeight: "700" }],
        "display/m": ["48px", { lineHeight: "1", fontWeight: "700" }],
        "display/s": ["36px", { lineHeight: "40px", fontWeight: "700" }],
        "heading/xl": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "heading/l": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "heading/m": ["18px", { lineHeight: "1", fontWeight: "600" }],
        "heading/s": ["16px", { lineHeight: "24px", fontWeight: "600" }],
        "heading/xs": ["14px", { lineHeight: "1", fontWeight: "600" }],
        "body/l/400": ["18px", { lineHeight: "26px", fontWeight: "400" }],
        "body/l/500": ["18px", { lineHeight: "26px", fontWeight: "500" }],
        "body/m/400": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body/m/500": ["16px", { lineHeight: "24px", fontWeight: "500" }],
        "body/s/400": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "body/s/500": ["14px", { lineHeight: "20px", fontWeight: "500" }],
        "body/xs/400": ["12px", { lineHeight: "16px", fontWeight: "400" }],
        "body/xs/500": ["12px", { lineHeight: "16px", fontWeight: "500" }],
        "body/xs/600": ["12px", { lineHeight: "16px", fontWeight: "600" }],
      },
    },
  },
  plugins: [],
};
export default config;

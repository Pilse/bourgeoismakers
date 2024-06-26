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
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        green: {
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D",
        },
      },
      fontSize: {
        "display/xl": ["64px", { lineHeight: "72px", fontWeight: "700" }],
        "display/l": ["56px", { lineHeight: "1", fontWeight: "700" }],
        "display/m": ["48px", { lineHeight: "1", fontWeight: "700" }],
        "display/s": ["36px", { lineHeight: "40px", fontWeight: "700" }],
        "heading/xl": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "heading/l": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "heading/m": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "heading/s": ["16px", { lineHeight: "24px", fontWeight: "600" }],
        "heading/xs": ["14px", { lineHeight: "20px", fontWeight: "600" }],
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

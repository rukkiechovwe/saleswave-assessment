/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        "black-30": "rgba(0, 0, 0, 0.3)",
        "black-100": "rgba(47, 46, 48, 0.3)",
        "black-300": "#0000004D",
        "black-900": "#0D111B",

        "neutral-50": "#FAFAFA",
        "neutral-60": "#FCFCFC",
        "neutral-70": "#FAFCFE",
        "neutral-80": "#F0F0F0",
        "neutral-100": "#F5F5F5",
        "slate-200": "#E4EAF1",
        "slate-700": "#384357",
        "zinc-500 ": "#858585",
        "grey-700": "#B3BCCD",
        "grey-500": "#667085",
        "red-500": "#DB4444",
        "green-500": "#00FF66",
        "amber-400": "#FFAD33",
        red: "#ff0808",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        xl: "0px 1px 2px 0px #EDF5F8",
      },
    },
  },
  plugins: [],
};

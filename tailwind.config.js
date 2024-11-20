/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans KR"', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      black: {
        1: "#ffffff",
        2: "#fcfcfc",
        3: "#f5f5f5",
        4: "#f0f0f0",
        5: "#d9d9d9",
        6: "#bfbfbf",
        7: "#8c8c8c",
        8: "#595959",
        9: "#454545",
        10: "#262626",
        11: "#1f1f1f",
        12: "#141414",
        13: "#000000",
      },
      blue: {
        main: "#D0E8F2",
        highlight: "#2175FD",
      },
      yellow: {
        main: "#FFEC9E",
        sub: "#FFFCEE",
      },
      red: {
        system: "#FF4D4F",
      },
    },
  },
  plugins: [],
};

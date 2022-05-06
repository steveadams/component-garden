const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Mono", ...fontFamily.sans],
        serif: ["Noto Serif Display", ...fontFamily.serif],
      },
      colors: {
        green: {
          DEFAULT: "#2B9E4A",
          50: "#E5F8E7",
          100: "#CDF1D2",
          200: "#9DE4A9",
          300: "#6DD782",
          400: "#3CCA5E",
          500: "#2B9E4A",
          600: "#268A44",
          700: "#20763C",
          800: "#1B6234",
          900: "#154E2B",
        },
        blue: {
          DEFAULT: "#639FEE",
          50: "#DFEBFB",
          100: "#D1E3FA",
          200: "#B6D2F7",
          300: "#9AC1F4",
          400: "#7EB0F1",
          500: "#639FEE",
          600: "#3E88EA",
          700: "#1972E6",
          800: "#1560C1",
          900: "#114D9C",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

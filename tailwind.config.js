/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E6F2E6", // Lightest shade
          100: "#C2E0C2", // Lighter shade
          200: "#99CC99", // Light shade
          300: "#66B366", // Medium light shade
          400: "#4CAF50", // Standard shade (base)
          500: "#3B8A3B", // Slightly darker
          600: "#2D6E2D", // Darker shade
          700: "#1F541F", // Dark shade
          800: "#1B4D1B", // Darker shade
          900: "#173B17", // Darkest shade
          950: "#0B240B", // Deepest shade
        },
      },
      fontFamily: {
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
};

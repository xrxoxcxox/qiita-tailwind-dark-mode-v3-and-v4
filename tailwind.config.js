/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    colors: {
      background: "rgb(var(--color-background))",
      surface: "rgb(var(--color-surface))",
      text: "rgb(var(--color-text))",
      primary: "rgb(var(--color-primary))",
    },
  },
  plugins: [],
};

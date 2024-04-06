/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prm: "var(--prm-clr)",
        bg: "var(--bg-clr)",
        "prm-muted": "var(--prm-muted)",
      },
    },
  },
  plugins: [],
};

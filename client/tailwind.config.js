/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // ← if you're using plain HTML
    "./src/**/*.{js,ts,jsx,tsx}", // ← for React, Vue, etc.
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};

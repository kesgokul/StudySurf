/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "splash-screen": "url(/splash-bg.png)",
      },
      colors: {
        "google-blue": "#4285f4",
        "google-blue-active": "#1669F2",
      },
    },
  },
  plugins: [],
};

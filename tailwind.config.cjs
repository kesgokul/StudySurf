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
        "input-orange": "#FF9207",
        "input-brown": "#814B0D",
        "button-green": "#80ED99",
        "button-yellow": "#EDE280",
        "button-text-green": "#075300",
      },
      fontFamily: {
        righteous: ["Righteous"],
      },
    },
  },
  plugins: [],
};

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
      backgroundImage: {
        "card-gradient":
          "linear-gradient(180deg, rgba(254, 223, 184, 0.36) 0%, rgba(255, 146, 7, 0) 100%)",
        "card-gradient-1":
          "linear-gradient(180deg, rgba(254, 194, 184, 0.56) 0%, rgba(255, 169, 91, 0.09) 52.6%, rgba(180, 136, 79, 0.2) 100%)",
      },
      fontFamily: {
        righteous: ["Righteous"],
      },
      fontSize: {
        "2xs": "0.5rem",
      },
      blur: {
        "2xs": "0.5px",
      },
    },
  },
  plugins: [],
};

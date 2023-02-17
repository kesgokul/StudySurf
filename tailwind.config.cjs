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

        "gold-gradient":
          "radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)",
        "green-gradient":
          "linear-gradient(180deg, rgba(52, 245, 71, 0.56) 0%, rgba(202, 253, 94, 0.26) 52.6%, rgba(250, 255, 7, 0) 100%)",
      },
      fontFamily: {
        righteous: ["Righteous"],
      },
      fontSize: {
        "2xs": "0.5rem",
      },
      blur: {
        xs: "1px",
        "2xs": "0.5px",

      },
      backgroundSize: {
        lg: "200%",
      },
    },
  },
  plugins: [],
};

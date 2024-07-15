/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#1C1C1C",
        white: "#FFFFFF",
        primary: "#005da6",
        lightGrey: "#E8E8E8",
        darkGrey: "#494949",
        dullWhite: "#A6ADBA",
        cardColor: "#2A323C",
        darkColor: "#181E24",
        lightColor: "#1D232A",
        cyanColor: "#38BDF8",
        yellowColor: "#EAB308",
        redColor: "#EF413A",
        greenColor: "#28A745",
        hoverColor: "#334155",
        blueColor: "#0B3860",
        hoverColorBlue: "#092A46",
        lightWhite: "#d9d9d9",
      },
      screens: {
          mobile: { max: "768px" },
          smaller: { max: "430px" }, //smaller than 474
          xxs: { max: "360px" }, //smaller than 474
          greaterThanMobile : {
            min : "767px"
          }
      },
    },
  },
  plugins: [],
};

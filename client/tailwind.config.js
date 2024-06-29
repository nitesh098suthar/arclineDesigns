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
      },
      screens: {
          mobile: { max: "768px" },
          xxs: { max: "430px" }, //smaller than 474
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        typing: "typing 4s steps(16) infinite",
      },
      keyframes:{
        typing:{
          "40%,60%":{left:"calc(100% + 4px)"},
          "100%" : {left : "0%"}
        },
      },
    },
    fontFamily: {
      Kanit : ["Kanit", "sans-serif"],
      Akshar: ["Akshar", "sans-serif"],
      Andada: ["Andada Pro", "sans-serif"],
      Asap: ["Asap", "sans-serif"],
    },
  },
  plugins: [],
};

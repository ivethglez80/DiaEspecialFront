/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily:{
            angelina : ["Angelina", "Sans-serif"],
            nowBold : ["NowBold","Sans-serif"],
            nowRegular : ["NowRegular","Sans-serif"],
            rasputin : ["Rasputin", "Sans-serif"]
        },
        colors:{
            marron: "#9D5A4D",
            celestito: "#BFCBD8",
            cafecito: "#E6DAD1", 
            cafe1: "#F1D9CA",          
            cafe2:"#DBC8BC"
        }
      },
    },
    plugins: [],
  }
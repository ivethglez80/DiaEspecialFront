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
            marron: "#674470",
            celestito: "#F4E1FF",
            cafecito: "#E6DAD1", 
            cafe1: "#E8EBF6",          
            cafe2:"#FFEEF2"
        }
      },
    },
    plugins: [],
  }
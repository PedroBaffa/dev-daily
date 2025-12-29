/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0066FF", // Azul vibrante do logo Dev Daily
          dark: "#020617", // Fundo super escuro (Slate 950)
          grey: "#94A3B8", // Cinza do texto (Slate 400)
        },
      },
      fontFamily: {
        squeeze: ['"Oswald"', "sans-serif"], // Fonte para Títulos
        deco: ['"Outfit"', "sans-serif"], // Fonte para Textos
      },
    },
  },
  plugins: [],
};

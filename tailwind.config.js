/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0066FF",
          dark: "#020617",
          grey: "#94A3B8",
        },
      },
      fontFamily: {
        squeeze: ['"Oswald"', "sans-serif"],
        deco: ['"Outfit"', "sans-serif"],
      },
      animation: {
        fall: "fall linear infinite",
      },
      keyframes: {
        fall: {
          "0%": {
            transform: "translateY(-20vh) translateX(-10px) rotate(0deg)",
            opacity: "0",
          },
          "10%": { opacity: "0.4" },
          "100%": {
            transform: "translateY(120vh) translateX(10px) rotate(360deg)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};

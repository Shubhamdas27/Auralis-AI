/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        "aurum-red": "#D4A574", // Warm beige/gold
        "aurum-beige": "#F5E6D3", // Light cream beige
        "aurum-tan": "#C4915C", // Darker tan/beige
        "aurum-dark": "#0a0a0a",
        "aurum-gray": "#1a1a1a",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": {
            boxShadow: "0 0 5px #F03636, 0 0 10px #F03636, 0 0 15px #F03636",
          },
          "100%": {
            boxShadow: "0 0 10px #F03636, 0 0 20px #F03636, 0 0 30px #F03636",
          },
        },
      },
    },
  },
  plugins: [],
};

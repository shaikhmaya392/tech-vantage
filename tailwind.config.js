/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1320px" },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#FFAA17",
          50: "#fff8ec",
          100: "#ffedcc",
          200: "#ffdb99",
          300: "#ffc861",
          400: "#ffb534",
          500: "#FFAA17",
          600: "#e0900a",
          700: "#b86f08",
          800: "#92560c",
          900: "#78470f",
        },
        ink: {
          DEFAULT: "#131313",
          900: "#131313",
          800: "#1b1515",
          700: "#222222",
          600: "#2c2929",
        },
        cloud: "#f6f5f9",
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "var(--font-outfit)", "sans-serif"],
        sans: ["var(--font-dmsans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -30px rgba(19,13,26,0.25)",
        card: "0 24px 60px -24px rgba(19,13,26,0.2)",
        glow: "0 18px 50px -18px rgba(255,170,23,0.6)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(300deg,#FFAA17 0%,#222429 60%)",
        "brand-solid": "linear-gradient(120deg,#FFAA17 0%,#ffc861 100%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        spinslow: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        float: "float 6s ease-in-out infinite",
        spinslow: "spinslow 26s linear infinite",
      },
    },
  },
  plugins: [],
};

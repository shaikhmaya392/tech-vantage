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
          DEFAULT: "#0f66b8",
          50: "#eef5fc",
          100: "#d6e7f7",
          200: "#aecfef",
          300: "#7db2e4",
          400: "#4a92d6",
          500: "#0f66b8",
          600: "#0d59a1",
          700: "#0b4884",
          800: "#083a68",
          900: "#0a2540",
        },
        ink: {
          DEFAULT: "#14121a",
          900: "#14121a",
          800: "#1d1b26",
          700: "#2b2833",
        },
        cloud: "#f4f7fb",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -30px rgba(15,38,64,0.25)",
        card: "0 24px 60px -24px rgba(15,38,64,0.18)",
        glow: "0 18px 50px -18px rgba(15,102,184,0.55)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg,#0f66b8 0%,#4a92d6 100%)",
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

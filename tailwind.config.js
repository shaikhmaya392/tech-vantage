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
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0f66b8",
          50: "#eaf3fb",
          100: "#cfe3f5",
          200: "#a3caee",
          300: "#6faee4",
          400: "#3f8fd6",
          500: "#0f66b8",
          600: "#0d599f",
          700: "#0b4a85",
          800: "#083a68",
          900: "#062a4c",
        },
        ink: {
          DEFAULT: "#000000",
          soft: "#0a0a0a",
          muted: "#1a1a1a",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #0f66b8 0%, #3f8fd6 100%)",
        "hero-grid":
          "radial-gradient(circle at 20% 20%, rgba(15,102,184,0.18), transparent 45%), radial-gradient(circle at 80% 0%, rgba(63,143,214,0.14), transparent 40%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(15,102,184,0.55)",
        card: "0 10px 40px -15px rgba(0,0,0,0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

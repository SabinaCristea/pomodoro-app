/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Kumbh Sans"'],
      slab: ['"Roboto Slab"'],
      mono: ['"Space Mono"'],
    },
    extend: {
      colors: {
        red: "#f87070",
        cian: "#70f3f8",
        pink: "#d881f8",
        lightGray: "#d7e0ff",
        darkBlue: "#1e213f",
        white: "#ffffff",
        egg: "#eff1fa",
        dark: "#161932",
      },
    },
  },
  plugins: [],
};

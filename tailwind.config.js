/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        samsung: ["SamsungOne", "sans-serif"],
        "samsung-heading": ["SamsungSharpSansBd", "sans-serif"],
      },
      colors: {
        "samsung-light": "#f5f5f5",
        "samsung-blue": "#2189ff",
      },
    },
  },
  plugins: [],
};

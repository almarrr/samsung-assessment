/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        samsung: ["SamsungOne", "sans-serif"],
        "samsung-heading": ["SamsungSharpSansBd", "sans-serif"],
      },
    },
  },
  plugins: [],
};

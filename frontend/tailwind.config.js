/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue-dark": "darkgreen", // "#0369A1",
        "custom-blue": "green" // "#0284C7",
      },
      gridTemplateColumns: {
        search_bar: "49px 1fr 49px",
        nav_bar: "60px 1fr",
      },
    },
  },
  plugins: [],
  safelist: [
    "border-highlight-color",
    "border-transparent",
    "border-gray-400/85",
    "text-highlight-color",
    "text-gray-500/65",
    "text-gray-600/85",
    "text-transparent",
    "self-end",
    "self-start",
    "bg-custom-blue/5",
    "bg-white",
    "block",
    "hidden",
  ],
};

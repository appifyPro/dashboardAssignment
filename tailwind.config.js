/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "img-custom": "url('/gradientcirlce.svg')",
        "custom-color": "linear-gradient(180deg, #E1E5FF 100%, #F6DDFF 0%)",
      },
    },
  },
  plugins: [],
};

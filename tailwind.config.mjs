/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        activeColor: "#0070f3",
        inActiveColor: "#6b7280",
        newsGroupTextBg: "rgba(241, 241, 241, 0.36)",
      },
      fontFamily: {
        mulish: ["Mulish", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

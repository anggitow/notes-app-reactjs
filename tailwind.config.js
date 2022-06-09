module.exports = {
  daisyui: {
    themes: ["bumblebee"],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};

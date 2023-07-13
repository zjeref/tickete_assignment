/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        greyscaleG2: "#474747",
        brandGhostWhite: "#FFFFFF",
        greyscaleG1: "#1F1F1F",
        greyscaleG3: "#595959",
        greyscaleG6: "#D6D6D6",
        greyscaleG7: "#EBEBEB",
        greyscaleG8: "#F5F5F5",
        greyscaleG9: "#F6F6F7",
        primaryRust: "#C22F00",
        pumpkin: "#FFF7ED",
        pumpkin10: "#7F2D0F",
        bluecaroyola: "#1733B6",
        redNCS: "#D20037",
        sacramento: "#006642",
        blackk: "#0A0A0A",
      },
      maxWidth: {
        "2xl": "384px",
        "3xl": "816px",
        "5xl": "1200px",
      },
    },
    fontFamily: {
      OpenSans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};

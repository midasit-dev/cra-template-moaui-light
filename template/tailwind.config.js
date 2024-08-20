/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#CCE4F0",
          1: "#99C9E2",
          2: "#66ADD3",
          3: "#3392C5",
          4: "#0077B6",
        },
        l: {
          // light
          text: {
            DEFAULT: "#212529",
            1: "#CED4DA",
            2: "#868E96",
            3: "#495057",
          },
          bg: {
            DEFAULT: "#F8F9FA",
            1: "#E9ECEF",
            2: "#DEE2E6",
            3: "#CED4DA",
          },
          pastel: {
            DEFAULT: "#E0F2F1", // Light Teal
            blue: "#E3F2FD", // Light Blue
            green: "#E8F5E9", // Light Green
            yellow: "#FFFDE7", // Light Yellow
            pink: "#FCE4EC", // Light Pink
          },
        },
        d: {
          // dark
          text: {
            DEFAULT: "#ECECEC",
            1: "#D9D9D9",
            2: "#ACACAC",
            3: "#595959",
          },
          bg: {
            DEFAULT: "#212529",
            1: "#343A40",
            2: "#495057",
            3: "#6C757D",
          },
          pastel: {
            DEFAULT: "#263238", // Charcoal
            blue: "#01579B", // Dark Blue
            green: "#004D40", // Dark Teal
            yellow: "#F9A825", // Golden Yellow
            pink: "#C2185B", // Dark Pink
          },
        },
      },
    },
  },
  plugins: [],
};

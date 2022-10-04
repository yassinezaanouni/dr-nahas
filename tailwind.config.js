module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        macbook: "1281px",
        xsm: "370px",
        xxs: "280px",
      },
      colors: {
        primary: "#239ECB",
        light: "#00000099",
        "grey-100": "#F5F6F8",
        "grey-200": "#626263",
      },
    },
  },
  plugins: [],
};

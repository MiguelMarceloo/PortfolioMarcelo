// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0b",
        card: "#121214",
        accent: {
          primary: "#6366f1", // Indigo
          secondary: "#a855f7", // Purple
          tertiary: "#ec4899", // Pink
        },
        muted: "#71717a",
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

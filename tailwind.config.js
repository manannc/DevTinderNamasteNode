module.exports = {
  content: [
    "./index.html", // Ensure this path matches your index.html
    "./src/**/*.{js,jsx,ts,tsx}", // Add all relevant file extensions for React components
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

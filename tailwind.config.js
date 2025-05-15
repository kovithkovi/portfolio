// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Ensure it looks for Tailwind classes in these file types
    "./index.html", // If you're using a static HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

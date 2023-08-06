/** @type {import('tailwindcss').Config} */
const sharedConfig = require("config/tailwind.config.js");

module.exports = {
  ...sharedConfig,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

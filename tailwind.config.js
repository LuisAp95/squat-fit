/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"


    
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      colors: {
        primary: "#201815",
        secondary: "#2B9DD9",
        success: "#B5C84D",
        bg: "#dcdee0",
      },

    },
  },
  plugins: [],
}

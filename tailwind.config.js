/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"


    
  ],
  presets: [require("nativewind/preset")],
  
  theme: {
    extend: {
      colors: {
        oceean: '#5CA4B8',
        river: '#8DC1D0',
        brigth: '#F4F9FA',
        black: '#000000',
        gray: '#EFEFEF',
        orange: '#FF690B',
        'gra-smoke': '#C7C7C7',
        'blue-light': '#0045FC',
        'light-red': '#F9E0E7',
        yellow: '#FFB953',
        white: '#FFFFFF',
        'lisbon-brown': '#101822',
        'hint-text': '#63718E',
        input: '#EBF2FA',
        'dim-gray': '#999999',
        silver: '#BFBFBF',
        'silver-gray': '#7F7F7F',
        'silver-gray-2': '#9F9F9F',
        'purple-squat-1': '#710a97',
        'purple-squat-2': '#a000c5',
        'red-squat': '#fe5802',
        'blue-squat-1': '#1a1aec',
        'blue-squat-2': '#0045fc',
      },
    },
  },

  plugins: [],
}

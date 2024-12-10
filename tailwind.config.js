/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    fontFamily: {
      poppins: "'Poppins', sans-serif",
      yujiMai: "'Yuji Mai', serif",
      playwrite: "'Playwrite HU', cursive",
    },
    extend: {
      colors: {
        'faded-pearl': '#E6DFAF',
        'midnight-gray': '	##3c3c3c',
        'deep-ocean': '#004080',
        'green-lantern': '#046645',
        'pure-white': '#FFFFFF',
        'charcoal-gray': '#000000',
      },
    },
  },
  plugins: [],
};


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
        'zen-serenity': '#E0DBD6',
        'blossom-haze': '#FED6FC',
        'amber-glow': '#FE9230',
        'green-heaven': '#347928',
        'autumn-ember': '#7D0215',
        'crimson-gate': '#EC2213',
        'zen-charcoal': '#1C1C1C',
      },
    },
  },
  plugins: [require('daisyui')],
};

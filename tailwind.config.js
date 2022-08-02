module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  darkMode: 'class', // or 'media' or 'class'
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'],
  },
  theme: {
    container: {
      center: true,
    },
  },
};

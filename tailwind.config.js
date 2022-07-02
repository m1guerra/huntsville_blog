module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '2/3': '66.666667%',
        '120': '30rem',
        '96': '26rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

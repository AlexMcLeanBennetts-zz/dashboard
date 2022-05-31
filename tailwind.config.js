module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: 'class', //false, 'class', 'media'
  theme: {
    extend: {
      dropShadow: {
        'lg': '0 0.25rem 0.5rem rgb(66 56 59 / 20%)'
      }
    },
  },
  plugins: [],
}
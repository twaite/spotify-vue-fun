// const purgecss = require('@fullhuman/postcss-purgecss');
const tailwindcss = require('tailwindcss');
// const isDev = process.argv.indexOf('serve') !== -1;
// TODO: tw - figure out why purgecss is missing stuff on build

module.exports = {
  plugins: [
    tailwindcss('tailwind.js'),
    // isDev
    //   ? ''
    //   : purgecss({
    //       content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.scss']
    //     }),
    require('autoprefixer')
  ]
};

import whitelistPatterns from './src/whitelisted-classes';

const purgecss = require('@fullhuman/postcss-purgecss');
const tailwindcss = require('tailwindcss');
const isDev = process.argv.indexOf('serve') !== -1;

module.exports = {
  plugins: [
    tailwindcss('tailwind.js'),
    isDev
      ? ''
      : purgecss({
        content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.scss'],
        whitelistPatterns
      }),
    require('autoprefixer')
  ]
};

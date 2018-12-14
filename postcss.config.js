// const { whitelistPatterns, whitelistedPatternsChilden } = require('./src/whitelisted-classes');
// const purgecss = require('@fullhuman/postcss-purgecss');
const tailwindcss = require('tailwindcss');
// const isDev = process.argv.indexOf('serve') !== -1;

// TODO: tw - fix purgecss

module.exports = {
  plugins: [
    tailwindcss('tailwind.js'),
    // isDev
    //   ? ''
    //   : purgecss({
    //     content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.scss'],
    //     whitelistPatterns,
    //     whitelistedPatternsChilden
    //   }),
    require('autoprefixer')
  ]
};

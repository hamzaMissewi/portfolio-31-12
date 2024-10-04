/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // overrideBrowserslist: ["> 1%", "last 2 versions", "Firefox ESR"],
    // cascade: false,
  },
  // plugins: [
  //     'tailwindcss',
  //     // 'autoprefixer',
  //     require('autoprefixer')({ }),
  //     // 'postcss-plugin'
  // ],
};

// plugins: ['postcss-plugin', 'postcss-plugin-a'],



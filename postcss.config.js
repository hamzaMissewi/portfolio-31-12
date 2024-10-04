/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: ["> 1%", "last 2 versions", "Firefox ESR"],
      cascade: false,
    },
  },
  // plugins: [
  //     'tailwindcss',
  //     // 'autoprefixer',
  //     require('autoprefixer')({
  //         // Configure Autoprefixer options here
  //         overrideBrowserslist: ['> 1%', 'last 2 versions', 'Firefox ESR'],
  //         cascade: false, // Optional: Prevent cascading
  //     }),
  //     // 'postcss-plugin'
  // ],
};

// plugins: ['postcss-plugin', 'postcss-plugin-a'],



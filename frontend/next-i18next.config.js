// const path = require("path");

// const localePath = path.resolve("./public/locales");

module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'bn',
    locales: ['bn', 'en'],
    localeDetection: false,
  },
  ns: ['common', 'home', 'skills'],
};

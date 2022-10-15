const path = require('path')

module.exports = {
    i18n: {
      defaultLocale: 'vi',
      locales: ['vi', 'en'],
      localeDetection: false,
      localePath: path.resolve('./public/locales')
    },
  };
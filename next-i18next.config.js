const path = require('path')

module.exports = {
    i18n: {
      defaultLocale: 'vi',
      locales: ['vi', 'en'],
      reloadOnPrerender: true,
      localeDetection: true,
      localePath: path.resolve('./public/locales')
    },
  };
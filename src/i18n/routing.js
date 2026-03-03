const {defineRouting} = require('next-intl/routing');

const routing = defineRouting({
  // Locales soportados
  locales: ['en', 'es'],

  // Locale por defecto
  defaultLocale: 'es'
});

module.exports = {routing};
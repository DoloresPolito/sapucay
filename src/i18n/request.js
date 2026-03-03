const { getRequestConfig } = require('next-intl/server');
const { hasLocale } = require('next-intl');
const { routing } = require('./routing');

module.exports = getRequestConfig(async ({ requestLocale }) => {
  // Corresponde al segmento [locale]
  const requested = await requestLocale;

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
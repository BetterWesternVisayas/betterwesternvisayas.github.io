import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    // Only 'en' and 'fil' bundles exist under public/locales. Without this,
    // the language detector requests region variants (e.g. 'en-US') and every
    // lookup 404s.
    supportedLngs: ['en', 'fil'],
    load: 'languageOnly',
    nonExplicitSupportedLngs: true,
    debug: false,
    defaultNS: 'common',
    // Must match the files actually shipped in public/locales/<lng>/.
    ns: ['common', 'about'],

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;

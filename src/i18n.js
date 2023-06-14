import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    backend: { loadPath: 'locales/{{lng}}/{{ns}}.json' },
    // resourses: {
    //   en: {
    //     translation: {
    //       Log: 'Log in',
    //       Sign: 'Sign up',
    //     },
    //   },
    //   ua: {
    //     translation: {
    //       Log: ' Ввійти',
    //       Sign: ' Реєстрація',
    //     },
    //   },
    // },
    detection: {
      // order: ['queryString', 'cookie'],
      //    cache: ['cookie']
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
    },
    interpolation: {
      escapeValue: false,
    },
  });
console.log('i18n :', i18n);

export default i18n;

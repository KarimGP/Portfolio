import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationCA from './locales/ca/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  },
  ca: {
    translation: translationCA
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false // React already protects against XSS
    }
  });

export default i18n;

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ky from './locales/ky.json'
import ru from './locales/ru.json'
import en from './locales/en.json'

i18n.use(initReactI18next).init({
  resources: { ky: { translation: ky }, ru: { translation: ru }, en: { translation: en } },
  lng: localStorage.getItem('storetech-language') || 'ky',
  fallbackLng: 'ky',
  interpolation: { escapeValue: false },
})

export default i18n

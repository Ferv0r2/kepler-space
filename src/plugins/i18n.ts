import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en, ko } from '@/locales'

const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language.slice(0, 2),
  fallbackLng: 'en',
})

export default i18n

import i18n from 'i18next'
import PolishTranslations from './polski'
import EnglishTranslations from './english'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    resources: {
      en: {
        translation: EnglishTranslations
      },
      pl: {
        translation: PolishTranslations
      }
    }
  })
  .then(() => {})
  .catch(() => {})

import React, { useEffect } from 'react'
import { Language } from '@static/translations'
import '@static/translations/init18n'
import i18n from 'i18next'
import { I18nextProvider } from 'react-i18next'

export const setlanguageIn18n = (lang: string) => {
  switch (lang) {
    case 'polski':
      i18n
        .changeLanguage('pl')
        .then(() => {})
        .catch(err => console.warn(err))
      break
    case 'english':
      i18n
        .changeLanguage('en')
        .then(() => {})
        .catch(err => console.warn(err))
      break
    default:
      break
  }
}

export const getLanguageFromLocalStorage = (): Language => {
  return typeof window !== 'undefined' && (localStorage.getItem('language') as Language)
    ? (localStorage.getItem('language') as Language)
    : ('english' as Language)
}

export const LanguageProvider: React.FC = ({ children }) => {
  const actualLanguage = getLanguageFromLocalStorage()

  useEffect(() => {
    setlanguageIn18n(actualLanguage)
  }, [actualLanguage])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}

import React, { useEffect, useState } from 'react'
import { LanguageContext } from '@utils/translations'
import { Language } from '@static/translations'
import '@static/translations/init18n'
import i18n from 'i18next'

export const LanguageProvider: React.FC = ({ children }) => {
  const actualLanguage =
    typeof window !== 'undefined' && (localStorage.getItem('language') as Language)
      ? (localStorage.getItem('language') as Language)
      : ('english' as Language)

  const [language, setLanguage] = useState<Language>(actualLanguage)

  useEffect(() => {
    switch (language) {
      case 'polski':
        i18n.changeLanguage('pl')
        break
      case 'english':
        i18n.changeLanguage('en')
        break
      default:
        break
    }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

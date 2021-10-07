import React, { useState } from 'react'
import { LanguageContext } from '@utils/translations'
import { Language } from '@static/translations'

export const LanguageProvider: React.FC = ({ children }) => {
  const actualLanguage =
    typeof window !== 'undefined'
      ? (localStorage.getItem('language') as Language)
      : ('english' as Language)

  const [language, setLanguage] = useState<Language>(actualLanguage)

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

import React, { useState } from 'react'
import { LanguageContext } from '@utils/translations'
import { Language } from '@static/translations'

export const LanguageProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState<Language>('english')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

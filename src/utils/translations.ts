import { Context, createContext, useContext } from 'react'
import dictionary, { Language } from '@static/translations'

export const LanguageContext: Context<{ language: Language, setLanguage: (chosen: Language) => void }> = createContext({
  language: 'english',
  setLanguage: (_chosen: Language) => {}
})

export const useTranslate = () => {
  const { language } = useContext(LanguageContext)

  return (key: string, index?: number): string => {
    if (index) {
      return dictionary[language][key][index] ?? ''
    }

    return dictionary[language][key] as string ?? ''
  }
}

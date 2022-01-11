import { Context, createContext } from 'react'
import { Language } from '@static/translations'
export const LanguageContext: Context<{
  language: Language
  setLanguage: (chosen: Language) => void
}> = createContext<{ language: Language, setLanguage: (chosen: Language) => void }>({
  language: 'english',
  setLanguage: (_chosen: Language) => {}
})

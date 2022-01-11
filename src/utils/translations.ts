import { Context, createContext } from 'react'
import { Language } from '@static/translations'

interface ILang {
  language: Language
  setLanguage: (chosen: Language) => void
}
export const LanguageContext: Context<{
  language: Language
  setLanguage: (chosen: Language) => void
}> = createContext<ILang>({
  language: 'english',
  setLanguage: (_chosen: Language) => {}
})

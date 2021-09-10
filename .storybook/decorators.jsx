import React from 'react'
import { StylesProvider } from '@material-ui/styles'
import { LanguageProvider } from '../src/providers/LanguageProvider/LanguageProvider'

export const withMaterialStyles = storyFn => (
  <StylesProvider injectFirst>{storyFn()}</StylesProvider>
)

export const withLanguage = storyFn => (
  <LanguageProvider>{storyFn()}</LanguageProvider>
)

export default {
  withMaterialStyles,
  withLanguage
}

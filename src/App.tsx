import React from 'react'
import './App.css'
import { ThemeProvider } from '@material-ui/core'
import HeaderWrapper from '@containers/HeaderWrapper/HeaderWrapper'
import FrontPage from '@containers/FrontPage/FrontPage'
import { theme } from '@static/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HeaderWrapper />
      <FrontPage />
    </ThemeProvider>
  )
}

export default App

import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import Footer from '@components/Footer/Footer'
import MainPage from '@pages/MainPage'
import theme from '@static/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
      <Footer />
    </ThemeProvider>
  )
}

export default App

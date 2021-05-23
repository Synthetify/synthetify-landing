import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import Footer from '@components/Footer/Footer'
import MainPage from '@pages/MainPage'
import theme from '@static/theme'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Footer />
      </ThemeProvider>
    </Router>
  )
}

export default App

import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import HeaderWrapper from '@containers/HeaderWrapper/HeaderWrapper'
import FrontPage from '@pages/FrontPage/FrontPage'
import Details from '@pages/Details/Details'
import MoreInformation from '@pages/MoreInformation/MoreInformation'
import { OurPartners } from '@pages/OurPartners/OurPartners'
import { theme } from '@static/theme'
import StayInTouch from '@pages/StayInTouch/StayInTouch'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderWrapper />
      <FrontPage />
      <Details />
      <MoreInformation />
      <OurPartners />
      <StayInTouch />
    </ThemeProvider>
  )
}

export default App

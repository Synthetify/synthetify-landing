import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import HeaderWrapper from '@containers/HeaderWrapper/HeaderWrapper'
import FrontPage from '@pages/FrontPage/FrontPage'
import Details from '@pages/Details/Details'
import MoreInformation from '@pages/MoreInformation/MoreInformation'
import OurPartners from '@pages/OurPartners/OurPartners'
import StayInTouch from '@pages/StayInTouch/StayInTouch'
import Footer from '@components/Footer/Footer'
import SectionSeparator from '@components/SectionSeparator/SectionSeparator'

import { theme } from '@static/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderWrapper />
      <FrontPage />
      <SectionSeparator />
      <Details />
      <SectionSeparator />
      <MoreInformation />
      <SectionSeparator />
      <OurPartners />
      <SectionSeparator />
      <StayInTouch />
      <Footer />
    </ThemeProvider>
  )
}

export default App

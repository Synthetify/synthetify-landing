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
import Background from '@components/Background/Background'

import BgFirst from '@static/svg/bg-first.svg'
import BgSecond from '@static/svg/bg-second.svg'
import BgThird from '@static/svg/bg-third.svg'
import { theme } from '@static/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Background background={BgFirst}>
        <HeaderWrapper />
        <FrontPage />
      </Background>
      <SectionSeparator />
      <Details />
      <SectionSeparator />
      <Background background={BgSecond}>
        <MoreInformation />
      </Background>
      <SectionSeparator />
      <OurPartners />
      <SectionSeparator />
      <Background background={BgThird}>
        <StayInTouch />
      </Background>
      <Footer />
    </ThemeProvider>
  )
}

export default App

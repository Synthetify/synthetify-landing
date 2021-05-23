import React from 'react'
import Background from '@components/Background/Background'
import HeaderWrapper from '@containers/HeaderWrapper/HeaderWrapper'
import FrontPage from '@sections/FrontSection/FrontSection'
import SectionSeparator from '@components/SectionSeparator/SectionSeparator'
import Details from '@sections/Features/Features'
import MoreInformation from '@sections/MoreInfo/MoreInfo'
import OurPartners from '@sections/OurPartners/OurPartners'
import StayInTouch from '@sections/StayInTouch/StayInTouch'
import BgFirst from '@static/svg/bg-first.svg'
import BgSecond from '@static/svg/bg-second.svg'
import BgThird from '@static/svg/bg-third.svg'

export const MainPage: React.FC = () => {
  return (
    <>
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
    </>
  )
}

export default MainPage

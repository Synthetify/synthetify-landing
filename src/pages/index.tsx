import React from 'react'
import Features from '@components/HomePageSections/Features/Features'
import TopBanner from '@components/HomePageSections/TopBanner/TopBanner'
import Partners from '@components/HomePageSections/Partners/Partners'
import ListedAssetsContainer from 'src/containers/ListedAssetsContainer/ListedAssetsContainer'

export default function Home() {
  return (
    <>
      <TopBanner />
      <ListedAssetsContainer />
      <Features />
      <Partners />
    </>
  )
}

import React from 'react'
import Features from '@components/HomePageSections/Features/Features'
import TopBanner from '@components/HomePageSections/TopBanner/TopBanner'
import Partners from '@components/HomePageSections/Partners/Partners'
import ListedAssetsContainer from 'src/containers/ListedAssetsContainer/ListedAssetsContainer'
import HomePageStatisticsContainer from 'src/containers/HomePageStatisticsContainer/HomePageStatisticsContainer'

export default function Home() {
  return (
    <>
      <TopBanner       id="test22"/>
      <ListedAssetsContainer />
      <Features />
      <HomePageStatisticsContainer/>
      <Partners />
    </>
  )
}

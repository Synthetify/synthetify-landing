import React from 'react'
import Features from '@components/HomePageSections/Features/Features'
import TopBanner from '@components/HomePageSections/TopBanner/TopBanner'
import Partners from '@components/HomePageSections/Partners/Partners'
import ListedAssetsContainer from 'src/containers/ListedAssetsContainer/ListedAssetsContainer'
import HomePageStatisticsContainer from 'src/containers/HomePageStatisticsContainer/HomePageStatisticsContainer'
import { GetStaticProps } from 'next'

export default function Home() {
  return (
    <>
      <TopBanner />
      <ListedAssetsContainer />
      <Features />
      <HomePageStatisticsContainer/>
      <Partners />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (context.params) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

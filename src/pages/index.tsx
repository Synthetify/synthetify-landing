import React, { useEffect } from 'react'
import Features from '@components/HomePageSections/Features/Features'
import TopBanner from '@components/HomePageSections/TopBanner/TopBanner'
import Partners from '@components/HomePageSections/Partners/Partners'
import ListedAssetsContainer from 'src/containers/ListedAssetsContainer/ListedAssetsContainer'
import HomePageStatisticsContainer from 'src/containers/HomePageStatisticsContainer/HomePageStatisticsContainer'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    if (router.pathname.length && !(/^\/$/.test(router.pathname))) {
      router.push('/').then(() => {}, () => {})
    }
  }, [router])

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

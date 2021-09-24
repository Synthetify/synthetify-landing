import React, { useEffect, useState } from 'react'
import Statistics from '@components/HomePageSections/Statistics/Statistics'

const HomePageStatisticsContainer = () => {
  const [data, setData] = useState<number[]>([])

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://api.synthetify.io/stats/devnet')
        .then(async response => {
          const helperVariable = await response.json()
          helperVariable.reverse()
          let volume: number = 0
          let collateral: number = 0
          let synthetic: number = 0
          helperVariable.map((oneDayData: {volume: number, collateral: number, synthetic: number}) => {
            volume += oneDayData.volume
            collateral += oneDayData.collateral
            synthetic += oneDayData.synthetic ?? 0
          })
          setData([volume, collateral, synthetic])
        })
    }
    fetchData()
  }, [])

  return (
    <Statistics
      volume={data[0]}
      collaterals={data[1]}
      synthetics={data[2]}
    />
  )
}

export default HomePageStatisticsContainer

import React, { useEffect, useState } from 'react'
import Statistics from '@components/HomePageSections/Statistics/Statistics'

const HomePageStatisticsContainer = () => {
  const [data, setData] = useState<number[]>([])

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://api.synthetify.io/stats/devnet')
        .then(async response => await response.json())
        .then(value => {
          const helperArray: number[] = [value.at(-1).volume, value.at(-1).collateral, value.at(-1).mint]
          setData(helperArray)
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

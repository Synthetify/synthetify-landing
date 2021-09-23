import React, { useEffect, useState } from 'react'
import Statistics from '@components/HomePageSections/Statistics/Statistics'

const HomePageStatisticsContainer = () => {
  const [data, setData] = useState<number[]>([])

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://api.synthetify.io/stats/devnet')
        .then(async response => {
          const helperVariable = await response.json()
          setData([helperVariable.at(-1).volume, helperVariable.at(-1).collateral, helperVariable.at(-1).synthetic])
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

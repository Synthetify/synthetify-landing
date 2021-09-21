import React, { useEffect, useState } from 'react'
import Statistics from '@components/HomePageSections/Statistics/Statistics'

function HomePageStatisticsContainer() {
  const [data, setData] = useState()
  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://api.synthetify.io/stats/devnet') // pobrac ze stanu jaka siec i tu ja dodac
        .then(async response => await response.json())
        .then(value => {
          setData(value)
        })
    }
    fetchData()
  }, [])

  return (
    <Statistics
      volume={data?.at(-1)['volume']}
      collaterals={data?.at(-1)['collateral']}
      synthetics={91111}
    />
  )
}

export default HomePageStatisticsContainer

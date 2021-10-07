import React, { useEffect, useState } from 'react'
import Statistics from '@components/HomePageSections/Statistics/Statistics'

const HomePageStatisticsContainer = () => {
  const [data, setData] = useState<number[]>([0, 0, 0])

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://api.synthetify.io/stats/mainnet')
        .then(async response => {
          const snapshots = await response.json()
          const lastSnap = snapshots.at(-1)
          setData([lastSnap.volume, lastSnap.collateralAll, lastSnap.synthetic])
        })
    }
    fetchData().then(() => {}, () => {})
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

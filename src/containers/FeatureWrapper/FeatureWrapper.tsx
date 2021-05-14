import React from 'react'
import { Grid } from '@material-ui/core'

import Feature, { IFeatureProps } from '@components/Feature/Feature'
import InstantTransactions from '@static/svg/instant-transaction.svg'
import Oracle from '@static/svg/oracle.svg'
import NoFrontRunning from '@static/svg/no-front-running.svg'

const features: IFeatureProps[] = [
  {
    title: 'Instant transactions',
    text:
      'Synthetify app offers near to instant confirmation time for all transactions (approx. 0.4s)',
    icon: InstantTransactions
  },
  {
    title: 'Fair asset prices',
    text: 'Synthetify Oracles update every couple of seconds, guaranteeing fair prices',
    icon: Oracle
  },
  {
    title: 'No front-running',
    text:
      'Synthetify contracts are of the highest quality, therefore your funds are safe from front-running attacks',
    icon: NoFrontRunning
  }
]

export const FeatureWrapper: React.FC = () => {
  const featuresComponents = features.map((item, index) => {
    return (
      <Grid key={index}>
        <Feature title={item.title} text={item.text} icon={item.icon} />
      </Grid>
    )
  })

  return <>{featuresComponents}</>
}

export default FeatureWrapper

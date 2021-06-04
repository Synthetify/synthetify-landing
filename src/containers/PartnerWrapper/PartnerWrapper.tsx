import React from 'react'
import { IPartnerIProps, Partner } from '@components/Partner/Partner'
import { Grid } from '@material-ui/core'
import SolanaLogo from '@static/svg/solana-logo.svg'
import Alameda from '@static/png/partners/alameda.png'
import GenblockCapital from '@static/png/partners/genblock-capital.png'
import BuidlHodlCapital from '@static/png/partners/buidl-hodl-capital.png'
import CSM from '@static/png/partners/cms-white.png'
import DefiAlliance from '@static/png/partners/defi-alliance-white.png'
import DivergenceVentures from '@static/png/partners/divergence-ventures.png'
import EIVentures from '@static/png/partners/e-i-ventures.png'
import useStyles from './style'

const partners: IPartnerIProps[] = [
  {
    logo: DefiAlliance,
    name: 'Defi Alliance'
  },
  {
    logo: CSM,
    name: 'CMS'
  },
  {
    logo: BuidlHodlCapital,
    name: 'Buidl Hodl Capital'
  },
  {
    logo: Alameda,
    name: 'Alameda Research'
  },
  {
    logo: DivergenceVentures,
    name: 'Divergence Ventures'
  },
  {
    logo: SolanaLogo,
    name: 'Solana'
  },
  {
    logo: GenblockCapital,
    name: 'Genblock Capital'
  },
  {
    logo: EIVentures,
    name: 'e^i Ventures'
  }
]

export const PartnerWrapper: React.FC = () => {
  const classes = useStyles()

  const partnersComponents = partners.map((item, index) => {
    return (
      <Grid item xl={3} lg={4} md={6} className={classes.root}>
        <Partner key={index} logo={item.logo} name={item.name} maxWidth={item.maxWidth} />
      </Grid>
    )
  })
  return <>{partnersComponents}</>
}

export default PartnerWrapper

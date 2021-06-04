import React from 'react'
import { IPartnerIProps, Partner } from '@components/Partner/Partner'
import SolanaLogo from '@static/svg/solana-logo.svg'
import Alameda from '@static/png/partners/alameda.png'
import GenblockCapital from '@static/png/partners/genblock-capital.png'
import BuidlHodlCapital from '@static/png/partners/buidl-hodl-capital.png'
import CSM from '@static/png/partners/cms-white.png'

const partners: IPartnerIProps[] = [
  {
    logo: SolanaLogo,
    name: 'Solana'
  },
  {
    logo: Alameda,
    name: 'Alameda Research'
  },
  {
    logo: GenblockCapital,
    name: 'Genblock Capital'
  },
  {
    logo: BuidlHodlCapital,
    name: 'Buidl Hodl Capital'
  },
  {
    logo: CSM,
    name: 'CMS'
  }
]

export const PartnerWrapper: React.FC = () => {
  const partnersComponents = partners.map((item, index) => {
    return <Partner key={index} logo={item.logo} name={item.name} maxWidth={item.maxWidth} />
  })
  return <>{partnersComponents}</>
}

export default PartnerWrapper

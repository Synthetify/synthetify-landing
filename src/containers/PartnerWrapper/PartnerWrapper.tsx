import { IPartnerIProps, Partner } from '@components/Partner/Partner'
import SolanaLogo from '@static/svg/solana-logo.svg'
import React from 'react'

const partners: IPartnerIProps[] = [
  {
    logo: SolanaLogo,
    name: 'Solana'
  },
  {
    logo: SolanaLogo,
    name: 'Solana'
  },
  {
    logo: SolanaLogo,
    name: 'Solana'
  }
]

export const PartnerWrapper: React.FC = () => {
  const partnersComponents = partners.map((item, index) => {
    return <Partner key={index} logo={item.logo} name={item.name} />
  })
  return <>{partnersComponents}</>
}

export default PartnerWrapper

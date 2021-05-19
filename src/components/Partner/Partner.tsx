import React from 'react'

export interface IPartnerIProps {
  logo: string
  name: string
}

export const Partner: React.FC<IPartnerIProps> = ({ logo, name }) => {
  return <img src={logo} alt={name} />
}

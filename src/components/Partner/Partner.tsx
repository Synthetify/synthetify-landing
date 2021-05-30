import React from 'react'

export interface IPartnerIProps {
  logo: string
  name: string
  maxWidth?: number
}

export const Partner: React.FC<IPartnerIProps> = ({ logo, name, maxWidth }) => {
  const defaultMaxWidth = 300

  if (maxWidth) {
    return <img src={logo} alt={name} style={{ maxWidth: maxWidth }} />
  }
  return <img src={logo} alt={name} style={{ maxWidth: defaultMaxWidth }} />
}

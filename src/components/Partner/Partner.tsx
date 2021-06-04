import React from 'react'
import useStyles from './style'

export interface IPartnerIProps {
  logo: string
  name: string
  maxWidth?: number
}

export const Partner: React.FC<IPartnerIProps> = ({ logo, name, maxWidth }) => {
  const classes = useStyles()
  const defaultMaxWidth = 300
  if (!maxWidth) {
    maxWidth = defaultMaxWidth
  }

  return <img src={logo} alt={name} style={{ maxWidth }} className={classes.root} />
}

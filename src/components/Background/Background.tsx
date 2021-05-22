import React, { ReactNode } from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './style'

interface IBackgroundProps {
  children: ReactNode
  background: string
}

export const Background: React.FC<IBackgroundProps> = ({ children, background }) => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} style={{ backgroundImage: `url(${background})` }}>
      {children}
    </Grid>
  )
}

export default Background

import React from 'react'
import NoFrontRunning from '@static/svg/no-front-running.svg'
import { Grid, Typography } from '@material-ui/core'
import useStyles from './style'

export const Feature: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid container direction='row' spacing={3}>
      <Grid item>
        <img src={NoFrontRunning} alt='No front-running' />
      </Grid>
      <Grid item>
        <Grid item>
          <Typography className={classes.title}>
            <span className={classes.bold}>No</span> front-running
          </Typography>
          <Typography className={classes.text}>
            Synthetify contracts are of the highest quality, therefore your funds are safe from
            front-running attacks
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Feature

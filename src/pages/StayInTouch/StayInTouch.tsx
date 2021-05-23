import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import OutlinedButton from '@components/OutlinedButton/OutlinedButton'
import useStyles from './styles'

export const StayInTouch: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      direction='row'
      justify='space-around'
      alignItems='center'
      className={classes.root}>
      <Grid item>
        <Typography className={classes.title}>Stay in touch!</Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.text}>
          Synthetify is growing intesibely every day, so stay in touch by following our social media
          and make sure you never miss any news! Join our Discord to connect with the Synthetify fam
          <span role='img' aria-label='heart'>
            💚
          </span>
        </Typography>
      </Grid>
      <Grid item>
        <OutlinedButton name='join discord' buttonColor='black' onClick={() => {}} />
      </Grid>
    </Grid>
  )
}

export default StayInTouch

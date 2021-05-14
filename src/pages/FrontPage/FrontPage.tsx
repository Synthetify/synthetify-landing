import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from './style'
import LogoTypeSolana from '@static/svg/logotype-white.svg'
import OutlinedButton from '@components/OutlinedButton/OutlinedButton'

export const FrontPage: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid container direction='column' alignItems='center' className={classes.root}>
      <Grid item>
        <Typography variant='h1' className={classes.title}>
          Decentralized synthetic
        </Typography>
        <Typography variant='h1' className={classes.title}>
          assets exchange
        </Typography>
      </Grid>
      <Grid item className={classes.mdUp}>
        <Typography variant='h2' className={classes.subtitle}>
          <Grid>a decentralized synthetic assets exchange build on Solana,</Grid>
          <Grid>providing ultimate trading experiences</Grid>
        </Typography>
      </Grid>
      <Grid item className={classes.smDown}>
        <Typography variant='h2' className={classes.subtitle}>
          <Grid>a decentralized synthetic assets</Grid>
          <Grid>exchange build on Solana, providing</Grid>
          <Grid>ultimate trading experienceses</Grid>
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction='row'
        alignItems='center'
        justify='space-around'
        className={classes.maxWidth300}>
        <Grid item>
          <Typography className={classes.buildOn}>build on</Typography>
        </Grid>
        <Grid item>
          <img src={LogoTypeSolana} alt='Solana Logo' />
        </Grid>
      </Grid>
      <Grid item container justify='space-between' className={classes.buttons}>
        <OutlinedButton name='launch app' buttonColor='black' onClick={() => {}} />
        <OutlinedButton name='learn more' buttonColor='blue' onClick={() => {}} />
      </Grid>
    </Grid>
  )
}

export default FrontPage

import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from './style'
import MainButton from '@components/MainButton/MainButton'
import LogoTypeSolana from '@static/svg/logotype-white.svg'

export const FrontPage: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.root}>
      <Grid item>
        <Typography variant='h1' className={classes.title}>
          <Grid>Decentralized synthetic</Grid>
          <Grid>assets exchange</Grid>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='h2' className={classes.subtitle}>
          <Grid>a decentralized synthetic assets exchange build on Solana,</Grid>
          <Grid>providing ultimate trading experiences</Grid>
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
      <Grid item>
        <MainButton name='LAUNCH APP' onClick={() => {}} />
        <MainButton name='LEARN MORE' onClick={() => {}} />
      </Grid>
    </Grid>
  )
}

export default FrontPage

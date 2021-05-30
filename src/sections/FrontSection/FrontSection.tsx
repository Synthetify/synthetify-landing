import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import OutlinedButton from '@components/OutlinedButton/OutlinedButton'
import LogoTypeSolana from '@static/svg/logotype-white.svg'
import links from '@static/constants/links'
import useStyles from './style'

export const FrontSection: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      justify='space-between'
      className={classes.root}>
      <Grid item>
        <Typography variant='h1' className={classes.title}>
          Decentralized synthetic assets exchange
        </Typography>
      </Grid>
      <Grid item className={classes.textContainer}>
        <Typography variant='h2' className={classes.subtitle}>
          a decentralized synthetic assets exchange built on Solana, providing ultimate trading
          experiences
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
          <Typography variant='body1' className={classes.buildOn}>
            built on
          </Typography>
        </Grid>
        <Grid item>
          <img src={LogoTypeSolana} alt='Solana Logo' />
        </Grid>
      </Grid>
      <Grid item container justify='space-between' className={classes.buttons}>
        <OutlinedButton
          name='launch app'
          buttonColor='black'
          onClick={() => window.open(links.app)}
        />
        <OutlinedButton
          name='learn more'
          buttonColor='blue'
          onClick={() => window.open(links.docs)}
        />
      </Grid>
    </Grid>
  )
}

export default FrontSection

import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import OutlinedButton from '@components/OutlinedButton/OutlinedButton'
import SynthetifyLitepaper from '@static/svg/synthetify-litepaper.svg'
import links from '@static/constants/links'

import useStyles from './styles'

export const MoreInfo: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid container direction='row' wrap='wrap-reverse' className={classes.root}>
      <Grid item sm={12} md={6} className={classes.imgContainer}>
        <img
          src={SynthetifyLitepaper}
          className={classes.whitePaperImg}
          alt='Synthetify Litepaper'
        />
      </Grid>
      <Grid item container sm={12} md={6} justify='space-around' className={classes.rightSide}>
        <Grid item>
          <Typography variant='h2' className={classes.title}>
            Need more information?
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' className={classes.text}>
            We aim to provide a bridge between cryptocurrencies, stocks, fiat currencies and other
            financial instruments decentralized exchange. You can learn more form out Whitepaper!
          </Typography>
        </Grid>
        <Grid item className={classes.button}>
          <OutlinedButton
            name='read whitepaper'
            buttonColor='black'
            onClick={() => {
              window.open(links.whitepaper)
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MoreInfo
import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import OutlinedButton from '@components/OutlinedButton/OutlinedButton'
import SynthetifyLitepaper from '@static/svg/synthetify-litepaper.svg'
import useStyles from './styles'

export const MoreInformation: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid container direction='row' className={classes.root}>
      <Grid item xs={4}>
        <img src={SynthetifyLitepaper} alt='' />
      </Grid>
      <Grid item container xs={8} justify='space-around' className={classes.rightSide}>
        <Grid item>
          <Typography className={classes.title}>Need more information?</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.text}>
            We aim to provide a bridge between cryptocurrencies, stocks, fiat currencies and other
            financial instruments decentralized exchange. You can learn more form out Whitepaper!
          </Typography>
        </Grid>
        <Grid item className={classes.button}>
          <OutlinedButton name='read whitepaper' buttonColor='black' onClick={() => {}} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MoreInformation

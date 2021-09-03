import { CardMedia, Grid, Typography } from '@material-ui/core'
import { useTranslate } from '@utils/translations'
import React from 'react'
import defi from '@static/svg/partners/defi.svg'
import alameda from '@static/svg/partners/alameda.svg'
import cms from '@static/svg/partners/cms.svg'
import buidl from '@static/svg/partners/buidl.svg'
import divergence from '@static/svg/partners/divergence.svg'
import genblock from '@static/svg/partners/genblock.svg'
import solLogo from '@static/svg/partners/solana-logo.svg'
import solText from '@static/svg/partners/solana-text.svg'
import ei from '@static/svg/partners/ei.svg'
import useStyles from './style'

export const Partners: React.FC = () => {
  const classes = useStyles()
  const translate = useTranslate()

  return (
    <Grid container className={classes.root} direction='column'>
      <Typography className={classes.title}>{translate('home.ourInvestors')}</Typography>
      <Typography className={classes.description}>{translate('home.ourInvestors.description')}</Typography>
      <Grid container className={classes.logos}>
        <Grid item container className={classes.logoWrapper} justifyContent='center' alignItems='center'>
          <CardMedia
            image={defi.src}
            component='img'
            className={classes.defi}
          />
        </Grid>

        <Grid item container className={classes.logoWrapper} justifyContent='center' alignItems='center'>
          <CardMedia
            image={alameda.src}
            component='img'
            className={classes.alameda}
          />
        </Grid>

        <Grid item container className={classes.logoWrapper} justifyContent='center' alignItems='center'>
          <CardMedia
            image={cms.src}
            component='img'
            className={classes.cms}
          />
        </Grid>

        <Grid item container className={classes.logoWrapper} justifyContent='center' alignItems='center'>
          <CardMedia
            image={buidl.src}
            component='img'
            className={classes.buidl}
          />
        </Grid>

        <Grid item container className={classes.logoWrapper} justifyContent='center' alignItems='center'>
          <CardMedia
            image={divergence.src}
            component='img'
            className={classes.divergence}
          />
        </Grid>

        <Grid item container className={classes.logoWrapper} justifyContent='center' alignItems='center'>
          <CardMedia
            image={genblock.src}
            component='img'
            className={classes.genblock}
          />
        </Grid>

        <Grid item container className={classes.logoWrapper} justifyContent='center' alignItems='center'>
          <Grid container style={{ height: 'fit-content', width: 'fit-content' }} alignItems='center'>
            <CardMedia
              image={solLogo.src}
              component='img'
              className={classes.solLogo}
            />
            <CardMedia
              image={solText.src}
              component='img'
              className={classes.solText}
            />
          </Grid>
        </Grid>

        <Grid item container className={classes.logoWrapper} justifyContent='center' alignItems='center'>
          <CardMedia
            image={ei.src}
            component='img'
            className={classes.ei}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Partners

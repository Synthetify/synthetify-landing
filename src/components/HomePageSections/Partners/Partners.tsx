import { CardMedia, Grid, Typography } from '@material-ui/core'
import { useTranslate } from '@utils/translations'
import React from 'react'
import defi from '@static/svg/partners/defi.svg'
import alameda from '@static/svg/partners/alameda.svg'
import cms from '@static/svg/partners/cms.svg'
import buidl from '@static/svg/partners/buidl.svg'
import divergence from '@static/svg/partners/divergence.svg'
import genblock from '@static/svg/partners/genblock.svg'
import solana from '@static/svg/partners/solana.svg'
import ei from '@static/svg/partners/ei.svg'
import useStyles from './style'

export const Partners: React.FC = () => {
  const classes = useStyles()
  const translate = useTranslate()

  return (
    <Grid container className={classes.root} direction='column'>
      <Typography className={classes.title}>{translate('home.ourInvestors')}</Typography>
      <Typography className={classes.description}>{translate('home.ourInvestors.description')}</Typography>
      <Grid className={classes.logos}>
        <CardMedia
          image={defi}
          component='img'
          className={classes.defi}
        />

        <CardMedia
          image={alameda}
          component='img'
          className={classes.alameda}
        />

        <CardMedia
          image={cms}
          component='img'
          className={classes.cms}
        />

        <CardMedia
          image={buidl}
          component='img'
          className={classes.buidl}
        />

        <CardMedia
          image={divergence}
          component='img'
          className={classes.divergence}
        />

        <CardMedia
          image={genblock}
          component='img'
          className={classes.genblock}
        />

        <CardMedia
          image={solana}
          component='img'
          className={classes.solana}
        />

        <CardMedia
          image={ei}
          component='img'
          className={classes.ei}
        />
      </Grid>
    </Grid>
  )
}

export default Partners

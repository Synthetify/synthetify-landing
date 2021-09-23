import { CardMedia, Grid, Typography } from '@material-ui/core'
import { useTranslate } from '@utils/translations'
import React from 'react'
import instant from '@static/svg/instant.svg'
import fair from '@static/svg/fair.svg'
import decentralized from '@static/svg/decentralized.svg'
import layerOne from '@static/svg/layerOne.svg'
import userFriendly from '@static/svg/userFriendly.svg'
import nonCustodial from '@static/svg/nonCustodial.svg'
import { colors } from '@static/theme'
import useStyles from './style'

export const Feature: React.FC = () => {
  const classes = useStyles()
  const translate = useTranslate()

  return (
    <Grid container className={classes.root} direction='column'>
      <Typography className={classes.title}>{translate('home.features')}</Typography>
      <Typography className={classes.description}>{translate('home.features.description')}</Typography>
      <Grid className={classes.featuresWrapper}>
        <Grid container item className={classes.feature} direction='row' wrap='nowrap' alignItems='center'>
          <CardMedia
            image={instant}
            className={classes.icon}
          />
          <Grid container item>
            <Typography className={classes.featureTitle} style={{ color: colors.navy.button }}>{translate('home.features.instantTransactions')}</Typography>
            <Typography className={classes.featureDescription}>{translate('home.features.instantTransactions.description')}</Typography>
          </Grid>
        </Grid>

        <Grid container item className={classes.feature} direction='row' wrap='nowrap' alignItems='center'>
          <CardMedia
            image={fair}
            className={classes.icon}
          />
          <Grid container item>
            <Typography className={classes.featureTitle} style={{ color: colors.green.actionButton }}>{translate('home.features.reliablePriceOracles')}</Typography>
            <Typography className={classes.featureDescription}>{translate('home.features.reliablePriceOracles.description')}</Typography>
          </Grid>
        </Grid>

        <Grid container item className={classes.feature} direction='row' wrap='nowrap' alignItems='center'>
          <CardMedia
            image={decentralized}
            className={classes.icon}
          />
          <Grid container item>
            <Typography className={classes.featureTitle} style={{ color: colors.navy.veryLightGrey }}>{translate('home.features.decentralized')}</Typography>
            <Typography className={classes.featureDescription}>{translate('home.features.decentralized.description')}</Typography>
          </Grid>
        </Grid>

        <Grid container item className={classes.feature} direction='row' wrap='nowrap' alignItems='center'>
          <CardMedia
            image={layerOne}
            className={classes.icon}
          />
          <Grid container item>
            <Typography className={classes.featureTitle} style={{ color: colors.navy.button }}>{translate('home.features.layerOneSolution')}</Typography>
            <Typography className={classes.featureDescription}>{translate('home.features.layerOneSolution.description')}</Typography>
          </Grid>
        </Grid>

        <Grid container item className={classes.feature} direction='row' wrap='nowrap' alignItems='center'>
          <CardMedia
            image={userFriendly}
            className={classes.icon}
          />
          <Grid container item>
            <Typography className={classes.featureTitle} style={{ color: colors.green.actionButton }}>{translate('home.features.userFriendly')}</Typography>
            <Typography className={classes.featureDescription}>{translate('home.features.userFriendly.description')}</Typography>
          </Grid>
        </Grid>

        <Grid container item className={classes.feature} direction='row' wrap='nowrap' alignItems='center'>
          <CardMedia
            image={nonCustodial}
            className={classes.icon}
          />
          <Grid container item>
            <Typography className={classes.featureTitle} style={{ color: colors.navy.veryLightGrey }}>{translate('home.features.nonCustodial')}</Typography>
            <Typography className={classes.featureDescription}>{translate('home.features.nonCustodial.description')}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Feature

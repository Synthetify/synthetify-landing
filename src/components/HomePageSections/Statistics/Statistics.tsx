import AnimatedNumber from '@components/AnimatedNumber'
import { Divider, Grid, Typography } from '@material-ui/core'
import classNames from 'classnames'
import React from 'react'
import useStyles from './style'
import { useTranslation } from 'react-i18next'
import '@static/translations/init18n'
interface IProps {
  volume: number
  collaterals: number
  synthetics: number
}

export const Partners: React.FC<IProps> = ({ volume, collaterals, synthetics }) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const formatValue = (value: number) => {
    if (value < 10) {
      return value.toFixed(4)
    }

    if (value < 1000) {
      return value.toFixed(2)
    }

    if (value < 10000) {
      return value.toFixed(1)
    }

    if (value < 100000) {
      return (value / 1000).toFixed(2)
    }

    if (value < 1000000) {
      return (value / 1000).toFixed(1)
    }

    return (value / 1000000).toFixed(2)
  }

  return (
    <Grid container className={classes.root} direction='column'>
      <Typography className={classes.title}>{t('home.statistics')}</Typography>
      <Typography className={classes.description}>{t('home.statistics.description')}</Typography>
      <Grid container className={classes.wrapper} direction='row' justifyContent='space-between'>
        <Grid
          container
          direction='column'
          className={classes.field}
          justifyContent='center'
          alignItems='center'
        >
          <Typography className={classNames(classes.fieldName, classes.devnet)}>
            {t('home.statistics.volume')}
          </Typography>
          <Typography className={classes.fieldValue}>
            $
            <AnimatedNumber value={volume} duration={300} formatValue={formatValue} />
            {volume >= 10000 ? (volume >= 1000000 ? 'M' : 'K') : ''}
          </Typography>
          <Typography className={classes.fieldName}>{t('home.statistics.last24h')}</Typography>
        </Grid>

        <Divider orientation='vertical' className={classes.divider} />

        <Grid
          container
          direction='column'
          className={classes.field}
          justifyContent='center'
          alignItems='center'
        >
          <Typography className={classNames(classes.fieldName, classes.devnet)}>
            {t('home.statistics.collaterals')}
          </Typography>

          <Typography className={classes.fieldValue}>
            $
            <AnimatedNumber value={collaterals} duration={300} formatValue={formatValue} />
            {collaterals >= 10000 ? (collaterals >= 1000000 ? 'M' : 'K') : ''}
          </Typography>
          <Typography className={classes.fieldName}>{t('home.statistics.current')}</Typography>
        </Grid>

        <Divider orientation='vertical' className={classes.divider} />

        <Grid
          container
          direction='column'
          className={classes.field}
          justifyContent='center'
          alignItems='center'
        >
          <Typography className={classNames(classes.fieldName, classes.devnet)}>
            {t('home.statistics.synthetics')}
          </Typography>
          <Typography className={classes.fieldValue}>
            $
            <AnimatedNumber value={synthetics} duration={300} formatValue={formatValue} />
            {synthetics >= 10000 ? (synthetics >= 1000000 ? 'M' : 'K') : ''}
          </Typography>
          <Typography className={classes.fieldName}>{t('home.statistics.current')}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Partners

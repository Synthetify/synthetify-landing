import AnimatedNumber from '@components/AnimatedNumber'
import { Divider, Grid, Typography } from '@material-ui/core'
import { useTranslate } from '@utils/translations'
import React from 'react'
import useStyles from './style'
interface IProps {
  volume: number
  collaterals: number
  synthetics: number
}
interface IProps {
  volume: number
  collaterals: number
  synthetics: number
}

export const Partners: React.FC<IProps> = ({ volume, collaterals, synthetics }) => {
  const classes = useStyles()
  const translate = useTranslate()
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
      <Typography className={classes.title}>{translate('home.statistics')}</Typography>
      <Typography className={classes.description}>{translate('home.statistics.description')}</Typography>
      <Grid container className={classes.wrapper} direction='row' justifyContent='space-between'>
        <Grid container direction='column' className={classes.field} justifyContent='center' alignItems='center'>
          <Typography className={classes.fieldName}>{translate('home.statistics.volume')}</Typography>
          <Typography className={classes.fieldValue}>
            $
            <AnimatedNumber
              value={volume}
              duration={300}
              formatValue={formatValue}
            />
            {volume >= 10000
              ? (volume >= 1000000 ? 'M' : 'K')
              : ''
            }
          </Typography>
          <Typography className={classes.fieldName}>{translate('home.statistics.lastMonth')}</Typography>
        </Grid>

        <Divider orientation='vertical' className={classes.divider} />

        <Grid container direction='column' className={classes.field} justifyContent='center' alignItems='center'>
          <Typography className={classes.fieldName}>{translate('home.statistics.collaterals')}</Typography>
          <Typography className={classes.fieldValue}>
          $
            <AnimatedNumber
              value={collaterals}
              duration={300}
              formatValue={formatValue}
            />
            {collaterals >= 10000
              ? (collaterals >= 1000000 ? 'M' : 'K')
              : ''
            }
          </Typography>
          <Typography className={classes.fieldName}>{translate('home.statistics.lastMonth')}</Typography>
        </Grid>

        <Divider orientation='vertical' className={classes.divider} />

        <Grid container direction='column' className={classes.field} justifyContent='center' alignItems='center'>
          <Typography className={classes.fieldName}>{translate('home.statistics.synthetics')}</Typography>
          <Typography className={classes.fieldValue}>
          $
            <AnimatedNumber
              value={synthetics}
              duration={300}
              formatValue={formatValue}
            />
            {synthetics >= 10000
              ? (synthetics >= 1000000 ? 'M' : 'K')
              : ''
            }
          </Typography>
          <Typography className={classes.fieldName}>{translate('home.statistics.lastMonth')}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Partners

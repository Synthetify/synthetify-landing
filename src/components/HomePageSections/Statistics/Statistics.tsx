import { Divider, Grid, Typography } from '@material-ui/core'
import { useTranslate } from '@utils/translations'
import React from 'react'
import useStyles from './style'

export const Partners: React.FC = () => {
  const classes = useStyles()
  const translate = useTranslate()

  return (
    <Grid container className={classes.root} direction='column'>
      <Typography className={classes.title}>{translate('home.statistics')}</Typography>
      <Typography className={classes.description}>{translate('home.statistics.description')}</Typography>
      <Grid container className={classes.wrapper} direction='row' justifyContent='space-between'>
        <Grid container direction='column' className={classes.field} justifyContent='center' alignItems='center'>
          <Typography className={classes.fieldName}>{translate('home.statistics.volume')}</Typography>
          <Typography className={classes.fieldValue}>
            1
          </Typography>
          <Typography className={classes.fieldName}>{translate('home.statistics.lastMonth')}</Typography>
        </Grid>

        <Divider orientation='vertical' className={classes.divider} />

        <Grid container direction='column' className={classes.field} justifyContent='center' alignItems='center'>
          <Typography className={classes.fieldName}>{translate('home.statistics.volume')}</Typography>
          <Typography className={classes.fieldValue}>
            1
          </Typography>
          <Typography className={classes.fieldName}>{translate('home.statistics.lastMonth')}</Typography>
        </Grid>

        <Divider orientation='vertical' className={classes.divider} />

        <Grid container direction='column' className={classes.field} justifyContent='center' alignItems='center'>
          <Typography className={classes.fieldName}>{translate('home.statistics.volume')}</Typography>
          <Typography className={classes.fieldValue}>
            1
          </Typography>
          <Typography className={classes.fieldName}>{translate('home.statistics.lastMonth')}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Partners

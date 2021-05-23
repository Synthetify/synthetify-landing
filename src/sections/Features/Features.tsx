import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from './style'
import FeatureWrapper from '@containers/FeatureWrapper/FeatureWrapper'

export const Features: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.root}>
      <Grid className={classes.header}>
        <Typography className={classes.title}>
          Fully scalable <span className={classes.solution}>solution</span>
        </Typography>
        <Typography className={classes.description}>available in your browser</Typography>
      </Grid>
      <Grid container>
        <FeatureWrapper />
      </Grid>
    </Grid>
  )
}

export default Features

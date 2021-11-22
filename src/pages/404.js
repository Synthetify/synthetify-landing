import React from 'react'
import useStyles from '@pagesStyles/custom404/style'
import { Grid, Typography } from '@material-ui/core'

export default function Custom404 () {
  const classes = useStyles()

  return <>

    <Grid className={classes.root} container direction="column" justifyContent="center" alignItems="center">
      <Grid item>
        <Typography className={classes.title}>
          404
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.subTitle}>
          PAGE NOT FOUND
        </Typography>
      </Grid>
    </Grid>
  </>
}

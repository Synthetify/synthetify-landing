import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'
import { Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontFamily: 'Nunito Sans'
  },
  title: {
    marginTop: 116,
    fontWeight: 800,
    fontSize: 70,
    lineHeight: '49px',
    color: colors.white.main,
    [theme.breakpoints.down('xs')]: {
      marginTop: 96
    }
  },
  subTitle: {
    marginTop: 36,
    marginBottom: 152,
    fontWeight: 400,
    fontSize: 27,
    lineHeight: '35px',
    color: colors.navy.navBar,
    opacity: 0.76,
    [theme.breakpoints.down('md')]: {
      marginBottom: 172
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 203
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: 167
    }
  }
}))

export default function Custom404 () {
  const classes = useStyles()
  console.log('404')
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

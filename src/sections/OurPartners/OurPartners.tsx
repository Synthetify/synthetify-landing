import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import PartnerWrapper from '@containers/PartnerWrapper/PartnerWrapper'
import useStyles from './styles'

export const OurPartners: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid container direction='column' justify='space-around' className={classes.root}>
      <Grid item>
        <Typography variant='h2' className={classes.title}>
          <span className={classes.bold}>Our</span> partners
        </Typography>
      </Grid>
      <Grid
        container
        item
        direction='row'
        alignItems='center'
        justify='space-around'
        className={classes.partners}>
        <PartnerWrapper />
      </Grid>
    </Grid>
  )
}

export default OurPartners

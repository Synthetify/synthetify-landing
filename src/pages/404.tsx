import React from 'react'
import Link from 'next/link'
import useStyles from '@pagesStyles/custom404/style'
import snyLogo from '@static/svg/sny_404.svg'
import { CardMedia, Grid, Typography, Button } from '@material-ui/core'

export default function Custom404() {
  const classes = useStyles()

  return <>

    <div className={classes.blur}></div>
    <Grid
      className={classes.root}
      container
      id='without'
    >

      <CardMedia className={classes.image} alt=' ' src={snyLogo} component='img' />
      <div className={classes.textWrapper}>
        <Typography className={classes.textHeader}>
        OOPS!
        </Typography>
        <Typography className={classes.textBody}>
        Something went wrong while loading the page...Please, try to reload it. If there’ll still be a problem, contact us!
        </Typography>
      </div>
      <Link href="/">
        <a>
          <Button
            className={classes.tradeLink}
            href='/'
            variant='contained'
            target='_blank'
            rel='noopener noreferrer'>
              Close
          </Button>
        </a>
      </Link>
    </Grid>
  </>
}

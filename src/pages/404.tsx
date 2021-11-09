import React, { useEffect } from 'react'
import Link from 'next/link'
import useStyles from '@pagesStyles/Custom404/style'
import snyLogo from '@static/svg/sny_404.svg'
import { CardMedia, Grid, Typography, Button } from '@material-ui/core'
import { blurContent, unblurContent } from '@utils/uiUtils'

export default function T404() {
  const classes = useStyles()
  // {translate('header.trade')}
  useEffect(() => {
    blurContent()
    // el.style.filter = 'blur(4px) brightness(0.4)'
  }, [])
  return <>

    <Grid
      className={classes.root}
      container
      id='toBlur'
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
              home
          </Button>
        </a>
      </Link>
    </Grid>
  </>
}

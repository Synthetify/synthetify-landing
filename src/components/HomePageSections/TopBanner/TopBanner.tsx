import { CardMedia, Grid, Typography } from '@material-ui/core'
import React from 'react'
import logo from '@static/svg/solana.svg'
import useStyles from './style'
import { useTranslation } from 'react-i18next'
import '@static/translations/init18n'

export const TopBanner: React.FC = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.photoWrapper}>
        {/* <CardMedia
          playsInline
          autoPlay
          muted
          loop
          disablePictureInPicture
          preload='auto'
          image='animation.mp4'
          className={classes.photo}
          component='video'
        /> */}
        <CardMedia image='screen.png' className={classes.photo} component='img' />
      </Grid>
      <Grid item container className={classes.right} direction='column' justifyContent='center'>
        <Grid container alignItems='center'>
          <Typography className={classes.builtOn}>{t('home.banner.builtOn')}</Typography>
          <CardMedia image={logo} className={classes.solanaLogo} component='img' />
        </Grid>
        <Typography className={classes.title}>{t('home.banner.header')}</Typography>
        <Typography className={classes.intro}>{t('home.banner.intro')}</Typography>
        <Typography className={classes.description}>{t('home.banner.description')}</Typography>
      </Grid>
    </Grid>
  )
}

export default TopBanner

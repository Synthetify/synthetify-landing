import React from 'react'
import { Typography, Popover, Grid, CardMedia } from '@material-ui/core'
import { useTranslate } from '@utils/translations'
import links from '@static/constants/links'
import discord from '@static/svg/discord.svg'
import twitter from '@static/svg/twitter.svg'
import telegram from '@static/svg/telegram.svg'
import github from '@static/svg/github.svg'
import useStyles from './style'

export interface ICommunityModal {
  open: boolean
  anchorEl: HTMLButtonElement | HTMLSpanElement | null
  handleClose: () => void
}
export const CommunityModal: React.FC<ICommunityModal> = ({
  open,
  anchorEl,
  handleClose
}) => {
  const classes = useStyles()
  const translate = useTranslate()

  return (
    <Popover
      classes={{ paper: classes.paper }}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}>
      <Grid className={classes.root} container alignContent='space-around' direction='column'>
        <a href={links.socialMedia.discord} style={{ textDecoration: 'none' }}>
          <Grid
            item
            container
            direction='column'
            className={classes.listItem}
            onClick={() => {
              handleClose()
            }}
          >
            <Grid container item direction='row' wrap='nowrap'>
              <Typography className={classes.name}>
                {translate('header.discord')}
              </Typography>
              <CardMedia className={classes.icon} image={discord} onClick={() => window.open(links.socialMedia.discord)} />
            </Grid>
            <Typography className={classes.description}>
              {translate('header.discordDescription')}
            </Typography>
          </Grid>
        </a>

        <a href={links.socialMedia.twitter} style={{ textDecoration: 'none' }}>
          <Grid
            item
            container
            direction='column'
            className={classes.listItem}
            onClick={() => {
              handleClose()
            }}
          >
            <Grid container item direction='row' wrap='nowrap'>
              <Typography className={classes.name}>
                {translate('header.twitter')}
              </Typography>
              <CardMedia className={classes.icon} image={twitter} onClick={() => window.open(links.socialMedia.twitter)} />
            </Grid>
            <Typography className={classes.description}>
              {translate('header.twitterDescription')}
            </Typography>
          </Grid>
        </a>

        <a href={links.socialMedia.telegram} style={{ textDecoration: 'none' }}>
          <Grid
            item
            container
            direction='column'
            className={classes.listItem}
            onClick={() => {
              handleClose()
            }}
          >
            <Grid container item direction='row' wrap='nowrap'>
              <Typography className={classes.name}>
                {translate('header.telegram')}
              </Typography>
              <CardMedia className={classes.icon} image={telegram} onClick={() => window.open(links.socialMedia.telegram)} />
            </Grid>
            <Typography className={classes.description}>
              {translate('header.telegramDescription')}
            </Typography>
          </Grid>
        </a>

        <a href={links.socialMedia.github} style={{ textDecoration: 'none' }}>
          <Grid
            item
            container
            direction='column'
            className={classes.listItem}
            onClick={() => {
              handleClose()
            }}
          >
            <Grid container item direction='row' wrap='nowrap'>
              <Typography className={classes.name}>
                {translate('header.github')}
              </Typography>
              <CardMedia className={classes.icon} style={{ marginTop: 8 }} image={github} onClick={() => window.open(links.socialMedia.github)} />
            </Grid>
            <Typography className={classes.description}>
              {translate('header.githubDescription')}
            </Typography>
          </Grid>
        </a>
      </Grid>
    </Popover>
  )
}
export default CommunityModal

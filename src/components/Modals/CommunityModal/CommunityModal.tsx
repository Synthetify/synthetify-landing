import React from 'react'
import { Typography, Popover, Grid, CardMedia } from '@material-ui/core'
import links from '@static/constants/links'
import discord from '@static/svg/discord.svg'
import twitter from '@static/svg/twitter.svg'
import telegram from '@static/svg/telegram.svg'
import github from '@static/svg/github.svg'
import linkedin from '@static/svg/linkedin-circle.svg'
import useStyles from './style'
import { useTranslation } from 'react-i18next'
import '@static/translations/init18n'
export interface ICommunityModal {
  open: boolean
  anchorEl: HTMLButtonElement | HTMLSpanElement | null
  handleClose: () => void
}
export const CommunityModal: React.FC<ICommunityModal> = ({ open, anchorEl, handleClose }) => {
  const classes = useStyles()
  const { t } = useTranslation()

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
      }}
    >
      <Grid className={classes.root} container alignContent='space-around' direction='column'>
        <a
          href={links.socialMedia.discord}
          style={{ textDecoration: 'none' }}
          target='_blank'
          rel='noopener noreferrer'
        >
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
              <Typography className={classes.name}>{t('header.discord')}</Typography>
              <CardMedia className={classes.icon} image={discord} />
            </Grid>
            <Typography className={classes.description}>
              {t('header.discordDescription')}
            </Typography>
          </Grid>
        </a>

        <a
          href={links.socialMedia.twitter}
          style={{ textDecoration: 'none' }}
          target='_blank'
          rel='noopener noreferrer'
        >
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
              <Typography className={classes.name}>{t('header.twitter')}</Typography>
              <CardMedia className={classes.icon} image={twitter} />
            </Grid>
            <Typography className={classes.description}>
              {t('header.twitterDescription')}
            </Typography>
          </Grid>
        </a>

        <a
          href={links.socialMedia.telegram}
          style={{ textDecoration: 'none' }}
          target='_blank'
          rel='noopener noreferrer'
        >
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
              <Typography className={classes.name}>{t('header.telegram')}</Typography>
              <CardMedia className={classes.icon} image={telegram} />
            </Grid>
            <Typography className={classes.description}>
              {t('header.telegramDescription')}
            </Typography>
          </Grid>
        </a>

        <a
          href={links.socialMedia.github}
          style={{ textDecoration: 'none' }}
          target='_blank'
          rel='noopener noreferrer'
        >
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
              <Typography className={classes.name}>{t('header.github')}</Typography>
              <CardMedia className={classes.icon} image={github} />
            </Grid>
            <Typography className={classes.description}>{t('header.githubDescription')}</Typography>
          </Grid>
        </a>
        <a
          href={links.socialMedia.linkedin}
          style={{ textDecoration: 'none' }}
          target='_blank'
          rel='noopener noreferrer'
        >
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
              <Typography className={classes.name}>{t('header.linkedin')}</Typography>
              <CardMedia className={classes.icon} image={linkedin} />
            </Grid>
            <Typography className={classes.description}>
              {t('header.linkedinDescription')}
            </Typography>
          </Grid>
        </a>
      </Grid>
    </Popover>
  )
}
export default CommunityModal

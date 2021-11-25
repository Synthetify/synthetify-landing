import React from 'react'
import { CardMedia, Grid, Hidden } from '@material-ui/core'
import linkedin from '@static/svg/linkedin-circle.svg'
import github from '@static/svg/github-circle.svg'
import discord from '@static/svg/discord-circle.svg'
import telegram from '@static/svg/telegram-circle.svg'
import twitter from '@static/svg/twitter-circle.svg'
import links from '@static/constants/links'
import useStyles from './style'

export const SocialMediaWidget: React.FC = () => {
  const classes = useStyles()

  return (
    <Hidden smDown implementation='css'>
      <Grid className={classes.socials} container direction='column' wrap='nowrap' alignItems='center'>
        <a
          href={links.socialMedia.github}
          target='_blank'
          rel='noopener noreferrer'
        >
          <CardMedia className={classes.circle} image={github} />
        </a>
        <a
          href={links.socialMedia.linkedin}
          target='_blank'
          rel='noopener noreferrer'
        >
          <CardMedia className={classes.circle} image={linkedin} />
        </a>
        <a
          href={links.socialMedia.twitter}
          target='_blank'
          rel='noopener noreferrer'
        >
          <CardMedia className={classes.circle} image={twitter} />
        </a>
        <a
          href={links.socialMedia.discord}
          target='_blank'
          rel='noopener noreferrer'
        >
          <CardMedia className={classes.circle} image={discord} />
        </a>
        <a
          href={links.socialMedia.telegram}
          target='_blank'
          rel='noopener noreferrer'
        >
          <CardMedia className={classes.circle} image={telegram} />
        </a>
      </Grid>
    </Hidden>
  )
}
export default SocialMediaWidget

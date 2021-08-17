import React from 'react'
import { CardMedia, Grid, Hidden } from '@material-ui/core'
import linkedin from '@static/svg/linkedin-circle.svg'
import github from '@static/svg/github-circle.svg'
import discord from '@static/svg/discord-circle.svg'
import twitter from '@static/svg/twitter-circle.svg'
import links from '@static/constants/links'
import useStyles from './style'

export const SocialMediaWidget: React.FC = () => {
  const classes = useStyles()

  return (
    <Hidden smDown>
      <Grid className={classes.socials} container direction='column' wrap='nowrap' alignItems='center'>
        <CardMedia className={classes.circle} image={github.src} onClick={() => window.open(links.socialMedia.github)} />
        <CardMedia className={classes.circle} image={linkedin.src} onClick={() => window.open(links.socialMedia.linkedin)} />
        <CardMedia className={classes.circle} image={twitter.src} onClick={() => window.open(links.socialMedia.twitter)} />
        <CardMedia className={classes.circle} image={discord.src} onClick={() => window.open(links.socialMedia.discord)} />
      </Grid>
    </Hidden>
  )
}
export default SocialMediaWidget
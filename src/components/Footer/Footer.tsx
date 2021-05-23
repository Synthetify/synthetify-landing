import React from 'react'
import { Grid } from '@material-ui/core'

import { ReactComponent as SynthetifyIcFooter } from '@static/svg/synthetify-ic-footer.svg'
import { ReactComponent as LinkedinIcFooter } from '@static/svg/linkedin-ic-footer.svg'
import { ReactComponent as TwitterIcFooter } from '@static/svg/twitter-ic-footer.svg'
import { ReactComponent as DiscordIcFooter } from '@static/svg/discord-ic-footer.svg'
import { ReactComponent as GithubIcFooter } from '@static/svg/github-ic-footer.svg'
import links from '@static/constants/links'
import useStyles from './style'
import { useHistory } from 'react-router'

export const Footer: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <Grid
      container
      direction='row'
      justify='space-between'
      alignItems='center'
      className={classes.root}>
      <Grid item className={classes.leftSide}>
        <SynthetifyIcFooter
          className={classes.link}
          onClick={() => {
            history.push('/')
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }}
        />
      </Grid>
      <Grid item container direction='row' justify='center' className={classes.rightSide}>
        <Grid item>
          <LinkedinIcFooter
            className={classes.link}
            onClick={() => window.open(links.socialMedia.linkedin)}
          />
        </Grid>
        <Grid item>
          <TwitterIcFooter
            className={classes.link}
            onClick={() => window.open(links.socialMedia.twitter)}
          />
        </Grid>
        <Grid item>
          <DiscordIcFooter
            className={classes.link}
            onClick={() => window.open(links.socialMedia.discord)}
          />
        </Grid>
        <Grid item>
          <GithubIcFooter
            className={classes.link}
            onClick={() => window.open(links.socialMedia.github)}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer

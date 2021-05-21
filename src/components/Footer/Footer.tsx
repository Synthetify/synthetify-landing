import React from 'react'
import { Grid } from '@material-ui/core'

import { ReactComponent as SynthetifyIcFooter } from '@static/svg/synthetify-ic-footer.svg'
import { ReactComponent as LinkedinIcFooter } from '@static/svg/linkedin-ic-footer.svg'
import { ReactComponent as TwitterIcFooter } from '@static/svg/twitter-ic-footer.svg'
import { ReactComponent as DiscordIcFooter } from '@static/svg/discord-ic-footer.svg'
import { ReactComponent as GithubIcFooter } from '@static/svg/github-ic-footer.svg'
import useStyles from './style'

//TODO: use links as config
export const Footer: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      direction='row'
      justify='space-between'
      alignItems='center'
      className={classes.root}>
      <Grid item className={classes.leftSide}>
        <SynthetifyIcFooter className={classes.link} onClick={() => {}} />
      </Grid>
      <Grid item container direction='row' justify='center' className={classes.rightSide}>
        <Grid item>
          <LinkedinIcFooter className={classes.link} onClick={() => {}} />
        </Grid>
        <Grid item>
          <TwitterIcFooter className={classes.link} onClick={() => {}} />
        </Grid>
        <Grid item>
          <DiscordIcFooter className={classes.link} onClick={() => {}} />
        </Grid>
        <Grid item>
          <GithubIcFooter className={classes.link} onClick={() => {}} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer

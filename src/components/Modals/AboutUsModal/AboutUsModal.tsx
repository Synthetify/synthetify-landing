import React from 'react'
import { Typography, Popover, Grid } from '@material-ui/core'
import { useTranslate } from '@utils/translations'
import useStyles from './style'
import links from '@static/constants/links'
import classNames from 'classnames'
import { SoonMark } from '@components/LinkMarks/LinkMarks'

export interface IAboutUsModal {
  open: boolean
  anchorEl: HTMLButtonElement | HTMLSpanElement | null
  handleClose: () => void
  current?: string
}
export const AboutUsModal: React.FC<IAboutUsModal> = ({
  open,
  anchorEl,
  handleClose,
  current
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
        <a href={links.whitepaper} style={{ textDecoration: 'none' }}>
          <Grid
            item
            className={classes.listItem}
            onClick={() => {
              handleClose()
            }}
          >
            <Typography className={classes.name}>
              {translate('header.whitepaper')}
            </Typography>
            <Typography className={classes.description}>
              {translate('header.whitepaperDescription')}
            </Typography>
          </Grid>
        </a>

        <Grid
          item
          className={classNames(classes.listItem, classes.blocked, (current === '/faq' ? classes.current : undefined))}
          onClick={() => {
            handleClose()
          }}
        >
          <Grid className={classes.linkWithMarkWrapper}>
            <Typography className={classes.name}>
              {translate('header.faq')}
            </Typography>
            <SoonMark className={classes.mark} />
          </Grid>
          <Typography className={classes.description}>
            {translate('header.faqDescription')}
          </Typography>
        </Grid>

        <Grid
          item
          className={classNames(classes.listItem, classes.blocked, (current === '/brand' ? classes.current : undefined))}
          onClick={() => {
            handleClose()
          }}
        >
          <Grid className={classes.linkWithMarkWrapper}>
            <Typography className={classes.name}>
              {translate('header.brand')}
            </Typography>
            <SoonMark className={classes.mark} />
          </Grid>
          <Typography className={classes.description}>
            {translate('header.brandDescription')}
          </Typography>
        </Grid>
      </Grid>
    </Popover>
  )
}
export default AboutUsModal
import React from 'react'
import { Typography, Popover, Grid } from '@material-ui/core'
import { useTranslate } from '@utils/translations'
import useStyles from './style'
import links from '@static/constants/links'
import classNames from 'classnames'
import { NewMark } from '@components/LinkMarks/LinkMarks'
import Link from 'next/link'

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
        <Link href='/brand' passHref>
          <a style={{ textDecoration: 'none' }}>
            <Grid
              item
              className={classNames(classes.listItem, (current === '/brand' ? classes.current : undefined))}
              onClick={() => {
                handleClose()
              }}
            >
              <Grid className={classes.linkWithMarkWrapper}>
                <Typography className={classes.name}>
                  {translate('header.brand')}
                </Typography>
                <NewMark className={classes.mark} />
              </Grid>
              <Typography className={classes.description}>
                {translate('header.brandDescription')}
              </Typography>
            </Grid>
          </a>
        </Link>
        <Link href='/FAQ' passHref>
          <a style={{ textDecoration: 'none' }}>
            <Grid
              item
              className={classNames(classes.listItem, (current === '/brand' ? classes.current : undefined))}
              onClick={() => {
                handleClose()
              }}
            >
              <Grid className={classes.linkWithMarkWrapper}>
                <Typography className={classes.name}>
                  {translate('header.faq')}
                </Typography>
                <NewMark className={classes.mark} />
              </Grid>
              <Typography className={classes.description}>
                {translate('header.faqDescription')}
              </Typography>
            </Grid>
          </a>
        </Link>
      </Grid>
    </Popover>
  )
}
export default AboutUsModal

import React from 'react'
import { Typography, Popover, Grid } from '@material-ui/core'
import Link from 'next/link'
import { useTranslate } from '@utils/translations'
import { unblurContent } from '@utils/uiUtils'
import useStyles from './style'
import classNames from 'classnames'
import { SoonMark } from '@components/LinkMarks/LinkMarks'

export interface IMenuModal {
  open: boolean
  anchorEl: HTMLButtonElement | null
  handleClose: () => void
  current?: string
  aboutUsClickHandler: () => void
  communityClickHandler: () => void
}
export const MenuModal: React.FC<IMenuModal> = ({
  open,
  anchorEl,
  handleClose,
  current,
  aboutUsClickHandler,
  communityClickHandler
}) => {
  const classes = useStyles()
  const translate = useTranslate()

  return (
    <Popover
      classes={{ paper: classes.paper }}
      open={open}
      anchorEl={anchorEl}
      onClose={() => {
        handleClose()
        unblurContent()
      }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}>
      <Grid className={classes.root} container alignContent='space-around' direction='column'>
        <Link href='/' passHref>
          <Grid
            item
            className={classes.listItem}
            onClick={() => {
              handleClose()
              unblurContent()
            }}
          >
            <a style={{ textDecoration: 'none' }}>
              <Typography className={current === '/' ? classes.current : classes.name}>
                {translate('header.home')}
              </Typography>
            </a>
          </Grid>
        </Link>

        <Grid
          item
          className={classes.listItem}
          onClick={() => {
            aboutUsClickHandler()
            handleClose()
          }}
        >
          <Typography className={classes.name}>
            {translate('header.aboutUs')}
          </Typography>
        </Grid>

        <Grid
          item
          className={classes.listItem}
          onClick={() => {
            communityClickHandler()
            handleClose()
          }}
        >
          <Typography className={classes.name}>
            {translate('header.community')}
          </Typography>
        </Grid>

        <Grid
          item
          className={classNames(classes.listItem, classes.blocked)}
          onClick={() => {
            handleClose()
            unblurContent()
          }}
        >
          <Grid className={classes.linkWithMarkWrapper}>
            <Typography className={current === '/blog' ? classes.current : classes.name}>
              {translate('header.blog')}
            </Typography>
            <SoonMark className={classes.mark} />
          </Grid>
        </Grid>
      </Grid>
    </Popover>
  )
}
export default MenuModal

import React from 'react'
import { Typography, Popover, Grid } from '@material-ui/core'
import Link from 'next/link'
import { unblurContent } from '@utils/uiUtils'
import useStyles from './style'
import { NewMark } from '@components/LinkMarks/LinkMarks'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import '@static/translations/init18n'

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
  const { t } = useTranslation()

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
      }}
    >
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
              <Typography
                className={classNames(classes.name, current === '/' ? classes.current : undefined)}
              >
                {t('header.home')}
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
          <Typography className={classes.name}>{t('header.aboutUs')}</Typography>
        </Grid>

        <Grid
          item
          className={classes.listItem}
          onClick={() => {
            communityClickHandler()
            handleClose()
          }}
        >
          <Typography className={classes.name}>{t('header.community')}</Typography>
        </Grid>

        <Link href='/blog' passHref>
          <Grid
            item
            className={classes.listItem}
            onClick={() => {
              handleClose()
              unblurContent()
            }}
          >
            <a style={{ textDecoration: 'none' }}>
              <Grid className={classes.linkWithMarkWrapper}>
                <Typography
                  className={classNames(
                    classes.name,
                    current === '/blog' ? classes.current : undefined
                  )}
                >
                  {t('header.blog')}
                </Typography>
                <NewMark className={classes.mark} />
              </Grid>
            </a>
          </Grid>
        </Link>
      </Grid>
    </Popover>
  )
}
export default MenuModal

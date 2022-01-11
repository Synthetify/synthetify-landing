import React from 'react'
import { Typography, Popover, Grid } from '@material-ui/core'
import useStyles from './style'
import links from '@static/constants/links'
import classNames from 'classnames'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import '@static/translations/init18n'

export interface IAboutUsModal {
  open: boolean
  anchorEl: HTMLButtonElement | HTMLSpanElement | null
  handleClose: () => void
  current?: string
}
export const AboutUsModal: React.FC<IAboutUsModal> = ({ open, anchorEl, handleClose, current }) => {
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
        <a href={links.whitepaper} style={{ textDecoration: 'none' }}>
          <Grid
            item
            className={classes.listItem}
            onClick={() => {
              handleClose()
            }}
          >
            <Typography className={classes.name}>{t('header.whitepaper')}</Typography>
            <Typography className={classes.description}>
              {t('header.whitepaperDescription')}
            </Typography>
          </Grid>
        </a>

        <Link href='/faq' passHref>
          <a style={{ textDecoration: 'none' }}>
            <Grid
              item
              className={classNames(
                classes.listItem,
                current === '/faq' ? classes.current : undefined
              )}
              onClick={() => {
                handleClose()
              }}
            >
              <Grid className={classes.linkWithMarkWrapper}>
                <Typography className={classes.name}>{t('header.faq')}</Typography>
              </Grid>
              <Typography className={classes.description}>{t('header.faqDescription')}</Typography>
            </Grid>
          </a>
        </Link>

        <Link href='/brand' passHref>
          <a style={{ textDecoration: 'none' }}>
            <Grid
              item
              className={classNames(
                classes.listItem,
                current === '/brand' ? classes.current : undefined
              )}
              onClick={() => {
                handleClose()
              }}
            >
              <Grid className={classes.linkWithMarkWrapper}>
                <Typography className={classes.name}>{t('header.brand')}</Typography>
              </Grid>
              <Typography className={classes.description}>
                {t('header.brandDescription')}
              </Typography>
            </Grid>
          </a>
        </Link>

        <Link href={links.audit} passHref>
          <a style={{ textDecoration: 'none' }}>
            <Grid
              item
              className={classNames(classes.listItem)}
              onClick={() => {
                handleClose()
              }}
            >
              <Grid className={classes.linkWithMarkWrapper}>
                <Typography className={classes.name}>{t('footer.audit')}</Typography>
              </Grid>
              <Typography className={classes.description}>
                {t('footer.auditDescription')}
              </Typography>
            </Grid>
          </a>
        </Link>
        <Link href={links.docs} passHref>
          <a style={{ textDecoration: 'none' }}>
            <Grid
              item
              className={classes.listItem}
              onClick={() => {
                handleClose()
              }}
            >
              <Typography className={classes.name}>{t('footer.docs')}</Typography>
              <Typography className={classes.description}>{t('footer.docsDescription')}</Typography>
            </Grid>
          </a>
        </Link>
      </Grid>
    </Popover>
  )
}
export default AboutUsModal

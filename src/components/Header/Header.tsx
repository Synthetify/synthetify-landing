import React, { useContext } from 'react'
import { Grid, IconButton, Divider, Hidden, Button, Typography, CardMedia, useMediaQuery } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import MenuModal from '@components/Modals/MenuModal/MenuModal'
import { blurContent, unblurContent } from '@utils/uiUtils'
import snyShort from '@static/svg/brand/synthetify_logo_green.svg'
import snyLong from '@static/svg/brand/synthetify_horizontal_logo_green.svg'
import ChangeLanguageButton from './ChangeLanguageButton/ChangeLanguageButton'
import Link from 'next/link'
import links from '@static/constants/links'
import { LanguageContext, useTranslate } from '@utils/translations'
import { Language } from '@static/translations'
import AboutUsModal from '@components/Modals/AboutUsModal/AboutUsModal'
import { useRouter } from 'next/router'
import CommunityModal from '@components/Modals/CommunityModal/CommunityModal'
import classNames from 'classnames'
import { SoonMark } from '@components/LinkMarks/LinkMarks'
import theme from '@static/theme'
import useStyles from './style'

export const Header: React.FC = () => {
  const classes = useStyles()
  const translate = useTranslate()
  const router = useRouter()
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'))

  const { setLanguage, language } = useContext(LanguageContext)

  const languages: {[key in Language]: { label: string, greeting: string }} = {
    english: {
      label: 'English',
      greeting: 'Hello!'
    }
  }

  const [routesModalOpen, setRoutesModalOpen] = React.useState(false)
  const [routesModalAnchor, setRoutesModalAnchor] = React.useState<HTMLButtonElement | null>(null)

  const [aboutUsModalOpen, setAboutUsModalOpen] = React.useState(false)
  const [aboutUsModalAnchor, setAboutUsModalAnchor] = React.useState<HTMLButtonElement | HTMLSpanElement | null>(null)

  const [communityModalOpen, setCommunityModalOpen] = React.useState(false)
  const [communityModalAnchor, setCommunityModalAnchor] = React.useState<HTMLButtonElement | HTMLSpanElement | null>(null)

  return (
    <>
      <Grid container className={classes.root} wrap='nowrap' alignItems='center' justifyContent="space-between">
        <Grid container item wrap='nowrap' alignItems='center'>

          {
            isSmDown
              ? <CardMedia className={classes.snyShort} image={snyShort} component='img' />
              : <CardMedia className={classes.snyLong} image={snyLong} component='img' />
          }

          <Hidden mdUp implementation='css'>
            <Divider orientation='vertical' className={classes.verticalDivider} style={{ marginRight: 20 }} />
          </Hidden>

          <ChangeLanguageButton
            languages={Object.entries(languages).map(([lang, { label, greeting }]) => ({ language: lang as Language, label, greeting }))}
            onSelect={setLanguage}
            current={languages[language].label}
          />
        </Grid>

        <Grid container item wrap='nowrap' alignItems='center' justifyContent="flex-end">
          <Grid className={classes.hideOnSm}>
            <Link href='/' passHref>
              <a style={{ textDecoration: 'none' }}><Typography className={classes.route}>{translate('header.home')}</Typography></a>
            </Link>
            <Typography
              className={classes.route}
              onClick={(event: React.MouseEvent<HTMLSpanElement>) => {
                setAboutUsModalAnchor(event.currentTarget)
                setAboutUsModalOpen(true)
                blurContent()
              }}
            >
              {translate('header.aboutUs')}
            </Typography>
            <Typography
              className={classes.route}
              onClick={(event: React.MouseEvent<HTMLSpanElement>) => {
                setCommunityModalAnchor(event.currentTarget)
                setCommunityModalOpen(true)
                blurContent()
              }}
            >
              {translate('header.community')}
            </Typography>
            <Grid style={{ marginRight: 22, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Typography className={classNames(classes.route, classes.blocked)} style={{ marginRight: 8 }}>{translate('header.blog')}</Typography>
              <SoonMark className={classes.mark} />
            </Grid>
          </Grid>

          <Button
            className={classes.tradeLink}
            href={links.app.main}
            variant='contained'
          >
            {translate('header.trade')}
          </Button>

          <Grid className={classes.hideOnMdUp}>
            <Divider orientation='vertical' className={classes.verticalDivider} style={{ marginLeft: 20 }} />
            <IconButton
              className={classes.dehazeButton}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                setRoutesModalAnchor(event.currentTarget)
                setRoutesModalOpen(true)
                blurContent()
              }}>
              <Menu className={classes.dehazeIcon} />
            </IconButton>
            <MenuModal
              anchorEl={routesModalAnchor}
              open={routesModalOpen}
              current={router.asPath}
              handleClose={() => {
                setRoutesModalOpen(false)
              }}
              aboutUsClickHandler={() => {
                setAboutUsModalAnchor(routesModalAnchor)
                setAboutUsModalOpen(true)
              }}
              communityClickHandler={() => {
                setCommunityModalAnchor(routesModalAnchor)
                setCommunityModalOpen(true)
              }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Divider className={classes.divider} />

      <AboutUsModal
        anchorEl={aboutUsModalAnchor}
        open={aboutUsModalOpen}
        handleClose={() => {
          setAboutUsModalOpen(false)
          unblurContent()
        }}
        current={router.asPath}
      />

      <CommunityModal
        anchorEl={communityModalAnchor}
        open={communityModalOpen}
        handleClose={() => {
          setCommunityModalOpen(false)
          unblurContent()
        }}
      />
    </>
  )
}
export default Header

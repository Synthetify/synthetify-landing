import React, { useContext } from 'react'
import { Grid, IconButton, Divider, Hidden, Button, Typography, CardMedia } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import MenuModal from '@components/Modals/MenuModal/MenuModal'
import { blurContent, unblurContent } from '@utils/uiUtils'
import snyShort from '@static/svg/brand/synthetify_logo_green.svg'
import snyLong from '@static/svg/brand/synthetify_horizontal_logo_green.svg'
import ChangeLanguageButton from './ChangeLanguageButton/ChangeLanguageButton'
import Link from 'next/link'
import links from '@static/constants/links'
import { LanguageContext } from '@utils/translations'
import { Language } from '@static/translations'
import AboutUsModal from '@components/Modals/AboutUsModal/AboutUsModal'
import { useRouter } from 'next/router'
import CommunityModal from '@components/Modals/CommunityModal/CommunityModal'
import { NewMark } from '@components/LinkMarks/LinkMarks'
import useStyles from './style'
import { useTranslation } from 'react-i18next'
import '@static/translations/init18n'

export const Header: React.FC = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  const router = useRouter()
  const { setLanguage, language } = useContext(LanguageContext)

  const languages: { [key in Language]: { label: string, greeting: string } } = {
    english: {
      label: 'English',
      greeting: 'Hello!'
    },
    polski: {
      label: 'Polski',
      greeting: 'Cześć!'
    }
  }
  const [routesModalOpen, setRoutesModalOpen] = React.useState(false)
  const [routesModalAnchor, setRoutesModalAnchor] = React.useState<HTMLButtonElement | null>(null)

  const [aboutUsModalOpen, setAboutUsModalOpen] = React.useState(false)
  const [aboutUsModalAnchor, setAboutUsModalAnchor] = React.useState<
    HTMLButtonElement | HTMLSpanElement | null
  >(null)

  const [communityModalOpen, setCommunityModalOpen] = React.useState(false)
  const [communityModalAnchor, setCommunityModalAnchor] = React.useState<HTMLButtonElement | HTMLSpanElement | null>(null)

  return (
    <>
      <Grid
        container
        className={classes.root}
        wrap='nowrap'
        alignItems='center'
        justifyContent='space-between'
      >
        <Grid container item wrap='nowrap' alignItems='center'>
          <Link href='/' passHref>
            <a>
              <CardMedia className={classes.snyShort} image={snyShort} component='img' />
              <CardMedia className={classes.snyLong} image={snyLong} component='img' />
            </a>
          </Link>
          <Hidden mdUp implementation='css'>
            <Divider
              orientation='vertical'
              className={classes.verticalDivider}
              style={{ marginRight: 20 }}
            />
          </Hidden>

          <ChangeLanguageButton
            languages={Object.entries(languages).map(([lang, { label, greeting }]) => ({
              language: lang as Language,
              label,
              greeting
            }))}
            onSelect={setLanguage}
            current={languages[language].label}
          />
        </Grid>

        <Grid container item wrap='nowrap' alignItems='center' justifyContent='flex-end'>
          <Grid className={classes.hideOnSm}>
            <Link href='/' passHref>
              <a style={{ textDecoration: 'none' }}>
                <Typography className={classes.route}>{t('header.home')}</Typography>
              </a>
            </Link>
            <Typography
              className={classes.route}
              onClick={(event: React.MouseEvent<HTMLSpanElement>) => {
                setAboutUsModalAnchor(event.currentTarget)
                setAboutUsModalOpen(true)
                blurContent()
              }}
            >
              {t('header.aboutUs')}
            </Typography>
            <Typography
              className={classes.route}
              onClick={(event: React.MouseEvent<HTMLSpanElement>) => {
                setCommunityModalAnchor(event.currentTarget)
                setCommunityModalOpen(true)
                blurContent()
              }}
            >
              {t('header.community')}
            </Typography>
            <Link href='/blog' passHref>
              <a style={{ textDecoration: 'none' }}>
                <Grid className={classes.linkWithMark}>
                  <Typography className={classes.route} style={{ marginRight: 8 }}>
                    {t('header.blog')}
                  </Typography>
                  <NewMark className={classes.mark} />
                </Grid>
              </a>
            </Link>
          </Grid>

          <Button
            className={classes.tradeLink}
            href={links.app.main}
            variant='contained'
            target='_blank'
            rel='noopener noreferrer'
          >
            {t('header.trade')}
          </Button>

          <Grid className={classes.hideOnMdUp}>
            <Divider
              orientation='vertical'
              className={classes.verticalDivider}
              style={{ marginLeft: 20 }}
            />
            <IconButton
              className={classes.dehazeButton}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                setRoutesModalAnchor(event.currentTarget)
                setRoutesModalOpen(true)
                blurContent()
              }}
            >
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

import React from 'react'
import { CardMedia, Divider, Grid, Typography } from '@material-ui/core'
import snyLogo from '@static/svg/brand/synthetify_horizontal_logo_white.svg'
import linkedin from '@static/svg/linkedin-circle.svg'
import github from '@static/svg/github-circle.svg'
import discord from '@static/svg/discord-circle.svg'
import telegram from '@static/svg/telegram-circle.svg'
import twitter from '@static/svg/twitter-circle.svg'
import links from '@static/constants/links'
import Link from 'next/link'
import classNames from 'classnames'
import { NewMark, SoonMark } from '@components/LinkMarks/LinkMarks'
import useStyles from './style'
import { useTranslation } from 'react-i18next'
import '@static/translations/init18n'

interface ILinkProps {
  href: string
  name: string
  description: string
  isNew?: boolean
}

export const InsideLink: React.FC<ILinkProps> = ({ href, name, description, isNew = false }) => {
  const classes = useStyles()

  return (
    <Link href={href} passHref>
      <a className={classes.a}>
        <Grid className={classes.linkWrapper}>
          {isNew ? (
            <Grid className={classes.linkWithMarkWrapper}>
              <Typography className={classes.link}>{name}</Typography>
              <NewMark className={classes.mark} />
            </Grid>
          ) : (
            <Typography className={classes.link}>{name}</Typography>
          )}
          <Typography className={classes.description}>{description}</Typography>
        </Grid>
      </a>
    </Link>
  )
}

export const OutsideLink: React.FC<ILinkProps> = ({ href, name, description, isNew = false }) => {
  const classes = useStyles()

  return (
    <a href={href} className={classes.a} target='_blank' rel='noopener noreferrer'>
      <Grid className={classes.linkWrapper}>
        <Grid className={classes.linkWrapper}>
          {isNew ? (
            <Grid className={classes.linkWithMarkWrapper}>
              <Typography className={classes.link}>{name}</Typography>
              <NewMark className={classes.mark} />
            </Grid>
          ) : (
            <Typography className={classes.link}>{name}</Typography>
          )}
          <Typography className={classes.description}>{description}</Typography>
        </Grid>
      </Grid>
    </a>
  )
}

export const SoonLink: React.FC<Omit<ILinkProps, 'href'>> = ({ name, description }) => {
  const classes = useStyles()

  return (
    <Grid className={classNames(classes.linkWrapper, classes.blockHover)}>
      <Grid className={classes.linkWithMarkWrapper}>
        <Typography className={classNames(classes.link, classes.blocked)}>{name}</Typography>
        <SoonMark className={classes.mark} />
      </Grid>
      <Typography className={classes.description}>{description}</Typography>
    </Grid>
  )
}

export const Footer: React.FC = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <>
      <Divider className={classes.divider} />
      <Grid
        container
        className={classes.logos}
        wrap='nowrap'
        alignItems='center'
        justifyContent='space-between'
      >
        <CardMedia className={classes.snyLogo} image={snyLogo} component='img' />
        <Grid
          className={classes.socials}
          container
          item
          wrap='nowrap'
          alignItems='center'
          justifyContent='flex-end'
        >
          <a href={links.socialMedia.github} target='_blank' rel='noopener noreferrer'>
            <CardMedia className={classes.circle} image={github} />
          </a>
          <a href={links.socialMedia.linkedin} target='_blank' rel='noopener noreferrer'>
            <CardMedia className={classes.circle} image={linkedin} />
          </a>
          <a href={links.socialMedia.twitter} target='_blank' rel='noopener noreferrer'>
            <CardMedia className={classes.circle} image={twitter} />
          </a>
          <a href={links.socialMedia.discord} target='_blank' rel='noopener noreferrer'>
            <CardMedia className={classes.circle} image={discord} />
          </a>
          <a href={links.socialMedia.telegram} target='_blank' rel='noopener noreferrer'>
            <CardMedia className={classes.circle} image={telegram} />
          </a>
        </Grid>
      </Grid>
      <Grid container className={classes.routes} wrap='nowrap' justifyContent='space-between'>
        <Grid
          container
          item
          className={classNames(classes.column, classes.hideOnSm)}
          direction='column'
        >
          <Link href='/' passHref>
            <a className={classes.a}>
              <Typography className={classes.columnHeader} style={{ cursor: 'pointer' }}>
                {t('header.home')}
              </Typography>
            </a>
          </Link>
          <InsideLink
            href={links.tutorial}
            name={t('footer.tutorial')}
            description={t('footer.tutorialDescription')}
          />
          <InsideLink
            href='/blog/'
            name={t('footer.blog')}
            description={t('footer.blogDescription')}
          />
          <InsideLink
            href={links.privacyPolicy}
            name={t('footer.privacyPolicy')}
            description={t('footer.privacyPolicyDescription')}
          />
        </Grid>

        <Grid container item className={classes.column} direction='column'>
          <Typography className={classes.columnHeader}>{t('header.aboutUs')}</Typography>
          <OutsideLink
            href={links.whitepaper}
            name={t('header.whitepaper')}
            description={t('header.whitepaperDescription')}
          />
          <InsideLink href='/faq' name={t('header.faq')} description={t('header.faqDescription')} />
          <InsideLink
            href='/brand'
            name={t('header.brand')}
            description={t('header.brandDescription')}
          />
          <InsideLink
            href={links.roadmap}
            name={t('footer.roadmap')}
            description={t('footer.roadmapDescription')}
          />
          <InsideLink
            href={links.docs}
            name={t('footer.docs')}
            description={t('footer.docsDescription')}
          />
          <OutsideLink
            href={links.audit}
            name={t('footer.audit')}
            description={t('footer.auditDescription')}
          />
        </Grid>

        <Grid container item className={classes.column} direction='column'>
          <Typography className={classes.columnHeader}>{t('header.community')}</Typography>
          <OutsideLink
            href={links.socialMedia.discord}
            name={t('header.discord')}
            description={t('header.discordDescription')}
          />
          <OutsideLink
            href={links.socialMedia.twitter}
            name={t('header.twitter')}
            description={t('header.twitterDescription')}
          />
          <OutsideLink
            href={links.socialMedia.telegram}
            name={t('header.telegram')}
            description={t('header.telegramDescription')}
          />
          <OutsideLink
            href={links.socialMedia.github}
            name={t('header.github')}
            description={t('header.githubDescription')}
          />
          <OutsideLink
            href={links.socialMedia.linkedin}
            name={t('header.linkedin')}
            description={t('header.linkedinDescription')}
          />
        </Grid>
        <Grid
          container
          item
          className={classNames(classes.column, classes.hideOnMd)}
          direction='column'
        >
          <Link href='/blog/' passHref>
            <a className={classes.a}>
              <Grid className={classNames(classes.linkWithMarkWrapper, classes.headerWithMark)}>
                <Typography className={classes.columnHeader}>{t('header.blog')}</Typography>
                <NewMark className={classes.mark} />
              </Grid>
            </a>
          </Link>
          <InsideLink
            href={'https://synthetify.io/blog/new-vaults'}
            name={t('footer.blogTitle1')}
            description={t('footer.blogDescription1')}
          />
          <InsideLink
            href={'https://synthetify.io/blog/how-to-earn-3'}
            name={t('footer.blogTitle2')}
            description={t('footer.blogDescription2')}
          />
          <InsideLink
            href={'https://synthetify.io/blog/how-to-earn-2'}
            name={t('footer.blogTitle3')}
            description={t('footer.blogDescription3')}
          />
          <InsideLink
            href={'https://synthetify.io/blog/long-using-borrowing'}
            name={t('footer.blogTitle4')}
            description={t('footer.blogDescription4')}
          />
        </Grid>

        <Grid container item className={classes.column} direction='column'>
          <Typography className={classes.columnHeader}>{t('header.trade')}</Typography>
          <OutsideLink
            href={links.app.staking}
            name={t('footer.staking')}
            description={t('footer.stakingDescription')}
          />
          <OutsideLink
            href={links.app.stats}
            name={t('footer.stats')}
            description={t('footer.statsDescription')}
          />
          <OutsideLink
            href={links.app.exchange}
            name={t('footer.exchange')}
            description={t('footer.exchangeDescription')}
          />
        </Grid>
      </Grid>

      <Grid
        container
        className={classes.copyrightWrapper}
        wrap='nowrap'
        alignItems='center'
        justifyContent='space-between'
      >
        <Typography className={classes.copyright}>© 2021 Synthetify Labs</Typography>
        <a href={links.privacyPolicy} style={{ textDecoration: 'none' }}>
          <Typography className={classNames(classes.copyright, classes.policy)}>
            {t('footer.privacyPolicy')}
          </Typography>
        </a>
      </Grid>
    </>
  )
}
export default Footer

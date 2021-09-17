import React from 'react'
import { CardMedia, Divider, Grid, Typography } from '@material-ui/core'
import { useTranslate } from '@utils/translations'
import snyLogo from '@static/svg/brand/synthetify_horizontal_logo_white.svg'
import linkedin from '@static/svg/linkedin-circle.svg'
import github from '@static/svg/github-circle.svg'
import discord from '@static/svg/discord-circle.svg'
import twitter from '@static/svg/twitter-circle.svg'
import links from '@static/constants/links'
import Link from 'next/link'
import classNames from 'classnames'
import { NewMark, SoonMark } from '@components/LinkMarks/LinkMarks'
import useStyles from './style'

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

export const OutsideLink: React.FC<ILinkProps> = ({ href, name, description }) => {
  const classes = useStyles()

  return (
    <a href={href} className={classes.a}>
      <Grid className={classes.linkWrapper}>
        <Typography className={classes.link}>{name}</Typography>
        <Typography className={classes.description}>{description}</Typography>
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
  const translate = useTranslate()

  return (
    <>
      <Divider className={classes.divider} />
      <Grid
        container
        className={classes.logos}
        wrap='nowrap'
        alignItems='center'
        justifyContent='space-between'>
        <CardMedia className={classes.snyLogo} image={snyLogo} component='img' />
        <Grid
          className={classes.socials}
          container
          item
          wrap='nowrap'
          alignItems='center'
          justifyContent='flex-end'>
          <CardMedia
            className={classes.circle}
            image={github}
            onClick={() => window.open(links.socialMedia.github)}
          />
          <CardMedia
            className={classes.circle}
            image={linkedin}
            onClick={() => window.open(links.socialMedia.linkedin)}
          />
          <CardMedia
            className={classes.circle}
            image={twitter}
            onClick={() => window.open(links.socialMedia.twitter)}
          />
          <CardMedia
            className={classes.circle}
            image={discord}
            onClick={() => window.open(links.socialMedia.discord)}
          />
        </Grid>
      </Grid>
      <Grid container className={classes.routes} wrap='nowrap' justifyContent='space-between'>
        <Grid
          container
          item
          className={classNames(classes.column, classes.hideOnSm)}
          direction='column'>
          <Link href='/' passHref>
            <a className={classes.a}>
              <Typography className={classes.columnHeader} style={{ cursor: 'pointer' }}>
                {translate('header.home')}
              </Typography>
            </a>
          </Link>
        </Grid>

        <Grid container item className={classes.column} direction='column'>
          <Typography className={classes.columnHeader}>{translate('header.aboutUs')}</Typography>
          <OutsideLink
            href={links.whitepaper}
            name={translate('header.whitepaper')}
            description={translate('header.whitepaperDescription')}
          />
          <InsideLink
            href='/faq'
            name={translate('header.faq')}
            description={translate('header.faqDescription')}
            isNew
          />
          <InsideLink
            href='/brand'
            name={translate('header.brand')}
            description={translate('header.brandDescription')}
            isNew
          />
        </Grid>

        <Grid container item className={classes.column} direction='column'>
          <Typography className={classes.columnHeader}>{translate('header.community')}</Typography>
          <OutsideLink
            href={links.socialMedia.discord}
            name={translate('header.discord')}
            description={translate('header.discordDescription')}
          />
          <OutsideLink
            href={links.socialMedia.twitter}
            name={translate('header.twitter')}
            description={translate('header.twitterDescription')}
          />
          <OutsideLink
            href={links.socialMedia.telegram}
            name={translate('header.telegram')}
            description={translate('header.telegramDescription')}
          />
          <OutsideLink
            href={links.socialMedia.github}
            name={translate('header.github')}
            description={translate('header.githubDescription')}
          />
        </Grid>

        <Grid container item className={classNames(classes.column, classes.hideOnSm)} direction='column'>
          <Link href='/blog' passHref>
            <a className={classes.a}>
              <Grid className={classNames(classes.linkWithMarkWrapper, classes.headerWithMark)}>
                <Typography className={classes.columnHeader}>{translate('header.blog')}</Typography>
                <NewMark className={classes.mark} />
              </Grid>
            </a>
          </Link>
        </Grid>

        <Grid container item className={classes.column} direction='column'>
          <Typography className={classes.columnHeader}>{translate('header.trade')}</Typography>
          <OutsideLink
            href={links.app.staking}
            name={translate('footer.staking')}
            description={translate('footer.stakingDescription')}
          />
          <OutsideLink
            href={links.app.exchange}
            name={translate('footer.exchange')}
            description={translate('footer.exchangeDescription')}
          />
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.copyrightWrapper}
        wrap='nowrap'
        alignItems='center'
        justifyContent='space-between'>
        <Typography className={classes.copyright}>© 2021 Synthetify Labs</Typography>
        <a href={links.privacyPolicy} style={{ textDecoration: 'none' }}>
          <Typography className={classNames(classes.copyright, classes.policy)}>
            {translate('footer.privacyPolicy')}
          </Typography>
        </a>
      </Grid>
    </>
  )
}
export default Footer

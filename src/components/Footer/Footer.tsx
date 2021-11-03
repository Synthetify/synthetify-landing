import React from 'react'
import { CardMedia, Divider, Grid, Typography } from '@material-ui/core'
import { useTranslate } from '@utils/translations'
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
          direction='column'>
          <Link href='/' passHref>
            <a className={classes.a}>
              <Typography className={classes.columnHeader} style={{ cursor: 'pointer' }}>
                {translate('header.home')}
              </Typography>
            </a>
          </Link>
          <InsideLink
            href={links.tutorial}
            name={translate('footer.tutorial')}
            description={translate('footer.tutorialDescription')}
          />
          <InsideLink
            href='/blog/'
            name={translate('footer.blog')}
            description={translate('footer.blogDescription')}
          />
          <InsideLink
            href={links.privacyPolicy}
            name={translate('footer.privacyPolicy')}
            description={translate('footer.privacyPolicyDescription')}
          />
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
          />
          <InsideLink
            href='/brand'
            name={translate('header.brand')}
            description={translate('header.brandDescription')}
          />
          <InsideLink
            href={links.docs}
            name={translate('footer.docs')}
            description={translate('footer.docsDescription')}
          />
          <OutsideLink
            href={links.audit}
            name={translate('footer.audit')}
            description={translate('footer.auditDescription')}
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
          <OutsideLink
            href={links.socialMedia.linkedin}
            name={translate('header.linkedin')}
            description={translate('header.linkedinDescription')}
          />
        </Grid>
        <Grid
          container
          item
          className={classNames(classes.column, classes.hideOnSm)}
          direction='column'>

          <Link href='/blog/' passHref>
            <a className={classes.a}>
              <Grid className={classNames(classes.linkWithMarkWrapper, classes.headerWithMark)}>
                <Typography className={classes.columnHeader}>{translate('header.blog')}</Typography>
                <NewMark className={classes.mark} />
              </Grid>
            </a>
          </Link>
          <InsideLink
            href={'https://www.synthetify.io/blog/tokenomics/'}
            name={translate('footer.blogTitle1')}
            description={translate('footer.blogDescription1')}
          />
          <OutsideLink
            href={'https://www.synthetify.io/blog/bug-bounty/'}
            name={translate('footer.blogTitle2')}
            description={translate('footer.blogDescription2')}
          />
          <InsideLink
            href={'https://www.synthetify.io/blog/saber-pools/'}
            name={translate('footer.blogTitle3')}
            description={translate('footer.blogDescription3')}
          />
          <InsideLink
            href={'https://www.synthetify.io/blog/renBTC/'}
            name={translate('footer.blogTitle4')}
            description={translate('footer.blogDescription4')}
          />

        </Grid>

        <Grid container item className={classes.column} direction='column'>
          <Typography className={classes.columnHeader}>{translate('header.trade')}</Typography>
          <OutsideLink
            href={links.app.staking}
            name={translate('footer.staking')}
            description={translate('footer.stakingDescription')}
          />
          <OutsideLink
            href={links.app.stats}
            name={translate('footer.stats')}
            description={translate('footer.statsDescription')}
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

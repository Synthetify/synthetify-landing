import React from 'react'
import { Button, CardMedia, Divider, Grid, Tooltip, Typography } from '@material-ui/core'
import { useTranslate } from '@utils/translations'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import PageHeader from '@components/PageHeader/PageHeader'
import Link from 'next/link'
import share from '@static/svg/share.svg'
import twitter from '@static/svg/twitter-circle.svg'
import useStyles from './style'

interface IProps{
  singlePost: string
  title: string
  date: string
}
export const SinglePost: React.FC<IProps> = ({ singlePost, title, date }) => {
  const classes = useStyles()
  const translate = useTranslate()

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href.replace('http://', 'https://'))
  }

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/share?text=Look, I've found something interesting on Synthetify's blog:&url=${window.location.href.replace('http://', 'https://')}`, '_blank')
  }

  return (
    <>
      <PageHeader
        title={title}
        description={(new Date(date)).toLocaleDateString('en-US', { dateStyle: 'long' })}
      />
      <Grid container item justifyContent='center' className={classes.mainContainer}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{singlePost}</ReactMarkdown>

        <Divider className={classes.divider} />
        <Typography className={classes.shareText}>{translate('blog.shareOn')}</Typography>
        <Grid container direction='row'>
          <Tooltip classes={{ tooltip: classes.tooltip }} title='Twitter'>
            <CardMedia image={twitter} className={classes.shareIcon} onClick={shareOnTwitter} />
          </Tooltip>
          <Tooltip classes={{ tooltip: classes.tooltip }} title='Copy link'>
            <CardMedia image={share} className={classes.shareIcon} onClick={copyLink} />
          </Tooltip>
        </Grid>

        <Link href='/blog' passHref>
          <a>
            <Button className={classes.backButton}>{translate('blog.backButton')}</Button>
          </a>
        </Link>
      </Grid>
    </>
  )
}

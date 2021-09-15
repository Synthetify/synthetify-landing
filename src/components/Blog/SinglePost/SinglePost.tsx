import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { useTranslate } from '@utils/translations'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import useStyles from './style'
import PageHeader from '@components/PageHeader/PageHeader'
import Link from 'next/link'
interface IProps{
  singlePost: string
  title: string
  date: string
}
export const SinglePost: React.FC<IProps> = ({ singlePost, title, date }) => {
  const classes = useStyles()
  const translate = useTranslate()
  return (
    <>
      <PageHeader
        title={title}
        description={(new Date(date)).toLocaleDateString('en-US', { dateStyle: 'long' })}
      />
      <Grid container item justifyContent='center' className={classes.mainContainer}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{singlePost}</ReactMarkdown>
        <Link href='/blog' passHref>
          <a>
            <Button className={classes.backButton}>{translate('blog.backButton')}</Button>
          </a>
        </Link>
      </Grid>
    </>
  )
}

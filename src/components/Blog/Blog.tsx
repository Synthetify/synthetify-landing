import Article from '@components/Blog/Article/Article'
import { Grid, Typography } from '@material-ui/core'
import { useTranslate } from '@utils/translations'
import { ListedAsset } from '@static/constants/assets'
import React from 'react'
import useStyles from './style'

const data = [
  {
    title: 'title1',
    date: 'wczoraj',
    desc: 'super opis!!!!'
  },
  {
    title: 'title12',
    date: 'wczoraj123',
    desc: 'super opis123123!!!!'
  },
  {
    title: 'title14124',
    date: 'wczorajasdasd',
    desc: 'super opis!!!sadafsaf!'
  },
  {
    title: 'title14124',
    date: 'wczorajasdasd',
    desc: 'super opis!!!sadafsaf!'
  }
]

export const Blog: React.FC = () => {
  const classes = useStyles()
  const translate = useTranslate()

  return (
    <Grid container className={classes.root}>
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Typography className={classes.title}>{translate('blog.title')}</Typography>
        <Typography className={classes.subTitle}>{translate('blog.subtitle')}</Typography>
      </Grid>
      <Grid className={classes.articlesWrapper}>
        {data.map((article) => (
          <Article key="article.title" title={article.title} date={article.date} desc={article.desc}/>
        )
        )}
      </Grid>
    </Grid>
  )
}

export default Blog

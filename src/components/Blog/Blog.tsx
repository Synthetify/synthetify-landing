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
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo sunt obcaecati'
  },
  {
    title: 'title1',
    date: 'wczoraj',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, modi.'
  },
  {
    title: 'title1',
    date: 'wczoraj',
    desc: 'desc3'
  },
  {
    title: 'title1',
    date: 'wczoraj',
    desc: 'desc4'
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
          <div>
            <Article key="article.title" title={article.title} date={article.date} desc={article.desc}/>
            <Typography className={classes.desc}>{article.desc}</Typography>
          </div>
        )
        )}
      </Grid>
    </Grid>
  )
}

export default Blog

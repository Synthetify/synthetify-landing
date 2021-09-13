import Article from '@components/Blog/Article/Article'
import { Grid, Typography } from '@material-ui/core'
import { useTranslate } from '@utils/translations'
import { colors } from '@static/theme'
import React, { useEffect } from 'react'
import useStyles from './style'

export interface DataForArticles{
  title: string
  date: string
  desc?: string
  image: string
  id?: string
}

export const Blog: React.FC<DataForArticles[]> = ({ data }) => {
  useEffect(() => {
    const articlesWrapper = document.getElementById('test')
    if (articlesWrapper?.children.length === 2) {
      articlesWrapper.style.gridTemplateColumns = 'repeat(2,auto)'
    }
    if (articlesWrapper?.children.length === 1) {
      articlesWrapper.style.gridTemplateColumns = 'repeat(1,auto)'
      articlesWrapper.style.justifyContent = 'flex-start'
    }
  }, [])

  const classes = useStyles()
  const translate = useTranslate()
  return (
    <Grid container className={classes.root} direction='column' alignItems='center'>
      <div className={classes.titleWrapper}>
        <Typography className={classes.title}>{translate('blog.title')}</Typography>
        <Typography className={classes.subtitle}>{translate('blog.subtitle')}</Typography>
      </div>
      <Grid className={classes.articlesWrapper} id="test">
        {data.map((article: DataForArticles) => (
          <div key={article.id + 'wrapper'} className={classes.articleAndDesc}>
            <Article key={article.id + 'Article'} title={article.title} date={article.date} image={article.image} desc={article.desc} className={classes.articles}/>
            <Typography key={article.id + 'desc'} className={classes.desc}>{article.desc}</Typography>
          </div>
        )
        )}
      </Grid>
    </Grid>

  )
}

export default Blog

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
  id?:string
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
        {data.map((article:DataForArticles) => (
          <div key={article.id + 'wrapper'} className={classes.articleAndDesc}>
            <Article key={article.id + 'Article'} title={article.title} date={article.date} desc={article.desc} className={classes.articles}/>
            <Typography key={article.id + 'desc'} className={classes.desc}>{article.desc}</Typography>
          </div>
        )
        )}
      </Grid>
      <div className={classes.menuWrapper}>
        <p className={classes.menuButton}>Next</p>
        <p className={classes.menuItem}>1</p>
        <p className={classes.menuItem}>2</p>
        <p className={classes.menuItem}>...</p>
        <p className={classes.menuItem}>7</p>
        <p className={classes.menuItem}>8</p>
        <p className={classes.menuButton} style={{ color: colors.navy.darkGrey }}>Previous</p>
      </div>
    </Grid>

  )
}

export default Blog

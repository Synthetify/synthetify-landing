import Article from '@components/Blog/Article/Article'
import { Grid, Typography } from '@material-ui/core'
import { useTranslate } from '@utils/translations'
import { colors } from '@static/theme'
import React from 'react'
import useStyles from './style'


export interface DataForArticles{
  title: string
  date: string
  desc?: string
}

export const Blog: React.FC = ({ data }) => {
  const classes = useStyles()
  const translate = useTranslate()
  return (
    <Grid container className={classes.root} direction='column' alignItems='center'>
      <div className={classes.titleWrapper}>
        <Typography className={classes.title}>{translate('blog.title')}</Typography>
        <Typography className={classes.subtitle}>{translate('blog.subtitle')}</Typography>
      </div>
      <Grid className={classes.articlesWrapper}>
        {data.map((article) => (
          <div key={article.title + 'wrapper'} className={classes.articleAndDesc}>
            <Article key={article.title + 'Article'} title={article.title} date={article.date} desc={article.desc} className={classes.articles}/>
            <Typography key={article.title + 'desc'} className={classes.desc}>{article.desc}</Typography>
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

import Article from '@components/Blog/Article/Article'
import { Grid, Typography } from '@material-ui/core'
import { useTranslate } from '@utils/translations'
import React, { useEffect } from 'react'
import useStyles from './style'

export interface DataForArticles{
  title: string
  date: string
  desc?: string
  image: string
  id?: string
}
export interface IProps {
  data: DataForArticles[]
}

export const Blog: React.FC<IProps> = ({ data }) => {
  useEffect(() => {
    const articlesWrapper = document.getElementById('arcWrapper')
    if (articlesWrapper?.children.length === 1) {
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
      <Grid className={classes.articlesWrapper} id="arcWrapper">
        {data.map((article: DataForArticles) => (
          <div key={article.id} className={classes.articleAndDesc}>
            <Article title={article.title} date={article.date} image={article.image} desc={article.desc}/>
            <Typography className={classes.desc}>{article.desc}</Typography>
          </div>
        )
        )}
      </Grid>
    </Grid>

  )
}

export default Blog

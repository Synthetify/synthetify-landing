import Article from '@components/Blog/Article/Article'
import PageHeader from '@components/PageHeader/PageHeader'
import { Grid, Typography } from '@material-ui/core'
import { useTranslate } from '@utils/translations'
import React, { useEffect } from 'react'
import useStyles from './style'

export interface DataForArticles {
  title: string
  date: string
  description?: string
  image: string
  slug: string
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
      <PageHeader
        title={translate('blog.title')}
        description={translate('blog.subtitle')}
      />
      <Grid className={classes.articlesWrapper} id="arcWrapper">
        {data.map((article: DataForArticles) => (
          <div key={article.slug} className={classes.articleAndDesc}>
            <Article title={article.title} date={article.date} image={article.image} description={article.description} slug={article.slug} />
            <Typography className={classes.desc}>{article.description}</Typography>
          </div>
        )
        )}
      </Grid>
    </Grid>

  )
}

export default Blog

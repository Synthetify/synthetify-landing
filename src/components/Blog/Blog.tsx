import Article from '@components/Blog/Article/Article'
import PageHeader from '@components/PageHeader/PageHeader'
import { Grid } from '@material-ui/core'
import { useTranslate } from '@utils/translations'
import React, { useEffect, useState } from 'react'
import useStyles from './style'

export interface DataForArticles {
  title: string
  date: string
  description: string
  image: string
  slug: string
}
export interface IProps {
  data: DataForArticles[]
}

export const Blog: React.FC<IProps> = ({ data }) => {
  const [isSafari, setIsSafari] = useState(false)

  useEffect(() => {
    setIsSafari(navigator.userAgent.includes('Safari'))
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
        {data.map((article: DataForArticles, index) => (
          <Article key={index} title={article.title} date={isSafari ?? false ? article.date.replace(/-/g, '/') : article.date} image={article.image} description={article.description} slug={article.slug} />
        )
        )}
      </Grid>
    </Grid>

  )
}

export default Blog
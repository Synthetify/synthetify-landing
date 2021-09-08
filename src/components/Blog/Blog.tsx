import Article from '@components/Blog/Article/Article'
import { Grid, Typography } from '@material-ui/core'
import { useTranslate } from '@utils/translations'
import { ListedAsset } from '@static/constants/assets'
import React from 'react'
import useStyles from './style'

const data = [
  {
    title: 'Donec quis eros ut ante viverra pulvinar. Donec quis eros.',
    date: 'June 20, 2021 ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.'
  },
  {
    title: 'Donec quis eros ut ante viverra pulvinar.',
    date: 'June 20, 2021',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.'
  },
  {
    title: 'Donec quis eros.',
    date: 'June 20, 2021',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.'
  },
  {
    title: 'Donec quis eros ut ante viverra pulvinar. Donec quis eros.',
    date: 'June 20, 2021 ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.'
  },
  {
    title: 'Donec quis eros ut ante viverra pulvinar.',
    date: 'June 20, 2021',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.'
  },
  {
    title: 'Donec quis eros.',
    date: 'June 20, 2021',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.'
  }
]

export const Blog: React.FC = () => {
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
          <div className={classes.articleAndDesc}>
            <Article key="article.title" title={article.title} date={article.date} desc={article.desc} className={classes.articles}/>
            <Typography key="article.title" className={classes.desc}>{article.desc}</Typography>
          </div>
        )
        )}
      </Grid>
      {/* <div className={classes.menuWrapper}>
        <p className={classes.menuButton}>Next</p>
        <p className={classes.menuItem}>1</p>
        <p className={classes.menuItem}>2</p>
        <p className={classes.menuItem}>...</p>
        <p className={classes.menuItem}>7</p>
        <p className={classes.menuItem}>8</p>
        <p className={classes.menuButton}>Previous</p>
      </div> */}
    </Grid>

  )
}

export default Blog

import { CardMedia, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { DataForArticles } from '@components/Blog/Blog'
import Link from 'next/link'
import useStyles from './style'

export const Article: React.FC<DataForArticles> = ({ title, date, image, slug, description }) => {
  const classes = useStyles()

  return (
    <Link href={`/blog/${slug}`} passHref>
      <a style={{ width: '100%', textDecoration: 'none' }}>
        <div className={classes.articleAndDesc}>
          <div className={classes.aspectRatioBox}>
            <Grid container className={classes.root} justifyContent='space-between'>
              <Typography className={classes.date}>
                {new Date(date).toLocaleDateString('en-US', { dateStyle: 'medium' })}
              </Typography>
              <CardMedia className={classes.image} alt=' ' src={image} component='img' />
              <Grid item className={classes.infoBar}>
                <Typography className={classes.title}>{title}</Typography>
              </Grid>
            </Grid>
          </div>
          <Typography className={classes.desc}>{description}</Typography>
        </div>
      </a>
    </Link>
  )
}

export default Article

import { CardMedia, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { DataForArticles } from '@components/Blog/Blog'
import Link from 'next/link'
import useStyles from './style'

export const Article: React.FC<DataForArticles> = ({ title, date, image, slug }) => {
  const classes = useStyles()
  console.log(image)
  return (
    <Link href={`/blog/${slug}`} passHref>
      <a style={{ width: '100%' }}>
        <Grid container className={classes.root} justifyContent='space-between'>
          <CardMedia className={classes.image} alt=" " src={image} component='img'/>
          <Grid item className={classes.infoBar}>
            <Typography className={classes.title}>{title}</Typography>
            <Typography className={classes.date}>{date}</Typography>
          </Grid>
        </Grid>
      </a>
    </Link>
  )
}

export default Article

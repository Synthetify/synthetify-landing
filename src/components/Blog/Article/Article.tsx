import { CardMedia, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { DataForArticles } from '@components/Blog/Blog'
import useStyles from './style'

export const Article: React.FC<DataForArticles> = ({ title, date, image }) => {
  const classes = useStyles()
  console.log(image)
  return (
    <Grid container className={classes.root} justifyContent='space-between'>
      <CardMedia className={classes.image} alt=" " src={image} component='img'/>
      <Grid item className={classes.infoBar}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.date}>{date}</Typography>
      </Grid>
    </Grid>
  )
}

export default Article

import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './style'

interface DataForArticles{
  title: string
  date: string
  desc: string
}

export const Article: React.FC<DataForArticles> = ({title, date, desc}) => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root} justifyContent='space-between'>
      <Grid item className={classes.infoBar}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.date}>{date}</Typography>
      </Grid>
    </Grid>
  )
}

export default Article

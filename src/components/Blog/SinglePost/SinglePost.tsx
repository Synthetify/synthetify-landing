import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { useTranslate } from '@utils/translations'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import useStyles from './style'
const id: number = 1

interface IProps{
  singlePost: string
}
export const SinglePost: React.FC<IProps> = ({ singlePost }) => {
  const classes = useStyles()
  const translate = useTranslate()
  return (
    <Grid key={ id } container item justifyContent='center' className={classes.mainContainer}>
      <ReactMarkdown children={ singlePost } remarkPlugins={[remarkGfm]} />
      <Button className={classes.backButton}>{translate('blog.backButton')}</Button>
    </Grid>
  )
}

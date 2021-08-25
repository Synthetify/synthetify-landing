import React from 'react'
import { Divider, Grid, Typography } from '@material-ui/core'
import classNames from 'classnames'
import useStyles from './style'

export interface IPageHeader {
  title: string
  description: string
  className?: string
}

export const PageHeader: React.FC<IPageHeader> = ({ title, description, className }) => {
  const classes = useStyles()

  return (
    <Grid container direction='column' alignItems='center' className={classNames(classes.root, className)}>
      <Typography className={classes.title}>{title}</Typography>
      <Divider className={classes.divider} />
      <Typography className={classes.description}>{description}</Typography>
    </Grid>
  )
}

export default PageHeader

import React, { ReactNode } from 'react'
import { CardMedia, Grid, Typography } from '@material-ui/core'
import download from '@static/svg/download.svg'
import classNames from 'classnames'
import useStyles from './style'

export interface IPageHeader {
  label: string
  logo: ReactNode
  className?: string
  filePath: string
}

export const LogoTile: React.FC<IPageHeader> = ({ label, logo, className, filePath }) => {
  const classes = useStyles()

  return (
    <Grid className={classNames(classes.logoTile, className)}>
      <Grid container alignItems='center'>
        <Typography className={classes.logoLabel}>{label}</Typography>
        <a href={filePath} download>
          <CardMedia src={download.src} className={classes.downloadIcon} component='img' />
        </a>
      </Grid>
      <Grid container justifyContent='center' alignItems='center' className={classes.imgWrapper}>{logo}</Grid>
    </Grid>
  )
}

export default LogoTile

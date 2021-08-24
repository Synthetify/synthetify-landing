import React, { ReactNode } from 'react'
import { CardMedia, Grid, Typography } from '@material-ui/core'
import download from '@static/svg/download.svg'
import classNames from 'classnames'
import useStyles from './style'

export interface IPageHeader {
  label: string
  logo: ReactNode
  onDownload: () => void
  className?: string
}

export const LogoTile: React.FC<IPageHeader> = ({ label, logo, onDownload, className }) => {
  const classes = useStyles()

  return (
    <Grid className={classNames(classes.logoTile, className)}>
      <Grid container alignItems='center' justifyContent='space-between'>
        <Typography className={classes.logoLabel}>{label}</Typography>
        <CardMedia src={download.src} className={classes.downloadIcon} onClick={onDownload} component='img' />
      </Grid>
      <Grid container justifyContent='center' alignItems='center'>{logo}</Grid>
    </Grid>
  )
}

export default LogoTile

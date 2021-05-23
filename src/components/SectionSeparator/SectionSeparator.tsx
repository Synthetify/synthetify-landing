import React from 'react'
import { Grid } from '@material-ui/core'
import { ReactComponent as SectionSeparatorSvg } from '@static/svg/section-separator.svg'
import useStyles from './style'

export const SectionSeparator: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.root}>
      <SectionSeparatorSvg className={classes.bar} />
    </Grid>
  )
}

export default SectionSeparator

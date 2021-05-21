import React from 'react'
import { ReactComponent as SectionSeparatorSvg } from '@static/svg/section-separator.svg'
import useStyles from './style'

export const SectionSeparator: React.FC = () => {
  const classes = useStyles()

  return <SectionSeparatorSvg className={classes.root} />
}

export default SectionSeparator

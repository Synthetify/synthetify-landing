import classNames from 'classnames'
import React from 'react'
import useStyles from './style'

export const NewMark: React.FC<{ className?: string }> = ({ className }) => {
  const classes = useStyles()

  return (
    <div className={classNames(classes.root, className)}>
      NEW
    </div>
  )
}

export const SoonMark: React.FC<{ className?: string }> = ({ className }) => {
  const classes = useStyles()

  return (
    <div className={classNames(classes.root, className)}>
      SOON
    </div>
  )
}

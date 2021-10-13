import React from 'react'
import classNames from 'classnames'
import useStyles from './style'
import { useTranslate } from '@utils/translations'

export const NewMark: React.FC<{ className?: string }> = ({ className }) => {
  const classes = useStyles()
  const translate = useTranslate()
  return (
    <div className={classNames(classes.root, className)}>
      {translate('header.new')}
    </div>
  )
}

export const SoonMark: React.FC<{ className?: string }> = ({ className }) => {
  const classes = useStyles()
  const translate = useTranslate()
  return (
    <div className={classNames(classes.root, className)}>
      {translate('header.soon')}
    </div>
  )
}

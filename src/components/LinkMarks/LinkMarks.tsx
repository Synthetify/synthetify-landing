import React from 'react'
import classNames from 'classnames'
import useStyles from './style'
import { useTranslation } from 'react-i18next'
import '@static/translations/init18n'

export const NewMark: React.FC<{ className?: string }> = ({ className }) => {
  const classes = useStyles()
  const { t } = useTranslation()
  return <div className={classNames(classes.root, className)}>{t('header.new')}</div>
}

export const SoonMark: React.FC<{ className?: string }> = ({ className }) => {
  const classes = useStyles()
  const { t } = useTranslation()
  return <div className={classNames(classes.root, className)}>{t('header.soon')}</div>
}

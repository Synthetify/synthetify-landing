import PageHeader from '@components/PageHeader/PageHeader'
import { Grid } from '@material-ui/core'
import { Question } from '@components/Questions/Question'
import React from 'react'
import useStyles from './style'
import { useTranslation } from 'react-i18next'
import '@static/translations/init18n'
import dictionary from '@static/translations/english'

const FAQ: React.FC = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  const questions: JSX.Element[] = dictionary['faq.questions'].map((_item, index) => {
    return (
      <Grid key={index} item className={classes.questionBlock}>
        <Question
          key={index}
          question={t(`faq.questions.${index}`)}
          answer={t(`faq.answers.${index}`)}
        />
      </Grid>
    )
  })
  return (
    <>
      <PageHeader title={t('faq.title')} description={t('faq.description')} />
      <Grid container direction='column' className={classes.container}>
        {questions}
      </Grid>
    </>
  )
}
export default FAQ

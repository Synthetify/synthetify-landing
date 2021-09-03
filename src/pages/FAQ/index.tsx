import PageHeader from '@components/PageHeader/PageHeader'
import { useTranslate } from '@utils/translations'
import { Grid } from '@material-ui/core'
import { Question } from '@components/Questions/Question'
import React from 'react'
import useStyles from './style'

const FAQ: React.FC = () => {
  const classes = useStyles()
  const translate = useTranslate()
  return (
    <>
      <PageHeader
        title={translate('faq.title')}
        description={translate('brand.description')}
      />
      <Grid container direction='column' className={classes.container}>
        <Grid item className={classes.questionBlock}>
          <Question question={translate('faq.question1')} answer={translate('faq.answer1')}/>
        </Grid>
        <Grid item className={classes.questionBlock}>
          <Question question={translate('faq.question2')} answer={translate('faq.answer2')}/>
        </Grid>
        <Grid item className={classes.questionBlock}>
          <Question question={translate('faq.question3')} answer={translate('faq.answer3')}/>
        </Grid>
        <Grid item className={classes.questionBlock}>
          <Question question={translate('faq.question4')} answer={translate('faq.answer4')}/>
        </Grid>
        <Grid item className={classes.questionBlock}>
          <Question question={translate('faq.question5')} answer={translate('faq.answer5')}/>
        </Grid>
        <Grid item className={classes.questionBlock}>
          <Question question={translate('faq.question6')} answer={translate('faq.answer6')}/>
        </Grid>
      </Grid>
    </>
  )
}
export default FAQ

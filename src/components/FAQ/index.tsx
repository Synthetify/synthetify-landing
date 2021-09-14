import PageHeader from '@components/PageHeader/PageHeader'
import { useTranslate } from '@utils/translations'
import { Grid } from '@material-ui/core'
import { Question } from '@components/Questions/Question'
import React from 'react'
import useStyles from './style'

const FAQ: React.FC = () => {
  const classes = useStyles()
  const translate = useTranslate()
  const questions: JSX.Element[] = Array.from(translate('faq.questions')).map((item, index) => {
    return (<Grid key={index}
      item className={classes.questionBlock}>
      <Question key={index} question={item} answer={translate('faq.answers', index)} />
    </Grid>)
  })
  return (
    <>
      <PageHeader
        title={translate('faq.title')}
        description={translate('brand.description')}
      />
      <Grid container direction='column' className={classes.container}>
        {questions}
      </Grid>
    </>
  )
}
export default FAQ

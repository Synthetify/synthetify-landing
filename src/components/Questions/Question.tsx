import { Button, Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from './style'

interface Props {
  question: string
  answer: string
}

export const Question = ({ question, answer }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const classes = useStyles()

  const changeHeight = (): void => {
    setIsOpen(!isOpen)
  }

  const isVisible = (text: string): boolean => {
    return typeof text === 'string' ? text.length < 75 : false
  }
  return (
    <>
      <Grid container direction='column' classes={{ container: classes.container }}>
        <Typography className={`${classes.text} ${classes.question}`} component='h2'>{question}</Typography>
        <div className={`${classes.answer} ${isOpen ? classes.open : ''}`}>
          <p className={classes.text}>{answer}</p>
        </div>
        <Button
          className={classes.more}
          classes={{ root: classes.root, label: classes.label }}
          style={{ display: `${isVisible(answer) ? 'none' : 'inline-flex'}` }}
          onClick={() => {
            changeHeight()
          }}>
          {isOpen ? 'Show less.' : 'Show more.'}
          <i className={`${classes.arrow} ${isOpen ? classes.arrowUp : classes.arrowDown}`}></i>
        </Button>
      </Grid>
    </>
  )
}

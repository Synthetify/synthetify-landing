import { Button, Grid, Typography } from '@material-ui/core'
import AnimateHeight from 'react-animate-height'
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
    return text.length < 150
  }
  return (
    <>
      <Grid container direction='column' classes={{ container: classes.container }}>
        <Typography className={`${classes.text} ${classes.question}`} component='h2'>{question}</Typography>
        <AnimateHeight
          className={`${classes.text} ${classes.answer}`}
          height={isOpen || isVisible(answer) ? 'auto' : 30}
          duration={400}
        >
          {answer}
        </AnimateHeight>
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

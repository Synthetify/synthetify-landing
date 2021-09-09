import { Button, Grid, Typography } from '@material-ui/core'
import React, { useState, useRef } from 'react'
import useStyles from './style'

interface Props {
  question: string
  answer: string
}

export const Question = ({ question, answer }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const classes = useStyles()
  const ref = useRef<HTMLDivElement>(0)
  const changeHeight = (): void => {
    setIsOpen(!isOpen)
  }

  const isVisible = (text: string): boolean => {
    const height: number = ref.current.scrollHeight
    return typeof text === 'string' ? height < 85 : false
  }
  return (
    <>
      <Grid container direction='column' classes={{ container: classes.container }}>
        <Typography className={`${classes.text} ${classes.question}`} component='h2'>{question}</Typography>
        <div ref={ref} className={`${classes.answer} ${isOpen ? classes.open : ''}`}>
          <p className={classes.text}>{answer}</p>
        </div>
        <Button
          className={classes.more}
          classes={{ root: classes.root, label: classes.label }}
          style={{ display: `${isVisible(answer) ? 'none' : 'inline-flex'}` }}
          onClick={() => {
            changeHeight()
          }}>
          {console.log(ref.current.scrollHeight)}
          {isOpen ? 'Show less.' : 'Show more.'}
          <i className={`${classes.arrow} ${isOpen ? classes.arrowUp : classes.arrowDown}`}></i>
        </Button>
      </Grid>
    </>
  )
}

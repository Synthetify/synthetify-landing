import { Button, Grid, Typography } from '@material-ui/core'
import React, { useState, useRef, useEffect } from 'react'
import useStyles from './style'

interface Props {
  question: string
  answer: string
}

export const Question = ({ question, answer }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [height, setHeight] = useState(0)
  const classes = useStyles()
  const ref = useRef<HTMLDivElement>(null)
  const changeHeight = (): void => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setHeight(ref.current?.scrollHeight as number)
    console.log(ref.current)
  }, [ref])

  const isVisible = (text: string): boolean => {
    return typeof text === 'string' ? height < 45 : false
  }
  return (
    <>
      <Grid container direction='column' classes={{ container: classes.container }}>
        <Typography className={`${classes.text} ${classes.question}`} component='h2'>{question}</Typography>
        <div ref={ref} className={`${classes.answer} ${isOpen ? classes.open : ''}`}>
          <Typography className={classes.text}>{answer}</Typography>
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

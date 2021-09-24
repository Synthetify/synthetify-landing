import { Button, Grid, Typography, useMediaQuery } from '@material-ui/core'
import theme from '@static/theme'
import React, { useState, useRef } from 'react'
import useStyles from './style'

interface Props {
  question: string
  answer: string
}

export const Question = ({ question, answer }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const classes = useStyles()
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))
  const isXs = useMediaQuery(theme.breakpoints.down('xs'))
  const ref = useRef<HTMLDivElement>(null)
  const changeHeight = (): void => {
    setIsOpen(!isOpen)
  }

  const getMoreThanTwoLinesTextHeight = () => {
    if (isXs) {
      return 45
    }

    if (isSm) {
      return 55
    }

    return 80
  }

  const isVisible = (text: string): boolean => {
    return typeof text === 'string' ? ((ref.current?.scrollHeight as number) > getMoreThanTwoLinesTextHeight()) : false
  }
  return (
    <>
      <Grid container direction='column' classes={{ container: classes.container }}>
        <Typography className={classes.question}>
          {question}
        </Typography>
        <div ref={ref} className={`${classes.answer} ${isOpen || (typeof ref.current?.scrollHeight === 'undefined') ? classes.open : ''}`}>
          <Typography className={classes.text} dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
        <Button
          disableRipple
          className={classes.more}
          classes={{ root: classes.root, label: classes.label }}
          style={{ display: `${isVisible(answer) ? 'inline-flex' : 'none'}` }}
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

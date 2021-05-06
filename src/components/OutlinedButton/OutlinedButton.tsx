import React from 'react'
import useStyles from './style'
import { Button } from '@material-ui/core'

export interface IProps {
  name: string
  buttonColor: 'black' | 'blue'
  onClick: () => void
}

export const OutlinedButton: React.FC<IProps> = ({ name, onClick, buttonColor }) => {
  const classes = useStyles()
  let buttonClass = ''

  if (buttonColor === 'black') {
    buttonClass = classes.blackGradient
  } else if (buttonColor === 'blue') {
    buttonClass = classes.blueGradient
  }

  return (
    <Button className={`${classes.button} ${buttonClass}`} variant='outlined' onClick={onClick}>
      {name}
    </Button>
  )
}
export default OutlinedButton

import React from 'react'
import { Button } from '@material-ui/core'
import useStyles from './style'
export interface IProps {
  name: string
  onClick: () => void
}
export const MainButton: React.FC<IProps> = ({ name, onClick }) => {
  const classes = useStyles()
  return (
    <Button className={classes.button} color='secondary' onClick={onClick}>
      {name}
    </Button>
  )
}
export default MainButton

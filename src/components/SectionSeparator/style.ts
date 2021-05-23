import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 0
  },
  bar: {
    width: '100%',
    background: 'transparent',
    transform: 'translateY(-13px)'
  }
}))

export default useStyles

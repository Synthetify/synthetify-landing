import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  rightSide: {
    paddingTop: 80
  },
  title: {
    color: theme.palette.text.primary,
    fontWeight: 700,
    fontSize: 56,
    [theme.breakpoints.down('md')]: {
      fontSize: 48
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 42
    }
  },
  text: {
    color: theme.palette.text.primary,
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: 32,
    textAlign: 'start',
    [theme.breakpoints.down('md')]: {
      fontSize: 30
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 26
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 21
    }
  },
  button: {
    marginRight: 'auto'
  }
}))

export default useStyles

import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: 'linear-gradient(180deg, #15151F 0%, #030313 100%)',
    paddingRight: '3%',
    paddingLeft: '3%'
  },
  header: {
    paddingTop: 140,
    paddingBottom: 140
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
  description: {
    color: theme.palette.text.primary,
    fontWeight: 300,
    fontSize: 40,
    [theme.breakpoints.down('md')]: {
      fontSize: 34
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 28
    }
  },
  solution: {
    color: '#00F9BB'
  }
}))

export default useStyles

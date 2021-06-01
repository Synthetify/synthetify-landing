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
    paddingBottom: 140,
    [theme.breakpoints.down('md')]: {
      paddingTop: 100,
      paddingBottom: 100
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 60,
      paddingBottom: 60
    }
  },
  title: {
    color: theme.palette.text.primary,
    fontWeight: 700,
    fontSize: 45,
    [theme.breakpoints.down('md')]: {
      fontSize: 38
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 32
    }
  },
  description: {
    color: theme.palette.text.primary,
    fontWeight: 300,
    fontSize: 38,
    [theme.breakpoints.down('md')]: {
      fontSize: 28
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 22
    }
  },
  solution: {
    color: '#00F9BB'
  }
}))

export default useStyles

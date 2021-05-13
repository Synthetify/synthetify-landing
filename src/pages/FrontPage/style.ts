import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 100,
    paddingBottom: 100,
    maxWidth: 1200,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  title: {
    color: theme.palette.text.primary,
    fontWeight: 700,
    fontSize: 70,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: 65
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 45
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 35
    }
  },
  subtitle: {
    color: theme.palette.text.primary,
    fontWeight: 400,
    fontStyle: 'normal',
    size: 32,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: 30
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 24
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 20
    }
  },
  text: {
    color: theme.palette.text.primary
  },
  maxWidth300: {
    maxWidth: 300
  },
  buildOn: {
    color: theme.palette.text.primary,
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: 20,
    textTransform: 'uppercase'
  },
  smDown: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  mdUp: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  buttons: {
    maxWidth: 450,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 360
    }
  }
}))

export default useStyles

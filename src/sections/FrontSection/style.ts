import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 100,
    paddingBottom: 100,
    maxWidth: 1200,
    marginLeft: 'auto',
    marginRight: 'auto',
    '& > *': {
      marginTop: 50,
      marginBottom: 20
    }
  },
  title: {
    color: theme.palette.text.primary,
    maxWidth: 820,
    fontWeight: 700,
    fontSize: 70,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: 65
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 60
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 42
    }
  },
  subtitle: {
    color: theme.palette.text.primary,
    fontWeight: 400,
    maxWidth: 1000,
    fontSize: 32,
    lineHeight: '45px',
    fontStyle: 'normal',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: 30
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 26
    },
    [theme.breakpoints.down('xs')]: {
      lineHeight: '30px',
      fontSize: 21
    }
  },
  text: {
    color: theme.palette.text.primary
  },
  maxWidth300: {
    marginTop: 10,
    maxWidth: 200
  },
  buildOn: {
    color: theme.palette.text.primary,
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: 14,
    textTransform: 'uppercase'
  },
  textContainer: {
    maxWidth: 1180,
    paddingLeft: 30,
    paddingRight: 30,
    [theme.breakpoints.down('md')]: {
      maxWidth: 900
    }
  },
  solanaLogo: {
    width: 80
  },
  buttons: {
    maxWidth: 420,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 360,
      justifyContent: 'space-around'
    }
  }
}))

export default useStyles

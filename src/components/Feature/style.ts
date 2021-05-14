import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: 80,
    '& > *': {
      padding: 10
    }
  },
  textPanel: {
    '& > *': {
      paddingBottom: 20
    }
  },
  title: {
    color: theme.palette.text.primary,
    fontWeight: 300,
    fontSize: 40,
    [theme.breakpoints.down('sm')]: {
      fontSize: 30
    }
  },
  text: {
    color: theme.palette.text.primary,
    fontWeight: 300,
    fontSize: 30,
    maxWidth: 620,
    [theme.breakpoints.down('lg')]: {
      maxWidth: 800
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: 620
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 470,
      fontSize: 22
    }
  },
  icon: {
    [theme.breakpoints.down('sm')]: {
      width: 100
    }
  },
  bold: {
    fontWeight: 700
  }
}))

export default useStyles

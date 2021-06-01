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
    fontSize: 32,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24
    }
  },
  text: {
    color: theme.palette.text.primary,
    fontWeight: 300,
    fontSize: 24,
    maxWidth: 500,
    lineHeight: '45px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 470,
      fontSize: 18,
      lineHeight: '30px'
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

import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 840,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '3%',
    paddingBottom: '3%',
    '& > *': {
      padding: 40
    }
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
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: 26
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 24
    }
  }
}))

export default useStyles

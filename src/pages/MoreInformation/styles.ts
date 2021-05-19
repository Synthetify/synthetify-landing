import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingLeft: '5%',
    paddingRight: '5%',
    [theme.breakpoints.down('sm')]: {
      padding: 5
    }
  },
  rightSide: {
    padding: 30,
    paddingTop: 60,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
      paddingLeft: 5,
      paddingRight: 5
    },
    '& > *': {
      margin: 15
    }
  },
  title: {
    color: theme.palette.text.primary,
    fontWeight: 700,
    fontSize: 56,
    [theme.breakpoints.down('md')]: {
      fontSize: 36
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  },
  text: {
    color: theme.palette.text.primary,
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: 32,
    textAlign: 'start',
    [theme.breakpoints.down('md')]: {
      fontSize: 26
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  imgContainer: {
    textAlign: 'center'
  },
  whitePaperImg: {
    [theme.breakpoints.down('md')]: {
      width: 400
    },
    [theme.breakpoints.down('sm')]: {
      width: '70%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  button: {
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginRight: 'auto',
      marginLeft: 'auto'
    }
  }
}))

export default useStyles

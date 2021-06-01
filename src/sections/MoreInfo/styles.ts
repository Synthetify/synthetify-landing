import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '3%',
    paddingBottom: '3%',
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
    fontSize: 44,
    [theme.breakpoints.down('md')]: {
      fontSize: 28
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  },
  text: {
    color: theme.palette.text.primary,
    fontWeight: 400,
    fontSize: 28,
    fontStyle: 'normal',
    textAlign: 'start',
    lineHeight: '45px',
    [theme.breakpoints.down('md')]: {
      lineHeight: '30px',
      fontSize: 20
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

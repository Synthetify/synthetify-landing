import { makeStyles, Theme } from '@material-ui/core'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: 120,
    backgroundColor: '#14141F'
  },
  leftSide: {
    marginLeft: 50,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 20
    }
  },
  rightSide: {
    maxWidth: 420,
    marginRight: 50,
    [theme.breakpoints.down('sm')]: {
      marginRight: 20
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
      maxWidth: 280
    }
  },
  link: {
    background: 'transparent',
    margin: '0 30px',
    cursor: 'pointer',
    '&:hover path': {
      fill: colors.green.main
    },
    [theme.breakpoints.down('md')]: {
      margin: '0 20px'
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 15px'
    },
    [theme.breakpoints.down('xs')]: {
      margin: '0 10px',
      width: 35
    }
  }
}))

export default useStyles

import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 144,

    [theme.breakpoints.down('md')]: {
      paddingTop: 104
    },

    [theme.breakpoints.down('sm')]: {
      paddingTop: 70
    },

    [theme.breakpoints.down('xs')]: {
      paddingTop: 60
    }
  },
  title: {
    fontSize: 100,
    lineHeight: '100px',
    fontWeight: 700,
    color: colors.white.main,
    textAlign: 'center',

    [theme.breakpoints.down('sm')]: {
      fontSize: 67,
      lineHeight: '67px'
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: 50,
      lineHeight: '50px'
    }
  },
  description: {
    fontSize: 32,
    lineHeight: '40px',
    color: colors.navy.info,

    [theme.breakpoints.down('sm')]: {
      fontSize: 20
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: 15
    }
  },
  divider: {
    width: 622,
    background: colors.navy.veryLightGrey,
    marginTop: 40,
    marginBottom: 20,

    [theme.breakpoints.down('sm')]: {
      width: 344,
      marginTop: 27,
      marginBottom: 6
    },

    [theme.breakpoints.down('xs')]: {
      width: 246,
      marginTop: 22
    }
  }
}))

export default useStyles

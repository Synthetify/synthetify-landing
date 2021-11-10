import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors, typography } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 80,

    [theme.breakpoints.down('lg')]: {
      paddingTop: 60
    },

    [theme.breakpoints.down('md')]: {
      paddingTop: 40
    },

    [theme.breakpoints.down('sm')]: {
      paddingTop: 36
    },

    [theme.breakpoints.down('xs')]: {
      paddingTop: 25
    }
  },
  title: {
    fontSize: 60,
    lineHeight: '65px',
    fontWeight: 800,
    color: colors.white.main,
    textAlign: 'center',

    [theme.breakpoints.down('sm')]: {
      fontSize: 50
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: 35
    }
  },
  description: {
    ...typography.heading3,
    color: colors.navy.info,
    marginTop: 20,

    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
      marginTop: 10
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      marginTop: 0
    }
  }
}))

export default useStyles

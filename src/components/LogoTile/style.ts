import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  logoTile: {
    boxSizing: 'border-box',
    padding: 16,
    borderRadius: 20,
    width: 451,
    height: 284,
    border: `1px solid ${colors.navy.grey}`,
    background: 'rgba(30, 30, 67, 0.3)',
    // backdropFilter: 'blur(4px)',

    [theme.breakpoints.down('md')]: {
      padding: 13,
      width: 402,
      height: 254
    },

    [theme.breakpoints.down('sm')]: {
      padding: 9,
      width: 269,
      height: 169
    }
  },
  // top: {
  //   height: 45,

  //   [theme.breakpoints.down('md')]: {
  //     height: 40
  //   },

  //   [theme.breakpoints.down('sm')]: {
  //     height: 32
  //   }
  // },
  logoLabel: {
    fontSize: 22,
    lineHeight: '40px',
    color: colors.navy.grey,

    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  downloadIcon: {
    width: 45,
    height: 45,
    cursor: 'pointer',

    [theme.breakpoints.down('md')]: {
      width: 40,
      height: 40
    },

    [theme.breakpoints.down('sm')]: {
      width: 32,
      height: 32
    }
  }
}))

export default useStyles
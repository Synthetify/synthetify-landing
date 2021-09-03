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
    backdropFilter: 'blur(4px)',

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
  logoLabel: {
    fontSize: 22,
    lineHeight: '40px',
    color: colors.navy.grey,
    marginLeft: 9,

    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      lineHeight: '32px',
      marginLeft: 6
    }
  },
  downloadIcon: {
    width: 45,
    height: 45,
    position: 'absolute',
    top: 16,
    right: 16,

    [theme.breakpoints.up('lg')]: {
      transition: 'width 300ms, height 300ms, top 300ms, right 300ms',

      '&:hover': {
        width: 50,
        height: 50,
        top: 13.5,
        right: 13.5
      }
    },

    [theme.breakpoints.down('md')]: {
      width: 40,
      height: 40,
      top: 13,
      right: 13
    },

    [theme.breakpoints.down('sm')]: {
      width: 32,
      height: 32,
      top: 9,
      right: 9
    }
  },
  imgWrapper: {
    height: 207,

    [theme.breakpoints.down('md')]: {
      height: 188
    },

    [theme.breakpoints.down('sm')]: {
      height: 119
    }
  }
}))

export default useStyles

import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors, typography } from '@static/theme'

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
    position: 'relative',

    [theme.breakpoints.up('lg')]: {
      transition: 'transform 300ms linear, border-color 300ms linear',

      '&:hover': {
        transform: 'scale(1.05) translateY(-7px)',
        borderColor: colors.navy.lightGrey
      }
    },

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
    ...typography.body2,
    color: colors.navy.grey,
    marginLeft: 9,

    [theme.breakpoints.down('sm')]: {
      ...typography.subtitle2,
      marginLeft: 6
    }
  },
  downloadIcon: {
    width: 45,
    height: 45,
    position: 'absolute',
    top: 16,
    right: 16,
    cursor: 'pointer',

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

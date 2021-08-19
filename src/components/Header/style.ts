import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 95,
    paddingInline: 40,
    backdropFilter: 'blur(9px)',

    [theme.breakpoints.down('sm')]: {
      height: 60,
      paddingInline: 0
    }
  },
  divider: {
    background: colors.navy.darkGrey
  },
  verticalDivider: {
    background: colors.navy.grey,
    height: 36
  },
  tradeLink: {
    backgroundColor: colors.green.actionButton,
    color: colors.navy.background,
    fontSize: 16,
    width: 66,
    height: 41,
    textTransform: 'none',
    fontWeight: 'bold',
    borderRadius: 10,

    [theme.breakpoints.down('sm')]: {
      width: 95,
      height: 36,
      fontSize: 13
    },

    '&:hover': {
      opacity: 0.9,
      backgroundColor: colors.green.actionButton
    }
  },
  route: {
    fontSize: 16,
    marginRight: 22,
    color: '#CFCFCF',
    cursor: 'pointer',

    '&:hover': {
      color: colors.navy.veryLightGrey
    }
  },
  snyLogo: {
    width: 43,
    height: 33,
    marginRight: 16,
    marginLeft: 0,

    [theme.breakpoints.down('sm')]: {
      height: 28,
      width: 33,
      marginLeft: 16
    }
  },
  snyName: {
    width: 162,
    height: 28,
    marginRight: 25
  },
  dehazeButton: {
    borderRadius: 10,
    marginInline: 10,
    padding: 0,

    '&:hover': {
      background: colors.navy.navButton
    }
  },
  dehazeIcon: {
    width: 45,
    height: 38,
    fill: colors.navy.lightGrey
  },
  blocked: {
    opacity: 0.6,
    cursor: 'unset',

    '&:hover': {
      color: '#CFCFCF'
    }
  },
  mark: {
    width: 39,
    height: 19,
    fontSize: 11
  }
}))

export default useStyles

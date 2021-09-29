import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors, typography } from '@static/theme'

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
    ...typography.subtitle1,
    width: 66,
    height: 41,
    textTransform: 'none',
    borderRadius: 10,

    '&:hover': {
      opacity: 1,
      backgroundColor: colors.green.actionButton
    },

    [theme.breakpoints.up('lg')]: {
      transition: 'transform 300ms linear',

      '&:hover': {
        transform: 'scale(1.0976)'
      }
    },

    [theme.breakpoints.down('sm')]: {
      width: 95,
      height: 36
    }
  },
  route: {
    ...typography.subtitle2,
    marginRight: 22,
    color: '#CFCFCF',
    cursor: 'pointer',

    '&:hover': {
      color: colors.navy.veryLightGrey
    }
  },
  snyShort: {
    backgroundSize: '1920px 1482px',
    maxWidth: 33,
    marginInline: 16,

    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  snyLong: {
    backgroundSize: '1920px 276px',
    maxWidth: 222,
    marginRight: 25,

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
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
    paddingBlock: 5,
    paddingInline: 6,
    fontSize: 11
  },
  hideOnMdUp: {
    display: 'none',

    [theme.breakpoints.down('sm')]: {
      display: 'flex'
    }
  },
  hideOnSm: {
    display: 'flex',

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  linkWithMark: {
    marginRight: 22,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    '&:hover $route': {
      color: colors.navy.veryLightGrey
    }
  }
}))

export default useStyles

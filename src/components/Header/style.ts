import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors, typography } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 95,
    paddingInline: 40,
    backdropFilter: 'blur(9px)',

    [theme.breakpoints.down('md')]: {
      paddingInline: 20
    },

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
    marginLeft: 20,

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
      height: 36,
      marginLeft: 0
    }
  },
  route: {
    ...typography.subtitle2,
    marginRight: 37,
    color: '#CFCFCF',
    cursor: 'pointer',

    '&:hover': {
      color: colors.navy.veryLightGrey
    },
    [theme.breakpoints.down('md')]: {
      marginRight: 24
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

    [theme.breakpoints.down('md')]: {
      marginRight: 12
    },

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
    padding: '5px 7px 4px 7px',
    fontSize: 11,
    [theme.breakpoints.down('sm')]: {
      marginTop: 5
    }
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
    marginRight: 26,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    '&:hover $route': {
      color: colors.navy.veryLightGrey
    }
  },
  left: {
    width: 340,
    minWidth: 340,

    [theme.breakpoints.down('sm')]: {
      width: 179,
      minWidth: 179
    }
  }
}))

export default useStyles

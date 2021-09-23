import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors, typography } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  logos: {
    height: 145,
    paddingInline: 45,

    [theme.breakpoints.down('md')]: {
      height: 108,
      paddingInline: 22
    },

    [theme.breakpoints.down('sm')]: {
      height: 60,
      paddingInline: 21
    },

    [theme.breakpoints.down('xs')]: {
      height: 42,
      paddingInline: 14
    }
  },
  routes: {
    marginInline: 'auto',
    width: 1210,
    marginTop: 12,

    [theme.breakpoints.down('md')]: {
      width: 901,
      marginTop: 21
    },

    [theme.breakpoints.down('sm')]: {
      width: 520
    },

    [theme.breakpoints.down('xs')]: {
      width: 350
    }
  },
  copyrightWrapper: {
    paddingInline: 42,
    marginBottom: 24,
    marginTop: 69,

    [theme.breakpoints.down('md')]: {
      paddingInline: 22,
      marginBottom: 20,
      marginTop: 16
    },

    [theme.breakpoints.down('sm')]: {
      paddingInline: 14,
      marginBottom: 14,
      marginTop: 15
    },

    [theme.breakpoints.down('xs')]: {
      marginBottom: 10,
      marginTop: 28
    }
  },
  divider: {
    background: colors.navy.darkGrey
  },
  column: {
    width: 161,

    [theme.breakpoints.down('md')]: {
      width: 141
    },

    [theme.breakpoints.down('sm')]: {
      width: 149
    },

    [theme.breakpoints.down('xs')]: {
      width: 110
    }
  },
  columnHeader: {
    ...typography.heading4,
    color: colors.navy.veryLightGrey,
    marginBottom: 20,

    [theme.breakpoints.down('sm')]: {
      ...typography.subtitle1,
      marginBottom: 15
    },

    [theme.breakpoints.down('xs')]: {
      marginBottom: 10
    }
  },
  link: {
    ...typography.body2,
    color: colors.navy.grey,

    [theme.breakpoints.down('xs')]: {
      ...typography.subtitle2
    }
  },
  a: {
    textDecoration: 'none',
    cursor: 'pointer'
  },
  copyright: {
    ...typography.body2,
    color: colors.white.main,
    opacity: 0.5,

    [theme.breakpoints.down('md')]: {
      ...typography.body4
    },

    [theme.breakpoints.down('sm')]: {
      ...typography.caption3
    }
  },
  policy: {
    '&:hover': {
      opacity: 0.75
    }
  },
  snyLogo: {
    backgroundSize: '1920px 276px',
    maxWidth: 420,

    [theme.breakpoints.down('sm')]: {
      maxWidth: 207
    },

    [theme.breakpoints.down('xs')]: {
      maxWidth: 140
    }
  },
  circle: {
    width: 30,
    height: 30,
    cursor: 'pointer',

    '&:not(:first-child)': {
      marginLeft: 25
    },

    [theme.breakpoints.down('xs')]: {
      '&:not(:first-child)': {
        marginLeft: 16
      }
    }
  },
  socials: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },

    [theme.breakpoints.down('xs')]: {
      minWidth: 168
    }
  },
  blocked: {
    opacity: 0.6
  },
  linkWithMarkWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    '& $link, & $columnHeader': {
      marginRight: 10,

      [theme.breakpoints.down('sm')]: {
        marginRight: 8
      },

      [theme.breakpoints.down('xs')]: {
        marginRight: 6
      }
    }
  },
  headerWithMark: {
    height: 33,
    marginBottom: 20,

    [theme.breakpoints.down('sm')]: {
      height: 24,
      marginBottom: 15
    },

    [theme.breakpoints.down('xs')]: {
      marginBottom: 10
    },

    '& $columnHeader': {
      marginBottom: 0
    }
  },
  mark: {
    [theme.breakpoints.down('md')]: {
      paddingBlock: 4.5,
      paddingInline: 6
    },

    [theme.breakpoints.down('sm')]: {
      paddingBlock: 4,
      paddingInline: 5,
      fontSize: 9,
      lineHeight: '9px'
    },

    [theme.breakpoints.down('xs')]: {
      padding: 3,
      fontSize: 7,
      lineHeight: '7px'
    }
  },
  description: {
    ...typography.caption1,
    color: colors.navy.info,

    [theme.breakpoints.down('sm')]: {
      ...typography.caption3
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: 8
    }
  },
  linkWrapper: {
    marginBottom: 25,

    '&:hover $link': {
      color: colors.navy.lightGrey
    },

    '&:hover $description': {
      color: colors.navy['8584D2']
    },

    [theme.breakpoints.down('md')]: {
      marginBottom: 23
    },

    [theme.breakpoints.down('xs')]: {
      marginBottom: 19
    }
  },
  blockHover: {
    '&:hover $link': {
      color: colors.navy.grey
    },

    '&:hover $description': {
      color: colors.navy.info
    }
  },
  hideOnSm: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}))

export default useStyles

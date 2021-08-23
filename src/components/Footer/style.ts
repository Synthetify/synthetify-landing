import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  logos: {
    height: 145,
    paddingInline: 45,

    [theme.breakpoints.down('md')]: {
      height: 76,
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
    fontSize: 22,
    lineHeight: '40px',
    color: colors.navy.veryLightGrey,
    fontWeight: 'bold',
    marginBottom: 20,

    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      marginBottom: 15
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: 15,
      marginBottom: 10
    }
  },
  link: {
    fontSize: 22,
    lineHeight: '25px',
    cursor: 'pointer',
    color: colors.navy.grey,

    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      lineHeight: '19px'
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: 13,
      lineHeight: '16px'
    }
  },
  a: {
    textDecoration: 'none'
  },
  copyright: {
    fontSize: 16,
    color: colors.white.main,
    opacity: 0.5,

    [theme.breakpoints.down('sm')]: {
      fontSize: 8
    }
  },
  snyLogo: {
    minWidth: 73,
    minHeight: 55,
    marginRight: 27,

    [theme.breakpoints.down('md')]: {
      minHeight: 28,
      minWidth: 37,
      marginRight: 14
    },

    [theme.breakpoints.down('sm')]: {
      minHeight: 18,
      minWidth: 24,
      marginRight: 9
    }
  },
  snyName: {
    width: 273,
    height: 47,

    [theme.breakpoints.down('md')]: {
      height: 23,
      width: 137
    },

    [theme.breakpoints.down('sm')]: {
      height: 15,
      width: 89
    }
  },
  circle: {
    width: 30,
    height: 30,
    cursor: 'pointer',

    '&:not(:first-child)': {
      marginLeft: 25
    }
  },
  logo: {
    [theme.breakpoints.down('xs')]: {
      maxWidth: 136
    }
  },
  socials: {
    [theme.breakpoints.down('xs')]: {
      minWidth: 211
    }
  },
  blocked: {
    opacity: 0.6,
    cursor: 'unset'
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
    height: 40,
    marginBottom: 20,

    [theme.breakpoints.down('sm')]: {
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
    fontSize: 11,
    lineHeight: '16px',
    color: colors.navy.info,

    [theme.breakpoints.down('md')]: {
      fontSize: 10,
      lineHeight: '12px'
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 11,
      lineHeight: '16px'
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: 8,
      lineHeight: '12px'
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
  }
}))

export default useStyles

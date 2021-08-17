import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: 317,
    marginInline: 'auto',
    width: 'fit-content',

    [theme.breakpoints.down('md')]: {
      marginBottom: 174
    },

    [theme.breakpoints.down('sm')]: {
      marginBottom: 107
    },

    [theme.breakpoints.down('xs')]: {
      marginBottom: 75
    }
  },
  title: {
    fontSize: 30,
    lineHeight: '40px',
    color: colors.navy.lightGrey,
    marginInline: 'auto',
    fontWeight: 700,

    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      lineHeight: '30px'
    }
  },
  description: {
    fontSize: 20,
    lineHeight: '25px',
    color: colors.navy.info,
    marginInline: 'auto',
    marginBottom: 50,

    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
      lineHeight: '13px',
      marginBottom: 36
    }
  },
  logos: {
    marginInline: 0,
    width: 914,

    [theme.breakpoints.down('md')]: {
      width: 848
    },

    [theme.breakpoints.down('sm')]: {
      width: 370
    },

    [theme.breakpoints.down('xs')]: {
      width: 267
    }
  },
  logoWrapper: {
    width: 194,
    height: 80,

    '&:not(:nth-last-child(-n+4))': {
      marginBottom: 91
    },

    '&:not(:nth-child(4n))': {
      marginRight: 46
    },

    [theme.breakpoints.down('md')]: {
      '&:not(:nth-last-child(-n+4))': {
        marginBottom: 78
      },

      '&:not(:nth-child(4n))': {
        marginRight: 24
      }
    },

    [theme.breakpoints.down('sm')]: {
      width: 171,
      height: 70,

      '&:not(:nth-child(4n))': {
        marginRight: 'unset'
      },
      '&:not(:nth-child(2n))': {
        marginRight: 28
      },
      '&:not(:nth-last-child(-n+2))': {
        marginBottom: 28
      }
    },

    [theme.breakpoints.down('xs')]: {
      width: 126,
      height: 51,

      '&:not(:nth-child(2n))': {
        marginRight: 15
      },
      '&:not(:nth-last-child(-n+2))': {
        marginBottom: 15
      }
    }
  },
  defi: {
    height: 65,
    width: 175,

    [theme.breakpoints.down('md')]: {
      height: 59.8,
      width: 161
    },

    [theme.breakpoints.down('sm')]: {
      height: 52,
      width: 140
    },

    [theme.breakpoints.down('xs')]: {
      height: 37.89,
      width: 102
    }
  },
  alameda: {
    height: 65,
    width: 194,

    [theme.breakpoints.down('md')]: {
      height: 59.63,
      width: 178
    },

    [theme.breakpoints.down('sm')]: {
      height: 51.6,
      width: 154
    },

    [theme.breakpoints.down('xs')]: {
      height: 37.5,
      width: 112
    }
  },
  cms: {
    height: 59,
    width: 161,

    [theme.breakpoints.down('md')]: {
      height: 54.23,
      width: 148
    },

    [theme.breakpoints.down('sm')]: {
      height: 47,
      width: 128
    },

    [theme.breakpoints.down('xs')]: {
      height: 34,
      width: 93
    }
  },
  buidl: {
    height: 53,
    width: 173,

    [theme.breakpoints.down('md')]: {
      height: 48.71,
      width: 159
    },

    [theme.breakpoints.down('sm')]: {
      height: 42,
      width: 137
    },

    [theme.breakpoints.down('xs')]: {
      height: 31,
      width: 101
    }
  },
  divergence: {
    height: 51,
    width: 177,

    [theme.breakpoints.down('md')]: {
      height: 46.68,
      width: 162
    },

    [theme.breakpoints.down('sm')]: {
      height: 40,
      width: 139
    },

    [theme.breakpoints.down('xs')]: {
      height: 29.61,
      width: 102.75
    }
  },
  genblock: {
    height: 75,
    width: 143,

    [theme.breakpoints.down('md')]: {
      height: 70.8,
      width: 135
    },

    [theme.breakpoints.down('sm')]: {
      height: 60.83,
      width: 116
    },

    [theme.breakpoints.down('xs')]: {
      height: 44.58,
      width: 85
    }
  },
  solLogo: {
    height: 32,
    width: 32,
    marginRight: 12,

    [theme.breakpoints.down('md')]: {
      height: 29.3,
      width: 29.3,
      marginRight: 11
    },

    [theme.breakpoints.down('sm')]: {
      height: 25.27,
      width: 25.27,
      marginRight: 9
    },

    [theme.breakpoints.down('xs')]: {
      height: 18.58,
      width: 18.58,
      marginRight: 7
    }
  },
  solText: {
    height: 17,
    width: 138,

    [theme.breakpoints.down('md')]: {
      height: 15.57,
      width: 126.36
    },

    [theme.breakpoints.down('sm')]: {
      height: 13.5,
      width: 109
    },

    [theme.breakpoints.down('xs')]: {
      height: 10,
      width: 81
    }
  },
  ei: {
    height: 49,
    width: 184,

    [theme.breakpoints.down('md')]: {
      height: 45,
      width: 169
    },

    [theme.breakpoints.down('sm')]: {
      height: 38.69,
      width: 145.31
    },

    [theme.breakpoints.down('xs')]: {
      height: 28.5,
      width: 107
    }
  }
}))

export default useStyles

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
    maxWidth: 175,
    backgroundSize: '175px 67px',

    [theme.breakpoints.down('md')]: {
      maxWidth: 162
    },

    [theme.breakpoints.down('sm')]: {
      maxWidth: 140
    },

    [theme.breakpoints.down('xs')]: {
      maxWidth: 102
    }
  },
  alameda: {
    maxWidth: 194,
    backgroundSize: '194px 65px',

    [theme.breakpoints.down('md')]: {
      maxWidth: 178
    },

    [theme.breakpoints.down('sm')]: {
      maxWidth: 156
    },

    [theme.breakpoints.down('xs')]: {
      maxWidth: 113
    }
  },
  cms: {
    maxWidth: 161,
    backgroundSize: '161px 62px',

    [theme.breakpoints.down('md')]: {
      maxWidth: 149
    },

    [theme.breakpoints.down('sm')]: {
      maxWidth: 130
    },

    [theme.breakpoints.down('xs')]: {
      maxWidth: 95
    }
  },
  buidl: {
    maxWidth: 173,
    backgroundSize: '173px 53px',

    [theme.breakpoints.down('md')]: {
      maxWidth: 160
    },

    [theme.breakpoints.down('sm')]: {
      maxWidth: 138
    },

    [theme.breakpoints.down('xs')]: {
      maxWidth: 102
    }
  },
  divergence: {
    maxWidth: 177,
    backgroundSize: '177px 53px',

    [theme.breakpoints.down('md')]: {
      maxWidth: 165
    },

    [theme.breakpoints.down('sm')]: {
      maxWidth: 141
    },

    [theme.breakpoints.down('xs')]: {
      maxWidth: 105
    }
  },
  genblock: {
    maxWidth: 145,
    backgroundSize: '145px 75px',

    [theme.breakpoints.down('md')]: {
      maxWidth: 136
    },

    [theme.breakpoints.down('sm')]: {
      maxWidth: 118
    },

    [theme.breakpoints.down('xs')]: {
      maxWidth: 87
    }
  },
  solLogo: {
    maxWidth: 32,
    marginRight: 12,
    backgroundSize: '32px 32px',

    [theme.breakpoints.down('md')]: {
      maxWidth: 29.3,
      marginRight: 11
    },

    [theme.breakpoints.down('sm')]: {
      maxWidth: 25.27,
      marginRight: 9
    },

    [theme.breakpoints.down('xs')]: {
      maxWidth: 18.58,
      marginRight: 7
    }
  },
  solText: {
    maxWidth: 138,
    backgroundSize: '138px 17px',

    [theme.breakpoints.down('md')]: {
      maxWidth: 126.36
    },

    [theme.breakpoints.down('sm')]: {
      maxWidth: 109
    },

    [theme.breakpoints.down('xs')]: {
      maxWidth: 80
    }
  },
  ei: {
    maxWidth: 185,
    backgroundSize: '185px 51px',

    [theme.breakpoints.down('md')]: {
      maxWidth: 169
    },

    [theme.breakpoints.down('sm')]: {
      maxWidth: 147
    },

    [theme.breakpoints.down('xs')]: {
      maxWidth: 108
    }
  }
}))

export default useStyles

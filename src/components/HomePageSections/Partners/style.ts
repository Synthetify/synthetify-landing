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
    display: 'grid',
    marginInline: 0,
    width: 914,
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: '80px 80px',
    columnGap: 46,
    rowGap: 91,

    [theme.breakpoints.down('md')]: {
      width: 848,
      columnGap: 24,
      rowGap: 78
    },

    [theme.breakpoints.down('sm')]: {
      width: 370,
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'repeat(4, 70px)',
      columnGap: 28,
      rowGap: 28
    },

    [theme.breakpoints.down('xs')]: {
      width: 267,
      gridTemplateRows: 'repeat(4, 51px)',
      columnGap: 15,
      rowGap: 15
    }
  },
  defi: {
    placeSelf: 'center',
    maxWidth: 175,
    backgroundSize: '1920px 734px',

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
    placeSelf: 'center',
    maxWidth: 194,
    backgroundSize: '1920px 650px',

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
    placeSelf: 'center',
    maxWidth: 161,
    backgroundSize: '1920px 730px',

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
    placeSelf: 'center',
    maxWidth: 173,
    backgroundSize: '1920px 587px',

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
    placeSelf: 'center',
    maxWidth: 177,
    backgroundSize: '1920px 565px',

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
    placeSelf: 'center',
    maxWidth: 145,
    backgroundSize: '1920px 1001.5197px',

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
    placeSelf: 'center',
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

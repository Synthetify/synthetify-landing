import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  BTC: {
    width: 50,
    height: 50,

    [theme.breakpoints.down('md')]: {
      width: 41,
      height: 41
    },

    [theme.breakpoints.down('xs')]: {
      width: 39,
      height: 39
    }
  },
  ETH: {
    width: 52,
    height: 52,

    [theme.breakpoints.down('md')]: {
      width: 42,
      height: 42
    },

    [theme.breakpoints.down('xs')]: {
      width: 39,
      height: 39
    }
  },
  // LTC: {
  //   width: 50,
  //   height: 50,

  //   [theme.breakpoints.down('md')]: {
  //     width: 46,
  //     height: 46
  //   },

  //   [theme.breakpoints.down('xs')]: {
  //     width: 43,
  //     height: 43
  //   }
  // },
  DOT: {
    width: 50,
    height: 50,

    [theme.breakpoints.down('md')]: {
      width: 43,
      height: 43
    },

    [theme.breakpoints.down('xs')]: {
      width: 43,
      height: 43
    }
  },
  SOL: {
    width: 49,
    height: 49,

    [theme.breakpoints.down('md')]: {
      width: 42,
      height: 42
    },

    [theme.breakpoints.down('xs')]: {
      width: 40,
      height: 40
    }
  },
  FTT: {
    width: 55,
    height: 55,

    [theme.breakpoints.down('md')]: {
      width: 41,
      height: 41
    },

    [theme.breakpoints.down('xs')]: {
      width: 40,
      height: 40
    }
  },
  // BNB: {
  //   width: 53,
  //   height: 53,

  //   [theme.breakpoints.down('md')]: {
  //     width: 44,
  //     height: 44
  //   },

  //   [theme.breakpoints.down('xs')]: {
  //     width: 41,
  //     height: 41
  //   }
  // },
  LUNA: {
    width: 50,
    height: 50,

    [theme.breakpoints.down('md')]: {
      width: 44,
      height: 44
    },

    [theme.breakpoints.down('xs')]: {
      width: 41,
      height: 41
    }
  },
  SRM: {
    width: 50,
    height: 50,

    [theme.breakpoints.down('md')]: {
      width: 42,
      height: 42
    },

    [theme.breakpoints.down('xs')]: {
      width: 40,
      height: 40
    }
  },
  USD: {
    width: 50,
    height: 50,

    [theme.breakpoints.down('md')]: {
      width: 42,
      height: 42
    },

    [theme.breakpoints.down('xs')]: {
      width: 40,
      height: 40
    }
  }
}))

export default useStyles

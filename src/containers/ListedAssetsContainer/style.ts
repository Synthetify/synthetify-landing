import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  BTC: {
    width: 50,
    height: 50,

    [theme.breakpoints.down('md')]: {
      width: 41,
      height: 41
    }
  },
  ETH: {
    width: 52,
    height: 52,

    [theme.breakpoints.down('md')]: {
      width: 42,
      height: 42
    }
  },
  DOT: {
    width: 50,
    height: 50,

    [theme.breakpoints.down('md')]: {
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
    }
  },
  FTT: {
    width: 55,
    height: 55,

    [theme.breakpoints.down('md')]: {
      width: 41,
      height: 41
    }
  },
  LUNA: {
    width: 50,
    height: 50,

    [theme.breakpoints.down('md')]: {
      width: 39,
      height: 39
    }
  },
  AVAX: {
    width: 50,
    height: 50,

    [theme.breakpoints.down('md')]: {
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
    }
  }
}))

export default useStyles

import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  BTC: {
    width: 55,
    height: 49,

    [theme.breakpoints.down('md')]: {
      width: 41.5,
      height: 37
    }
  },
  ETH: {
    width: 55,
    height: 55,

    [theme.breakpoints.down('md')]: {
      width: 38,
      height: 38
    }
  },
  LTC: {
    width: 51,
    height: 54,

    [theme.breakpoints.down('md')]: {
      width: 41.5,
      height: 38
    }
  },
  SOL: {
    width: 55,
    height: 47,

    [theme.breakpoints.down('md')]: {
      width: 36,
      height: 38
    }
  },
  FTT: {
    width: 55,
    height: 55,

    [theme.breakpoints.down('md')]: {
      width: 38,
      height: 38
    }
  },
  BNB: {
    width: 60,
    height: 53,

    [theme.breakpoints.down('md')]: {
      width: 44.2,
      height: 39
    }
  },
  SRM: {
    width: 55,
    height: 48,

    [theme.breakpoints.down('md')]: {
      width: 43.5,
      height: 38
    }
  },
  USD: {
    width: 59,
    height: 50,

    [theme.breakpoints.down('md')]: {
      width: 45,
      height: 38
    }
  }
}))

export default useStyles

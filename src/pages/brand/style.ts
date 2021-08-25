import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  gridWrapper: {
    marginInline: 'auto',
    marginBlock: 192,
    maxWidth: 962,

    [theme.breakpoints.down('md')]: {
      marginBlock: 173,
      maxWidth: 829
    },

    [theme.breakpoints.down('sm')]: {
      marginTop: 96,
      marginBottom: 104,
      maxWidth: 554
    },

    [theme.breakpoints.down('xs')]: {
      marginTop: 80,
      marginBottom: 65,
      maxWidth: 269
    }
  },
  simpleLogo: {
    backgroundSize: '176px 136px',
    maxWidth: 176,

    [theme.breakpoints.down('md')]: {
      maxWidth: 157
    },

    [theme.breakpoints.down('sm')]: {
      maxWidth: 105
    }
  },
  verticalLogo: {
    backgroundSize: '196px 196px',
    maxWidth: 196,

    [theme.breakpoints.down('md')]: {
      maxWidth: 175
    },

    [theme.breakpoints.down('sm')]: {
      maxWidth: 117
    }
  },
  horizontalLogo: {
    backgroundSize: '420px 60px',
    maxWidth: 420,

    [theme.breakpoints.down('md')]: {
      maxWidth: 374
    },

    [theme.breakpoints.down('sm')]: {
      maxWidth: 250
    }
  },
  logo: {
    '&:not(:nth-child(2n))': {
      marginRight: 60
    },

    '&:not(:nth-last-child(-n+2))': {
      marginBottom: 60
    },

    [theme.breakpoints.down('md')]: {
      '&:not(:nth-child(2n))': {
        marginRight: 25
      },

      '&:not(:nth-last-child(-n+2))': {
        marginBottom: 25
      }
    },

    [theme.breakpoints.down('sm')]: {
      '&:not(:nth-child(2n))': {
        marginRight: 16
      },

      '&:not(:nth-last-child(-n+2))': {
        marginBottom: 16
      }
    },

    [theme.breakpoints.down('xs')]: {
      '&:not(:nth-child(2n))': {
        marginRight: 0
      },

      '&:not(:last-child)': {
        marginBottom: 16
      }
    }
  }
}))

export default useStyles

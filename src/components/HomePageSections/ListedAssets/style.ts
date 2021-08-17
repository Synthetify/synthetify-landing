import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: 241,
    marginInline: 'auto',
    width: 'fit-content',

    [theme.breakpoints.down('md')]: {
      marginBottom: 157
    },

    [theme.breakpoints.down('sm')]: {
      marginBottom: 110
    },

    [theme.breakpoints.down('xs')]: {
      marginBottom: 77
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
    maxWidth: 562,
    textAlign: 'center',

    [theme.breakpoints.down('md')]: {
      maxWidth: 502
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
      lineHeight: '13px',
      marginBottom: 36,
      maxWidth: 274
    },

    [theme.breakpoints.down('xs')]: {
      maxWidth: 274
    }
  },
  assets: {
    marginInline: 'auto',
    width: 1098,

    [theme.breakpoints.down('md')]: {
      width: 747
    },

    [theme.breakpoints.down('sm')]: {
      width: 365
    },

    [theme.breakpoints.down('xs')]: {
      width: 338
    }
  },
  asset: {
    '&:not(:nth-last-child(-n+4))': {
      marginBottom: 20
    },

    '&:not(:nth-child(4n))': {
      marginRight: 22
    },

    [theme.breakpoints.down('md')]: {
      '&:not(:nth-child(4n))': {
        marginRight: 17
      }
    },

    [theme.breakpoints.down('sm')]: {
      '&:not(:nth-child(4n))': {
        marginRight: 'unset'
      },
      '&:not(:nth-child(2n))': {
        marginRight: 17
      },
      '&:not(:nth-last-child(-n+2))': {
        marginBottom: 17
      }
    },

    [theme.breakpoints.down('xs')]: {
      '&:not(:nth-child(2n))': {
        marginRight: 10
      },
      '&:not(:nth-last-child(-n+2))': {
        marginBottom: 10
      }
    }
  }
}))

export default useStyles

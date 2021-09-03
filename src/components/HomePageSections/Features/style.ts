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

    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
      lineHeight: '13px',
      marginBottom: 36
    }
  },
  left: {
    marginRight: 58,

    [theme.breakpoints.down('lg')]: {
      marginRight: 20
    },

    [theme.breakpoints.down('md')]: {
      marginRight: 24
    },

    [theme.breakpoints.down('sm')]: {
      marginRight: 13
    },

    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
      marginBottom: 20
    }
  },
  icon: {
    minWidth: 72,
    height: 72,
    marginRight: 45,

    [theme.breakpoints.down('lg')]: {
      marginRight: 34
    },

    [theme.breakpoints.down('md')]: {
      minWidth: 60,
      height: 60,
      marginRight: 24
    },

    [theme.breakpoints.down('sm')]: {
      minWidth: 40,
      height: 40,
      marginRight: 10
    },

    [theme.breakpoints.down('xs')]: {
      marginRight: 16
    }
  },
  featureTitle: {
    fontSize: 30,
    lineHeight: '40px',
    fontWeight: 700,
    transition: 'transform 300ms linear',

    [theme.breakpoints.down('sm')]: {
      fontSize: 19
    }
  },
  featureDescription: {
    fontSize: 16,
    lineHeight: '25px',
    color: colors.navy.lightGrey,
    transition: 'transform 300ms linear',

    [theme.breakpoints.down('md')]: {
      fontSize: 12,
      lineHeight: '20px'
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
      lineHeight: '15px'
    }
  },
  feature: {
    width: 607,
    transition: 'transform 300ms linear',

    '&:not(:last-child)': {
      marginBottom: 40
    },

    [theme.breakpoints.up('lg')]: {
      '&:hover': {
        transform: 'scale(1.11) translateX(4%)'
      },

      '$left &:hover': {
        transform: 'scale(1.11)'
      },

      '&:hover $featureDescription, &:hover $featureTitle': {
        transform: 'translateX(-4px)'
      }
    },

    [theme.breakpoints.down('lg')]: {
      width: 570
    },

    [theme.breakpoints.down('md')]: {
      width: 439,

      '&:not(:last-child)': {
        marginBottom: 17
      }
    },

    [theme.breakpoints.down('sm')]: {
      width: 278,

      '&:not(:last-child)': {
        marginBottom: 20
      }
    },

    [theme.breakpoints.down('xs')]: {
      width: 285
    }
  },
  featuresWrapper: {
    flexDirection: 'row',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  }
}))

export default useStyles

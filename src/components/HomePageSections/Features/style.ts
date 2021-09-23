import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors, typography } from '@static/theme'

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
    ...typography.h2,
    color: colors.navy.lightGrey,
    marginInline: 'auto',

    [theme.breakpoints.down('sm')]: {
      ...typography.subtitle1
    }
  },
  description: {
    ...typography.subtitle2,
    color: colors.navy.info,
    marginInline: 'auto',
    marginBottom: 50,

    [theme.breakpoints.down('sm')]: {
      ...typography.caption1,
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
    borderRadius: 10,

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
      marginRight: 10,
      borderRadius: 7
    },

    [theme.breakpoints.down('xs')]: {
      marginRight: 16
    }
  },
  featureTitle: {
    ...typography.h1,
    fontWeight: 700,
    transition: 'transform 300ms linear',

    [theme.breakpoints.down('md')]: {
      ...typography.h2
    },

    [theme.breakpoints.down('sm')]: {
      ...typography.body1
    }
  },
  featureDescription: {
    ...typography.subtitle2,
    color: colors.navy.lightGrey,
    transition: 'transform 300ms linear',

    [theme.breakpoints.down('md')]: {
      ...typography.body4
    },

    [theme.breakpoints.down('sm')]: {
      ...typography.caption3
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

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
    ...typography.heading2,
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
    ...typography.heading1,
    fontWeight: 700,
    transition: 'transform 300ms linear',

    [theme.breakpoints.down('md')]: {
      ...typography.heading2
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
    transition: 'transform 300ms linear',

    [theme.breakpoints.up('lg')]: {
      '&:hover': {
        transform: 'scale(1.11)'
      },

      '&:nth-child(n+4):hover': {
        transform: 'scale(1.11) translateX(4%)'
      },

      '&:hover $featureDescription, &:hover $featureTitle': {
        transform: 'translateX(-4px)'
      }
    }
  },
  featuresWrapper: {
    display: 'grid',
    gridAutoFlow: 'column',
    marginInline: 'auto',
    width: 1272,
    gridTemplateRows: 'auto auto auto',
    columnGap: 58,
    rowGap: 40,

    [theme.breakpoints.down('lg')]: {
      width: 1160,
      columnGap: 20
    },

    [theme.breakpoints.down('md')]: {
      width: 902,
      columnGap: 24,
      rowGap: 17
    },

    [theme.breakpoints.down('sm')]: {
      width: 569,
      columnGap: 13,
      rowGap: 20
    },

    [theme.breakpoints.down('xs')]: {
      gridTemplateRows: 'repeat(6, auto)',
      width: 285
    }
  }
}))

export default useStyles

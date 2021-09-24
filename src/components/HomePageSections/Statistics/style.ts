import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors, typography } from '@static/theme'

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
  wrapper: {
    width: 901,
    height: 194,
    background: 'rgba(7, 9, 24, 0.3)',
    border: '1px solid #4D527A',
    backdropFilter: 'blur(7px)',
    borderRadius: 20,

    [theme.breakpoints.down('lg')]: {
      width: 751,
      height: 161
    },

    [theme.breakpoints.down('sm')]: {
      width: 326,
      height: 80
    }
  },
  field: {
    width: '33%'
  },
  divider: {
    background: 'linear-gradient(0deg, rgba(157, 160, 174, 0) 0%, #4D527A 49.61%, rgba(157, 160, 174, 0) 100%)',
    height: '100%'
  },
  fieldValue: {
    ...typography.heading1,
    color: colors.navy.veryLightGrey,
    marginBlock: 25,
    transition: 'all 300ms',

    [theme.breakpoints.down('lg')]: {
      marginBlock: 15
    },

    [theme.breakpoints.down('sm')]: {
      ...typography.body1,
      marginBlock: 4
    },

    '&:hover': {
      [theme.breakpoints.up('lg')]: {
        textShadow: `0 0 20px ${colors.navy.veryLightGrey}80`,
        fontSize: 49
      }
    }
  },
  fieldName: {
    ...typography.subtitle2,
    color: colors.navy.info,

    [theme.breakpoints.down('sm')]: {
      ...typography.caption3
    }
  },
  devnet: {
    '&::after': {
      content: '"DEVNET"',
      position: 'relative',
      top: -2,
      color: colors.navy.lightGrey,
      backgroundColor: 'rgba(98, 97, 163, 0.7)',
      borderRadius: 4,
      fontSize: 10,
      fontWeight: 600,
      padding: 6,
      marginLeft: 8,
      [theme.breakpoints.down('sm')]: {
        marginLeft: 3,
        padding: 2,
        fontSize: 7,
        top: -1
      }
    }
  }
}))

export default useStyles

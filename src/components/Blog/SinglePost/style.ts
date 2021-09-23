import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors, typography } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    fontFamily: 'Be Vietnam',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    color: colors.white.main,
    marginInline: 'auto',
    marginTop: 80,
    marginBottom: 90,
    maxWidth: 1200,

    [theme.breakpoints.down('lg')]: {
      paddingInline: 67
    },

    [theme.breakpoints.down('sm')]: {
      marginTop: 50,
      marginBottom: 60,
      paddingInline: 32
    },

    [theme.breakpoints.down('xs')]: {
      marginTop: 30,
      marginBottom: 40,
      paddingInline: 26
    },

    '& img': {
      borderRadius: 20,
      maxWidth: 800,
      display: 'block',
      margin: '90px auto',
      width: '100%',

      [theme.breakpoints.down('md')]: {
        marginBlock: 55
      },

      [theme.breakpoints.down('sm')]: {
        marginBlock: 20
      }
    },

    '& p:first-child': {
      maxWidth: '100%'
    },

    '& p:first-child img': {
      marginTop: 0,
      maxWidth: '100%'
    },

    '& p, & ul': {
      ...typography.body2,
      marginBottom: 0,
      textAlign: 'justify',
      width: '100%',
      maxWidth: 800,

      [theme.breakpoints.down('sm')]: {
        ...typography.subtitle2
      }
    },

    '& p strong': {
      fontWeight: 800
    },

    '& a': {
      color: colors.navy.button,
      textDecoration: 'none'
    },

    '& a:hover': {
      color: '#7C76DA'
    }
  },
  backButton: {
    backgroundColor: colors.green.actionButton,
    color: colors.navy.dark,
    ...typography.body1,
    padding: '16px 24px',
    borderRadius: '10px',
    marginTop: '50px',
    textTransform: 'none',
    transition: 'transform 300ms linear, background-color 300ms linear',

    '&:hover': {
      backgroundColor: '#4ADFBA',
      transform: 'scale(1.065)'
    }
  },
  divider: {
    background: colors.navy.darkGrey,
    width: '100%',
    marginTop: 36
  },
  shareText: {
    ...typography.subtitle2,
    color: colors.navy.button,
    maxWidth: '100% !important',
    marginBlock: '12px !important'
  },
  shareIcon: {
    width: 42,
    height: 42,
    cursor: 'pointer',

    '&:not(:last-child)': {
      marginRight: 20
    }
  },
  tooltip: {
    ...typography.body4,
    backgroundColor: colors.navy.tooltip
  }
}))

export default useStyles

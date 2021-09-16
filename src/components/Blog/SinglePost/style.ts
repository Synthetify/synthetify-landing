import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    fontFamily: 'Inter',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    color: colors.white.main,
    marginInline: 'auto',
    marginTop: 108,
    marginBottom: 100,
    maxWidth: 1380,

    [theme.breakpoints.down('lg')]: {
      paddingInline: 67
    },

    [theme.breakpoints.down('sm')]: {
      marginTop: 76,
      marginBottom: 57,
      paddingInline: 32
    },

    [theme.breakpoints.down('xs')]: {
      marginTop: 68,
      marginBottom: 40,
      paddingInline: 26
    },

    '& img': {
      borderRadius: 20,
      maxWidth: 880,
      margin: '120px 0',
      width: '100%',

      [theme.breakpoints.down('md')]: {
        marginBlock: 80
      },

      [theme.breakpoints.down('sm')]: {
        marginBlock: 60
      },

      [theme.breakpoints.down('xs')]: {
        marginBlock: 40
      }
    },

    '& p:first-child img': {
      marginTop: 0
    },

    '& p': {
      fontSize: 22,
      lineHeight: '40px',
      marginBottom: 0,
      textAlign: 'justify',

      [theme.breakpoints.down('sm')]: {
        fontSize: 18,
        lineHeight: '32px'
      },

      [theme.breakpoints.down('xs')]: {
        fontSize: 15,
        lineHeight: '25px'
      }
    },

    '& h3': {
      fontSize: 22,
      lineHeight: '40px',
      margin: 0,
      width: '100%',

      [theme.breakpoints.down('sm')]: {
        fontSize: 18,
        lineHeight: '32px'
      },

      [theme.breakpoints.down('xs')]: {
        fontSize: 15,
        lineHeight: '25px'
      }
    }
  },
  backButton: {
    backgroundColor: colors.green.actionButton,
    color: colors.navy.dark,
    fontSize: '22px',
    lineHeight: '40px',
    fontWeight: 700,
    padding: '8px 16px',
    borderRadius: '10px',
    marginTop: '50px',
    textTransform: 'none',

    '&:hover': {
      backgroundColor: '#4ADFBA'
    }
  }
}))

export default useStyles

import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    borderRadius: 10,
    fontWeight: 700,
    fontSize: '22px',
    textTransform: 'uppercase',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    lineHeight: '26px',
    // transition: '500ms',
    padding: '10px 19px',
    letterSpacing: 0,
    [theme.breakpoints.down('xs')]: {
      padding: '9px 18px',
      fontSize: '14px'
    }
  },
  blackGradient: {
    color: theme.palette.text.primary,
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)',
    border: `1px solid ${theme.palette.text.primary}`,
    '&:hover': {
      color: theme.palette.text.secondary,
      background: theme.palette.text.primary
    }
  },
  blueGradient: {
    color: theme.palette.text.secondary,
    background: 'linear-gradient(225deg, #00F9BB -0.21%, #627EEA 100.21%)',
    border: `1px solid ${theme.palette.primary.contrastText}`,
    '&:hover': {
      color: theme.palette.primary.main,
      background: theme.palette.text.secondary
    }
  }
}))

export default useStyles

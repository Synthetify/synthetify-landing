import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    borderRadius: 10,
    fontWeight: 700,
    fontSize: '22px',
    textTransform: 'uppercase',
    color: theme.palette.text.secondary,
    background: 'linear-gradient(225deg, #00F9BB -0.21%, #627EEA 100.21%)',
    lineHeight: '26px',
    transition: '500ms',
    transitionDuration: '0.4s',
    padding: '10px 19px',
    letterSpacing: 0,
    border: `1px solid ${theme.palette.primary.contrastText}`,
    '&:hover': {
      color: theme.palette.primary.main,
      background: theme.palette.text.secondary
    }
  }
}))

export default useStyles

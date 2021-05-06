import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    borderRadius: 10,
    fontWeight: 700,
    fontSize: '22px',
    textTransform: 'uppercase',
    color: theme.palette.text.primary,
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    lineHeight: '26px',
    transition: '500ms',
    transitionDuration: '0.4s',
    padding: '10px 19px',
    letterSpacing: 0,
    border: `1px solid ${theme.palette.text.primary}`,
    '&:hover': {
      color: theme.palette.text.secondary,
      background: theme.palette.text.primary
    }
  }
}))

export default useStyles

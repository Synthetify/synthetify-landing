import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    borderRadius: 10,
    fontWeight: 'normal',
    color: theme.palette.text.primary,
    fontSize: '22px',
    textTransform: 'uppercase',
    lineHeight: '26px',
    transition: '500ms',
    transitionDuration: '0.4s',
    padding: '10px 19px',
    letterSpacing: 0,
    border: `1px solid ${theme.palette.primary.contrastText}`,
    '&:hover': {
      color: colors.black.background,
      backgroundColor: theme.palette.primary.main
    }
  }
}))

export default useStyles

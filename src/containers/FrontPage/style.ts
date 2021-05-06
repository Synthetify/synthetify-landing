import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%'
  },
  title: {
    color: theme.palette.text.primary,
    fontWeight: 700,
    fontSize: 70,
    textAlign: 'center'
  },
  subtitle: {
    color: theme.palette.text.primary,
    fontWeight: 400,
    size: 32,
    textAlign: 'center'
  },
  text: {
    color: theme.palette.text.primary
  },
  maxWidth300: {
    maxWidth: 300
  },
  buildOn: {
    color: theme.palette.text.primary,
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 24,
    textTransform: 'uppercase'
  }
}))

export default useStyles

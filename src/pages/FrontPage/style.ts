import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 100,
    paddingBottom: 100,
    maxWidth: 1200,
    marginLeft: 'auto',
    marginRight: 'auto'
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
    fontStyle: 'normal',
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
    textTransform: 'uppercase'
  },
  buttons: {
    maxWidth: 450
  }
}))

export default useStyles

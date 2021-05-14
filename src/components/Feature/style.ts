import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    color: theme.palette.text.primary,
    fontWeight: 300,
    fontSize: 40
  },
  text: {
    color: theme.palette.text.primary,
    fontWeight: 300,
    fontSize: 30,
    maxWidth: 620
  },
  bold: {
    fontWeight: 700
  }
}))

export default useStyles

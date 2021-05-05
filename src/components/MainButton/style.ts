import { makeStyles } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles(() => ({
  button: {
    color: colors.white.main,
    textTransform: 'none',
    fontSize: '22px',
    '&:hover': {
      color: colors.green.main
    }
  }
}))

export default useStyles

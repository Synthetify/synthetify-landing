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
  },
  pointer: {
    marginLeft: 8
  },
  pointerOpen: {
    color: colors.green.main,
    marginLeft: 8
  },
  actionItem: {
    color: colors.white.main,
    fontSize: '16px',
    paddingLeft: 28,
    '&:hover': {
      color: colors.green.main
    }
  },
  poper: {
    backgroundColor: colors.black.light,
    minWidth: 180,
    marginTop: 8
  }
}))

export default useStyles

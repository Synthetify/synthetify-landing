import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    background: colors.navy.navButton,
    color: colors.navy.navBar,
    borderRadius: 10,
    textTransform: 'none',
    ...theme.typography.subtitle2,
    height: 41,
    paddingInline: 12,

    [theme.breakpoints.down('sm')]: {
      height: 36
    },

    '&:hover': {
      background: colors.navy.button,
      color: colors.navy.veryLightGrey
    }
  },
  textEllipsis: {
    textTransform: 'none',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    ...theme.typography.subtitle2
  },
  endIcon: {
    marginLeft: 0,
    marginRight: -5
  }
}))

export default useStyles

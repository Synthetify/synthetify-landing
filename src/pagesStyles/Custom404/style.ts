import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors, typography } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    alignItems: 'center',
    //height: '100vh'
  },
  image: {
    width: 185,
    height: 107
  },
  textHeader: {
    fontWeight: 800,
    fontSize: 104,
    lineHeight: '49px',
    marginTop: 69
    // color: colors.navy.veryLightGrey,
  },
  textBody: {
    ...typography.heading2,
    marginTop: 56
    // color: colors.navy.veryLightGrey,
  },
  textWrapper: {
    width: 810
  },
  tradeLink: {
    backgroundColor: colors.green.actionButton,
    color: colors.navy.background,
    ...typography.subtitle1,
    width: 66,
    height: 41,
    textTransform: 'none',
    borderRadius: 10,
    marginTop: 80,
    '&:hover': {
      // opacity: 1,
      backgroundColor: colors.green.actionButton
    }
  }
}))

export default useStyles

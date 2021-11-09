import { makeStyles } from '@material-ui/core/styles'
import { colors, typography } from '@static/theme'

const useStyles = makeStyles(() => ({
  '*:not(#without)': {
    opacity: 0
  },
  root: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    alignItems: 'center',
    zIndex: 100,
    position: 'relative',
    color: '#ffff'
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
  },
  blur: {
    filter: 'blur(4px)',
    zIndex: 99,
    position: 'absolute',
    width: '100vw',
    height: '100%',
    top: '-1px',
    backdropFilter: 'blur(2px)'
  }
}))

export default useStyles

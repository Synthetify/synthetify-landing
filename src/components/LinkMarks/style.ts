import { makeStyles } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: `${colors.navy.info}B4`,
    borderRadius: 4,
    paddingTop: 4.5,
    paddingBottom: 4.5,
    paddingInline: 7,
    color: colors.navy.lightGrey,
    fontSize: 12,
    lineHeight: '12px',
    fontWeight: 600,
    opacity: 0.7
  }
}))

export default useStyles

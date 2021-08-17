import { makeStyles } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: `${colors.navy.info}B4`,
    borderRadius: 4,
    width: 48,
    height: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.navy.lightGrey,
    fontSize: 12,
    lineHeight: '12px'
  }
}))

export default useStyles

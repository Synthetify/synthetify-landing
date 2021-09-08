import { colors } from '@static/theme'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 485,
    height: 284,
    backgroundColor: '#ff00f0',
    borderRadius: 20,
    display: 'flex',
    overflow:'hidden',
    margin: '0px 0px 88px 0px',
  },
  infoBar: {
    alignSelf: 'flex-end',
    width: 485,
    height: 74,
    backgroundColor: '#1D1D49',
    color: colors.navy.veryLightGrey,
    display: 'flex',
    justifyContent: 'space-between',
    alignSelf:'flex-end'
  },
  title: {
    fontSize: 22,
    alignSelf: 'flex-start',
    fontWeight: 600,
    lineHeight: '25px',
    margin: 7,
    width: 375,
    height: 'calc(100% - 7px)'
  },
  date: {
    fontSize: 13,
    alignSelf: 'flex-end',
    fontWeight: 400,
    lineHeight: '15.73px',
    margin: '0 16px 5px 0',
    width: 90
  },
}))

export default useStyles

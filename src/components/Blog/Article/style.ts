import { colors } from '@static/theme'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 485,
    height: 284,
    backgroundColor: '#ff00f0',
    borderRadius: 20,
    display: 'flex',
    overflow: 'hidden',
    marginBottom: 88,
  },
  infoBar: {
    alignSelf: 'flex-end',
    width: 485,
    height: 74,
    backgroundColor: '#1D1D49',
    color: colors.navy.veryLightGrey,
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 22,
    alignSelf: 'flex-start',
    fontWeight: 600,
    lineHeight: '25px',
    margin: 7,
    width:375,
    height:'calc(100% - 7px)'
  },
  date: {
    fontSize: 13,
    alignSelf: 'flex-end',
    fontWeight: 400,
    lineHeight: '15.73px',
    margin: '0 16px 5px 0',
    width: 90
  },
  desc: {
    position: 'absolute',
    top: 300,
    fontSize: 13,
    fontWeight: 400,
    width: 478,
    marginLeft:4.5,
    lineHeight: '15.73px',
    //color: '#F9F9FBC2'
}
}))

export default useStyles

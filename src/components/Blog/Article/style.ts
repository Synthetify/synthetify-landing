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
    justifyContent:'center',
    alignItems:'center',
    [theme.breakpoints.down('sm')]: {
      width: 412
    },
    [theme.breakpoints.down('xs')]: {
      //width: 313,
      width:'100%',
      maxWidth: 400,
      height: 182
    }
  },
  infoBar: {
    alignSelf: 'flex-end',
    width: '100%',
    height: 74,
    backgroundColor: '#1D1D49',
    color: colors.navy.veryLightGrey,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      height: 48,
    }
  },
  title: {
    fontSize: 22,
    alignSelf: 'flex-start',
    fontWeight: 600,
    lineHeight: '25px',
    position: 'relative',
    top: 7,
    left: 7,
    width: 375,
    [theme.breakpoints.down('sm')]: {
      fontSize: 20
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 12
    }
  },
  date: {
    fontSize: 13,
    alignSelf: 'flex-end',
    fontWeight: 400,
    lineHeight: '15.73px',
    marginBottom: 5,
    marginRight: 16,
    [theme.breakpoints.down('xs')]: {
      fontSize: 9,
      lineHeight: '10.89px'
    }
  }
}))

export default useStyles

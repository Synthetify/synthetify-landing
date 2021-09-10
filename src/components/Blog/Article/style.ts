import { colors } from '@static/theme'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 485,
    height:284,
    backgroundColor: '#40BFA0',
    borderRadius: 20,
    display: 'flex',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center', 
    [theme.breakpoints.down('sm')]: {
      //width: 412,
      height: 0,
      paddingTop: '68.93%',
    },
    [theme.breakpoints.down('xs')]: {
      // width: 313,
      width: '100%',
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
    [theme.breakpoints.down('sm')]:{
      paddingTop: '17.96%'
    },
    [theme.breakpoints.down('xs')]: {
      height: 48
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
    color: colors.navy.veryLightGrey,
    // width: 375,
    [theme.breakpoints.down('sm')]: {
      fontSize: 20
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
      lineHeight: '13px'
    }
  },
  date: {
    fontSize: 13,
    alignSelf: 'flex-end',
    textAlign: 'right',
    fontWeight: 400,
    lineHeight: '15.73px',
    marginBottom: 5,
    marginRight: 16,
    width: 206,
    color: colors.navy.veryLightGrey,
    [theme.breakpoints.down('md')]: {
      width: 160,
      textAlign: 'right'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 9,
      lineHeight: '10.89px',
      width: 120
    }
  }
}))

export default useStyles

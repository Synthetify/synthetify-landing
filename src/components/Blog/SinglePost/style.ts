import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    fontFamily: 'Inter',
    background: colors.navy.background,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
    '& p': {
      textAlign: 'center'
    },
    '& hr': {
      borderColor: '#FFFFFF',
      width: '630px',
      margin: '15px',
      [theme.breakpoints.down('sm')]: {
        width: '60%'
      }
    },
    '& h2': {
      textAlign: 'center',
      lineHeight: '120px',
      fontWeight: 700,
      fontSize: 100,
      margin: '30px 0px 30px 0',
      [theme.breakpoints.down('sm')]: {
        fontSize: '67px'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '50px'
      }
    },
    '& h3': {
      textAlign: 'center',
      color: colors.navy.info,
      fontSize: '32px',
      lineHeight: '40px',
      marginBottom: '15px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '20px'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '15px'
      }
    },
    '& p img': {
      borderRadius: '20px',
      width: '880px',
      margin: '30px 0 30px 0',
      [theme.breakpoints.down('md')]: {
        width: '88%'
      }
    },
    '&> blockquote': {
      fontSize: '22px',
      fontWeight: 400,
      width: '1300px',

      margin: 0,
      '& p': {
        marginBottom: 0
      },
      [theme.breakpoints.down('md')]: {
        width: '88%'
      }
    },
    '& h4': {
      margin: 0
    }
  },
  backButton: {
    backgroundColor: colors.green.actionButton,
    color: colors.navy.dark,
    fontSize: '22px',
    lineHeight: '40px',
    fontWeight: 700,
    padding: '8px 16px 8px 16px',
    borderRadius: '10px',
    marginTop: '50px',
    marginBottom: '20px',
    width: 'max-content'
  }
  // title: {
  //   color: '#ffffff',
  //   lineHeight: '120px',
  //   fontWeight: 700,
  //   fontSize: 100
  // },
  // divider: {
  //   backgroundColor: '#FFFFFF',
  //   margin: 15,
  //   width: '500px'
  // },
  // topContainer: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignContent: 'center',
  //   alignItems: 'center'
  // },
  // date: {
  //   color: colors.navy.info,
  //   fontSize: '32px',
  //   lineHeight: '40px',
  //   marginBottom: '15px'
  // },
  // imageContainer: {
  //   padding: '30px 0 30px 0'
  // },
  // image: {
  //   width: '880px',
  //   borderRadius: '20px'
  // },
  // content: {
  //   padding: '30px 0 30px 0',
  //   color: '#FFFFFF',
  //   width: '1300px',
  //   margin: '20px 0 20px 0'
  // },
  // textTitle: {
  //   fontWeight: 'bold'
  // },
  // contentText: {
  //   marginTop: '20px'
  // },
  // dotIcon: {
  //   width: '15px',
  //   color: '#FFFFFF',
  //   marginRight: '8px'
  // },

}))

export default useStyles

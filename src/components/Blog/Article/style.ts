import { colors } from '@static/theme'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: 284,
    backgroundColor: '#40BFA0',
    borderRadius: 20,
    display: 'flex',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      maxHeight: 284,
      width: '100%'
    },
    [theme.breakpoints.down('sm')]: {
      maxHeight: 182,
      width: '100%'
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
    zIndex: 2,
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      maxHeight: 47
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
    [theme.breakpoints.down('md')]: {
      fontSize: 20
    },
    [theme.breakpoints.down('sm')]: {
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
    [theme.breakpoints.down('sm')]: {
      fontSize: 9
    },
    [theme.breakpoints.down('xs')]: {
      lineHeight: '10.89px',
      width: 120
    }
  },
  image: {
    width: '100%',
    height: '100%',
    display: 'flex',
    zIndex: 1,
    position: 'absolute',
    opacity: 0.8,
    transition: 'all .5s ease-out',
    '&:hover': {
      opacity: 1,
      transform: 'scale(1.1)'
    }
  }
}))

export default useStyles

import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    alignItems: 'start'
  },
  text: {
    fontSize: 22,
    color: colors.navy.veryLightGrey,
    lineHeight: '35px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      lineHeight: '29px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 15,
      lineHeight: '25px'
    }
  },
  question: {
    fontWeight: 'bold'
  },
  answer: {
    fontWeight: 400,
    maxHeight: 70,
    transition: 'max-height 1s cubic-bezier(0.16, 1, 0.3, 1)',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      maxHeight: 60
    },
    [theme.breakpoints.down('xs')]: {
      maxHeight: 50
    }
  },
  more: {
    color: colors.navy.button,
    fontSize: 22,
    fontWeight: 'bold',
    padding: 0,
    cursor: 'pointer',
    '&:hover': {
      color: '#7C76DA',
      background: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      lineHeight: '29px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 15,
      lineHeight: '25px'
    }
  },
  root: {
    border: 'none',
    textTransform: 'none'
  },
  label: {
    width: 'auto'
  },
  arrow: {
    border: `solid ${colors.navy.button}`,
    display: 'inline-block',
    padding: '3px',
    marginLeft: '7px',
    borderWidth: '0 3px 3px 0'
  },
  arrowDown: {
    transform: 'rotate(45deg) translateX(0%) translateY(-50%)'
  },
  arrowUp: {
    transform: 'rotate(-135deg) translateX(-50%) translateY(0%)'
  },
  open: {
    transition: 'max-height 1s ease-in',
    maxHeight: '15rem'
  }
}))

export default useStyles

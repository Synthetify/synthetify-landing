import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors, typography } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    alignItems: 'start',
    color: colors.navy.veryLightGrey
  },
  text: {
    ...typography.body2,
    [theme.breakpoints.down('sm')]: {
      ...typography.subtitle2
    },
    [theme.breakpoints.down('xs')]: {
      ...typography.body4
    }
  },
  question: {
    ...typography.body1,
    marginBottom: 4,

    [theme.breakpoints.down('sm')]: {
      ...typography.subtitle1
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: 2,
      ...typography.body3
    }
  },
  answer: {
    maxHeight: 65,
    transition: 'max-height 350ms cubic-bezier(0.16, 1, 0.3, 1)',
    overflow: 'hidden',
    color: colors.navy.lightGrey,

    '& a': {
      color: colors.navy.button,
      textDecoration: 'none'
    },

    '& a:hover': {
      color: '#7C76DA'
    },

    [theme.breakpoints.down('sm')]: {
      maxHeight: 48
    },
    [theme.breakpoints.down('xs')]: {
      maxHeight: 40
    }
  },
  more: {
    color: colors.navy.button,
    ...typography.body1,
    padding: 0,
    cursor: 'pointer',
    '&:hover': {
      color: '#7C76DA',
      background: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      ...typography.subtitle1
    },
    [theme.breakpoints.down('xs')]: {
      ...typography.body3
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
    borderWidth: '0 3px 3px 0',

    [theme.breakpoints.down('sm')]: {
      padding: '2px',
      borderWidth: '0 2px 2px 0',
      marginLeft: 5
    }
  },
  arrowDown: {
    transform: 'rotate(45deg) translateX(0%) translateY(0%)'
  },
  arrowUp: {
    transform: 'rotate(-135deg) translateX(-50%) translateY(0%)'
  },
  open: {
    transition: 'max-height 200ms ease-in',
    maxHeight: '15rem'
  }
}))

export default useStyles

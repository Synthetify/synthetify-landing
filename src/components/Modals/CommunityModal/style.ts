import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors, typography } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    marginTop: 7,
    marginLeft: 10,
    width: 16,
    height: 16,
    opacity: 0.75
  },
  root: {
    background: colors.navy.component,
    borderRadius: 10,
    marginTop: 13,
    padding: 8,

    [theme.breakpoints.down('sm')]: {
      marginTop: 24
    }
  },
  name: {
    ...typography.body2,
    color: colors.navy.grey
  },
  listItem: {
    borderRadius: 8,
    padding: '6px 8px 0 8px',
    minWidth: 158,
    height: 61,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: colors.navy.navButton
    },

    'a:not(:last-child) &': {
      marginBottom: 4
    },

    '&:hover $name': {
      color: colors.navy.veryLightGrey,
      ...typography.body1,
      lineHeight: '34px'
    },

    '&:hover $description': {
      color: '#9D9CEE',
      lineHeight: '10px'
    },

    '&:hover $icon': {
      opacity: 1,
      lineHeight: '18px'
    }
  },
  description: {
    ...typography.body4,
    color: colors.navy.info,
    lineHeight: '14px'
  },
  paper: {
    background: 'transparent',
    boxShadow: 'none'
  }
}))

export default useStyles

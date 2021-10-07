import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors, typography } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    marginTop: 9,
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
    color: colors.navy.grey,
    position: 'relative',
    top: -1
  },
  listItem: {
    borderRadius: 8,
    paddingLeft: 8,
    paddingTop: 1,
    minWidth: 158,
    height: 51,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: colors.navy.navButton
    },

    'a:not(:last-child) &': {
      marginBottom: 4
    },

    '&:hover $name': {
      color: colors.navy.veryLightGrey,
      ...typography.body1
    },

    '&:hover $description': {
      color: '#9D9CEE'
    },

    '&:hover $icon': {
      opacity: 1
    }
  },
  description: {
    ...typography.body4,
    color: colors.navy.info,
    position: 'relative',
    top: -3
  },
  paper: {
    background: 'transparent',
    boxShadow: 'none'
  }
}))

export default useStyles

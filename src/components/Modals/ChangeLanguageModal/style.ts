import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors, typography } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
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
  greeting: {
    ...typography.body4,
    color: colors.navy.info,
    position: 'relative',
    top: -4
  },
  listItem: {
    borderRadius: 8,
    paddingLeft: 8,
    paddingTop: 2,
    minWidth: 120,
    height: 51,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: colors.navy.navButton
    },

    '&:not(:last-child)': {
      marginBottom: 4
    },

    '&:hover $name': {
      color: colors.navy.veryLightGrey,
      ...typography.body1
    },

    '&:hover $greeting': {
      color: '#9D9CEE',
      top: 0
    }
  },
  current: {
    '& $name': {
      color: colors.navy.veryLightGrey,
      ...typography.body1
    },

    '& $greeting': {
      color: '#9D9CEE',
      top: 0
    }
  },
  paper: {
    background: 'transparent',
    boxShadow: 'none'
  }
}))

export default useStyles

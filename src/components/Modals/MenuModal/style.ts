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
    color: colors.navy.grey
  },
  listItem: {
    color: colors.navy.grey,
    borderRadius: 8,
    paddingTop: 4,
    paddingLeft: 12,
    minWidth: 142,
    height: 40,
    cursor: 'pointer',

    '&:not(:last-child)': {
      marginBottom: 4
    },

    '&:hover': {
      backgroundColor: colors.navy.navButton
    },

    '&:hover $name': {
      color: colors.navy.veryLightGrey,
      ...typography.body1,
      lineHeight: '32px'
    }
  },
  current: {
    ...typography.body1,
    color: colors.navy.veryLightGrey,
    lineHeight: '32px'
  },
  paper: {
    background: 'transparent',
    boxShadow: 'none'
  },
  blocked: {
    cursor: 'unset',

    '& $name': {
      opacity: 0.6
    },

    '&:hover $name': {
      color: colors.navy.grey,
      fontWeight: 'unset',
      opacity: 0.6
    }
  },
  linkWithMarkWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    '& $name': {
      marginRight: 8
    }
  },
  mark: {
    paddingBlock: 5,
    paddingInline: 6,
    fontSize: 11
  }
}))

export default useStyles

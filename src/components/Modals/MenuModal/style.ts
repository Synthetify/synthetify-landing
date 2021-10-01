import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors, typography } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: colors.navy.component,
    borderRadius: 10,
    marginTop: 13,
    paddingInline: 24,
    paddingBlock: 10,

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
    borderRadius: 10,
    paddingBlock: 8,
    paddingLeft: 5,
    minWidth: 130,
    marginBottom: 5,
    cursor: 'pointer',

    '&:hover $name': {
      color: colors.navy.veryLightGrey,
      ...typography.body1
    }
  },
  current: {
    ...typography.body1,
    fontWeight: 600,
    color: colors.navy.veryLightGrey
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

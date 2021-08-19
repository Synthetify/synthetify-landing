import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

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
    fontSize: 22,
    lineHeight: '40px',
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
      fontWeight: 600
    }
  },
  current: {
    fontSize: 22,
    lineHeight: '40px',
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

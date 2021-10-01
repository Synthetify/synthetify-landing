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
    borderRadius: 10,
    paddingBlock: 8,
    paddingInline: 8,
    minWidth: 175,
    marginBottom: 5,
    cursor: 'pointer',

    '&:hover $name': {
      color: colors.navy.veryLightGrey,
      ...typography.body1
    },

    '&:hover $description': {
      color: colors.navy['8584D2']
    }
  },
  description: {
    ...typography.caption1,
    color: colors.navy.info
  },
  current: {
    '& $name': {
      color: colors.navy.veryLightGrey,
      ...typography.body1
    },

    '& $description': {
      color: colors.navy['8584D2']
    }
  },
  paper: {
    background: 'transparent',
    boxShadow: 'none'
  },
  blocked: {
    cursor: 'unset',

    '& $name, & $description': {
      opacity: 0.6
    },

    '&:hover $name': {
      color: colors.navy.grey,
      ...typography.body2,
      opacity: 0.6
    },

    '&:hover $description': {
      color: colors.navy.info,
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

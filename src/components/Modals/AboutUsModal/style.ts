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
    lineHeight: '28px'
  },
  listItem: {
    borderRadius: 8,
    padding: '6px 0 51px 8px',
    minWidth: 214,
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
      color: '#9D9CEE',
      lineHeight: '16px'
    }
  },
  description: {
    ...typography.body4,
    color: colors.navy.info,
    lineHeight: '16px'
  },
  current: {
    '& $name': {
      color: colors.navy.veryLightGrey,
      ...typography.body1
    },

    '& $description': {
      color: '#9D9CEE'
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
    fontSize: 11,
    marginTop: 2
  }
}))

export default useStyles

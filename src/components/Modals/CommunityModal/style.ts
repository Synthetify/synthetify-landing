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
    },

    '&:hover $icon': {
      opacity: 1
    }
  },
  description: {
    ...typography.caption1,
    color: colors.navy.info
  },
  paper: {
    background: 'transparent',
    boxShadow: 'none'
  }
}))

export default useStyles

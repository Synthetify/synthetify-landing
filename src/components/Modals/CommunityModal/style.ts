import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
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
    fontSize: 22,
    lineHeight: '40px',
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
      fontWeight: 600
    },

    '&:hover $description': {
      color: colors.navy.button
    },

    '&:hover $icon': {
      opacity: 1
    }
  },
  description: {
    fontSize: 11,
    lineHeight: '13px',
    color: colors.navy.info
  },
  paper: {
    background: 'transparent',
    boxShadow: 'none'
  }
}))

export default useStyles

import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors, typography } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: colors.navy.component,
    width: 160,
    borderRadius: 10,
    marginTop: 13,
    paddingInline: 20,
    paddingBlock: 10,

    [theme.breakpoints.down('sm')]: {
      marginTop: 24
    }
  },
  name: {
    ...typography.body2,
    color: colors.navy.grey
  },
  greeting: {
    ...typography.caption1,
    color: colors.navy.info
  },
  listItem: {
    borderRadius: 10,
    paddingBlock: 8,
    paddingLeft: 8,
    minWidth: 122,
    marginBottom: 5,
    cursor: 'pointer',

    '&:hover $name': {
      color: colors.navy.veryLightGrey,
      ...typography.body1
    },

    '&:hover $greeting': {
      color: colors.navy['8584D2']
    }
  },
  current: {
    '& $name': {
      color: colors.navy.veryLightGrey,
      ...typography.body1
    },

    '& $greeting': {
      color: colors.navy['8584D2']
    }
  },
  paper: {
    background: 'transparent',
    boxShadow: 'none'
  }
}))

export default useStyles

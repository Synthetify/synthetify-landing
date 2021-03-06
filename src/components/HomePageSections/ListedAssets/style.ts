import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors, typography } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: 155,
    marginInline: 'auto',
    width: 'fit-content',

    [theme.breakpoints.down('md')]: {
      marginBottom: 145
    },

    [theme.breakpoints.down('sm')]: {
      marginBottom: 70
    },

    [theme.breakpoints.down('xs')]: {
      marginBottom: 65
    }
  },
  title: {
    ...typography.heading2,
    color: colors.navy.lightGrey,
    marginInline: 'auto',

    [theme.breakpoints.down('sm')]: {
      ...typography.subtitle1
    }
  },
  description: {
    ...typography.subtitle2,
    color: colors.navy.info,
    marginInline: 'auto',
    marginBottom: 50,
    maxWidth: 562,
    textAlign: 'center',

    [theme.breakpoints.down('md')]: {
      maxWidth: 502
    },

    [theme.breakpoints.down('sm')]: {
      ...typography.caption1,
      marginBottom: 36,
      maxWidth: 274
    },

    [theme.breakpoints.down('xs')]: {
      maxWidth: 274
    }
  },
  assets: {
    display: 'grid',
    marginInline: 'auto',
    width: 1098,
    gridTemplateColumns: 'repeat(4, 1fr)',
    columnGap: 22,
    rowGap: 20,

    [theme.breakpoints.down('md')]: {
      width: 747,
      columnGap: 17
    },

    [theme.breakpoints.down('sm')]: {
      width: 365,
      gridTemplateColumns: '1fr 1fr',
      columnGap: 17,
      rowGap: 17
    },

    [theme.breakpoints.down('xs')]: {
      columnGap: 8,
      rowGap: 8
    }
  }
}))

export default useStyles

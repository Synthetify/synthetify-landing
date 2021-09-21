import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: colors.navy.veryLightGrey
  },
  articlesWrapper: {
    display: 'grid',
    width: 1615,
    gridTemplateColumns: '1fr 1fr 1fr',
    columnGap: 80,
    rowGap: 88,
    justifyContent: 'center',
    marginBlock: 144,
    marginInline: 'auto',
    [theme.breakpoints.down('lg')]: {
      gridTemplateColumns: '1fr 1fr',
      width: 1050,
      rowGap: 97,
      marginBlock: 130
    },
    [theme.breakpoints.down('md')]: {
      width: 'calc(100% - 98px)',
      columnGap: 38,
      marginBlock: 94
    },
    [theme.breakpoints.down('sm')]: {
      columnGap: 18,
      width: 'calc(100% - 56px)'
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '1fr',
      rowGap: 38,
      justifyContent: 'center',
      width: 'calc(100% - 62px)'
    }
  },
  desc: {
    position: 'relative',
    top: 7,
    fontSize: 13,
    fontWeight: 500,
    width: 'calc(100% - 3px)',
    maxWidth: 485,
    lineHeight: '16px',
    [theme.breakpoints.down('md')]: {
      maxWidth: 412
    },
    [theme.breakpoints.down('sm')]: {
      lineHeight: '11px',
      fontSize: 9,
      maxWidth: 313
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  articleAndDesc: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%'
  }
}))

export default useStyles

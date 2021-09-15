import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: colors.navy.veryLightGrey
  },
  articlesWrapper: {
    display: 'grid',
    width: 'calc(100vw - 304px)',
    gridTemplateColumns: '1fr 1fr 1fr',
    columnGap: 80,
    rowGap: 88,
    justifyContent: 'center',
    marginBlock: 240,
    [theme.breakpoints.down('lg')]: {
      gridTemplateColumns: '1fr 1fr',
      width: 'calc(100% - 230px)',
      columnGap: 80,
      rowGap: 97,
      marginBlock: 223
    },
    [theme.breakpoints.down('md')]: {
      width: 'calc(100vw - 100px)',
      columnGap: 38,
      marginBlock: 163
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100vw - 55px)',
      columnGap: 17.47,
      marginBlock: 102
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '1fr',
      width: 'calc(100vw - 62px)',
      rowGap: 38,
      justifyContent: 'center',
      marginBlock: 75
    }
  },
  desc: {
    position: 'relative',
    top: 7,
    fontSize: 13,
    fontWeight: 400,
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

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
    rowGap: 41,
    justifyContent: 'center',
    marginBlock: 90,
    marginInline: 'auto',
    [theme.breakpoints.down('lg')]: {
      gridTemplateColumns: '1fr 1fr',
      width: 1050
    },
    [theme.breakpoints.down('md')]: {
      width: 'calc(100% - 98px)',
      columnGap: 38,
      rowGap: 27
    },
    [theme.breakpoints.down('sm')]: {
      columnGap: 18,
      width: 'calc(100% - 56px)',
      marginBlock: 60
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '1fr',
      justifyContent: 'center',
      width: 'calc(100% - 62px)',
      marginBlock: 40
    }
  }
}))

export default useStyles

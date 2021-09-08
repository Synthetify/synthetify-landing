/* eslint-disable no-tabs */
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '65%',
    margin: '0 auto',
    padding: '128px 0',
    [theme.breakpoints.down('md')]: {
      width: '88%'
    }
  },
  questionBlock: {
    paddingBottom: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:last-child': {
      paddingBottom: 0
    },
    [theme.breakpoints.down('md')]: {
      paddingBottom: 36
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 28
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 18
    }
  }
}))

export default useStyles

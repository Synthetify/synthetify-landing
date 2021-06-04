import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.down('lg')]: {
      width: '65%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%'
    }
  }
}))

export default useStyles

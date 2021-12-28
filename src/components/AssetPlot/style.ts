import { makeStyles, Theme } from '@material-ui/core/styles'
const useStyles = makeStyles((theme: Theme) => ({
  linePlot: {
    margin: '0 0 auto auto',
    height: '44px',
    width: '96px',
    [theme.breakpoints.down('md')]: {
      width: 56,
      height: 28
    }
  }
}))
export default useStyles

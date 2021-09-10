import { makeStyles, Theme } from '@material-ui/core/styles'
const useStyles = makeStyles((theme: Theme) => ({
  linePlot: {
    margin: '0 auto auto auto',
    height: '46px',
    width: '98px',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }
}))
export default useStyles

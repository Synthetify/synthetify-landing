import { makeStyles, Theme } from '@material-ui/core/styles'
const useStyles = makeStyles((theme: Theme) => ({
  linePlot: {
    margin: '0 auto auto auto',
    height: '44px',
    width: '96px',
    [theme.breakpoints.down('md')]: {
      width: '33%',
      height: '35px'
    }
  }
}))
export default useStyles

import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 840,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '3%',
    paddingBottom: '3%',
    '& > *': {
      padding: 40
    }
  },
  title: {
    color: theme.palette.text.primary,
    fontWeight: 700,
    fontSize: 44,
    [theme.breakpoints.down('md')]: {
      fontSize: 35
    }
  },
  textWrapper: {
    maxWidth: 760
  },
  text: {
    color: theme.palette.text.primary,
    fontWeight: 400,
    fontSize: 26,
    fontStyle: 'normal',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: 20
    }
  }
}))

export default useStyles

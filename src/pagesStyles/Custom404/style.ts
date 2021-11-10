import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontFamily: 'Nunito Sans'
  },
  title: {
    marginTop: 116,
    fontWeight: 800,
    fontSize: 70,
    lineHeight: '49px',
    color: colors.white.main,
    [theme.breakpoints.down('xs')]: {
      marginTop: 96
    }
  },
  subTitle: {
    marginTop: 36,
    marginBottom: 152,
    fontWeight: 400,
    fontSize: 27,
    lineHeight: '35px',
    color: colors.navy.navBar,
    opacity: 0.76,
    [theme.breakpoints.down('md')]: {
      marginBottom: 172
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 203
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: 167
    }
  }
}))

export default useStyles

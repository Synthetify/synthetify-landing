import { colors } from '@static/theme'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: '#00ff',
    height: 601,
    justifyContent: 'center'
  },
  title: {
    fontSize: 100,
    lineHeight: '40px',
    //color: colors.white.main,
    fontWeight: 700,
    color: '#00f',
    // '&::after': {
    //   content: '""',
    //   position: 'absolute',
    //   height: 2,
    //   margin: 'auto',
    //   left: 0,
    //   right: 0,
    //   top: 330,
    //   width: 622,
    //   background: colors.navy.lightGrey
    // }
  },
  subTitle: {
    fontSize: 32,
    lineHeight: '40px',
    color: colors.navy.info,
    marginTop: 90
  },
  articlesWrapper: {
    position: 'relative',
    display: 'flex',
    //width: 'calc(100vw - 304px)',
    width:1616,
    //height: 1077,
    justifyContent: 'space-between',
    border: '1px solid #00ff',
    flexWrap:'wrap',
  }
}))

export default useStyles

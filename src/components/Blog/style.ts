import { colors } from '@static/theme'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: '#00ff',
    height: 601,
    justifyContent: 'center',
    height:'100vh',
    backgroundColor:'#0C0D2C'
  },
  title: {
    fontSize: 100,
    lineHeight: '40px',
    // color: colors.white.main,
    fontWeight: 700,
    color: '#00f'
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
    width: 1616,
    justifyContent: 'space-between',
    border: '1px solid #00ff',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center'
  },
  desc: {
    marginTop: -83,
    fontSize: 13,
    fontWeight: 400,
    width: 478,
    marginLeft: 4.5,
    lineHeight: '15.73px',
    color: '#F9F9FBC2'
  }
}))

export default useStyles

import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: '#00ff',
    // height: 601,
    height: 1876
  },
  title: {
    position: 'relative',
    marginInline: 'auto',
    fontSize: 100,
    lineHeight: '40px',
    fontWeight: 700,
    color: '#00f',
    [theme.breakpoints.down('xs')]: {
      fontSize: 67
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      height: 2,
      marginInline: 'auto',
      left: 0,
      right: 0,
      top: 90,
      width: '100%',
      background: colors.navy.lightGrey
    }
  },
  subtitle: {
    fontSize: 32,
    lineHeight: '40px',
    fontWeight: 700,
    color: '#00f',
    position: 'relative',
    top: 64,
    marginInline: 'auto',
    [theme.breakpoints.down('xs')]: {
      fontSize: 20
    }
  },
  titleWrapper: {
    textAlign: 'center',
    position: 'relative',
    top: 199,
    height: 162,
    width: 622,
    [theme.breakpoints.down('md')]: {
      top: 120
    },
    [theme.breakpoints.down('xs')]: {
      top: 70,
      width: 344,
      height: 104

    }
  },
  articlesWrapper: {
    position: 'relative',
    top: 601,
    display: 'grid',
    width:  'calc(100vw - 304px)',
    gridTemplateColumns: 'repeat( auto-fit, minmax(485px, 1fr))',
    columnGap: 80,
    rowGap: 88,
    justifyItems: 'center',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2,1fr)',
      top: 445,
      width: 862,
      rowGap: 38
    },
    [theme.breakpoints.down('sm')]: {
      //gridTemplateColumns: 'repeat(2,1fr)',
      gridTemplateColumns: 'repeat( auto-fit, minmax(260px, 1fr))',
      top: 272,
      width: 'calc(100vw - 55px)',
      columnGap: 17.47,
    },
    [theme.breakpoints.down('xs')]: {
      // gridTemplateColumns: 'repeat(auto-fill, minMax(100%, 1fr))',
      gridTemplateColumns: 'repeat(1,1fr)',
      top: 224,
      width: 'calc(100vw - 62px)',
      rowGap: 38
    }
  },
  desc: {
    position: 'relative',
    top: 7,
    fontSize: 13,
    fontWeight: 400,
    width: 478,
    marginLeft: 4.5,
    lineHeight: '15.73px',
    color: '#00f',
    [theme.breakpoints.down('xs')]: {
      width: 'calc(100% - 17px)',
      fontSize: 9,
      lineHeight: '10.89px'
    }
  },
  menuWrapper: {
    position: 'absolute',
    top: 1774,
    right: 151,
    display: 'flex',
    width: 590,
    justifyContent: 'space-between',
    fontFamily: 'Inter'
  },
  menuItem: {
    fontWeight: 700,
    fontSize: 32,
    lineHeight: '40px'
  },
  menuButton: {
    fontWeight: 700,
    fontSize: 32,
    lineHeight: '40px'
  },
  articleAndDesc: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      maxWidth: 400
    },
    [theme.breakpoints.down('sm')]: {
      //maxHeight: 263,
      //maxWidth: 181,
    }
  }
}))

export default useStyles

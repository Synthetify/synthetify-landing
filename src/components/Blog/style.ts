import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: colors.navy.veryLightGrey,
    // height: 601,
    // height: 1876
  },
  title: {
    position: 'relative',
    marginInline: 'auto',
    fontSize: 100,
    lineHeight: '40px',
    fontWeight: 700,
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
      background: colors.navy.lightGrey,
      [theme.breakpoints.down('xs')]: {
        top: 70
      }
    }
  },
  subtitle: {
    fontSize: 32,
    lineHeight: '40px',
    fontWeight: 700,
    position: 'relative',
    top: 64,
    marginInline: 'auto',
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
      top: 33
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 15,
      top: 33
    }
  },
  titleWrapper: {
    
    textAlign: 'center',
    position: 'relative',
    width: 622,
    top: 199,
    // height: 162, TODO TRY
    // width: '57%',
    [theme.breakpoints.down('md')]: {
      top: 120
    },
    [theme.breakpoints.down('xs')]: {
      top: 70,
      width: 344
    }
  },
  articlesWrapper: {
    position: 'relative',
    top: 510,
    display: 'grid',
    width: 'calc(100vw - 304px)',
    // gridTemplateColumns: 'repeat( auto-fit, minmax(485px, 1fr))',
    gridTemplateColumns: 'repeat(3,auto)',
    columnGap: 80,
    rowGap: 88,
//    justifyContent:'center',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2,1fr)',
      top: 445,
      width: 862,
      columnGap: 38,
      rowGap: 97
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(2,1fr)',
      // gridTemplateColumns: 'repeat( auto-fill, minmax(412px, 1fr))',
      top: 340,
      width: 'calc(100vw - 55px)',
      columnGap: 17.47
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'fit-content(100%)',
      top: 224,
      width: 'calc(100vw - 62px)',
      rowGap: 38,
      justifyContent:'center',
    }
  },
  desc: {
    position: 'relative',
    top: 7,
    fontSize: 13,
    fontWeight: 400,
    width: 'calc(100% - 7px)',
    maxWidth: 485,
    // marginLeft: 4.5,
    lineHeight: '16px',
    [theme.breakpoints.down('sm')]: {
      // maxWidth: 406,
      width: 'calc(100% - 31px)',
      lineHeight: '14px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'

    }
  },
  menuWrapper: {
    position: 'relative',
    top: 585,
    right: 151,
    display: 'flex',
    width: 590,
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    fontFamily: 'Inter',
    [theme.breakpoints.down('sm')]: {
      left: -63, // 420
      top: 390,
      width: 447
    },
    [theme.breakpoints.down('xs')]: {
      left: 0,
      alignSelf: 'center',
      top: 247,
      width: 'calc(100% - 62px)'
    }
  },
  menuItem: {
    fontWeight: 700,
    fontSize: 32,
    lineHeight: '40px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 22
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 20
    }
  },
  menuButton: {
    fontWeight: 700,
    fontSize: 32,
    lineHeight: '40px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 22
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 20
    }
  },
  articleAndDesc: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      maxWidth: 313
    },
    [theme.breakpoints.down('sm')]: {
      // maxHeight: 263,
      // maxWidth: 181,
    }
  }
}))

export default useStyles
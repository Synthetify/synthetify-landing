import { makeStyles, Theme } from '@material-ui/core'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  xlRoot: {
    height: 110,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  buttonSpacing30: {
    '& Button': {
      marginRight: 30
    }
  },
  appBar: {
    height: 110,
    paddingLeft: '2%',
    paddingRight: '2%',
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  submenuCollapse: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  logo: {
    height: 36,
    marginTop: 6,
    cursor: 'pointer'
  },
  marginButton: {
    marginLeft: 20,
    marginRight: 20
  },
  poper: {
    backgroundColor: colors.black.light,
    minWidth: 180,
    marginTop: 8
  },
  menuButton: {
    color: colors.white.main,
    fontSize: 40
  },
  submenuButton: {
    color: theme.palette.primary.main,
    '&:hover': {
      color: colors.black.background,
      backgroundColor: `${theme.palette.primary.main}`
    },
    '& .MuiListItemIcon-root': {
      color: 'currentColor'
    }
  },
  subList: {
    paddingLeft: 55
  }
}))

export default useStyles

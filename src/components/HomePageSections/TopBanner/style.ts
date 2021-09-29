import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 105,
    marginBottom: 188,
    marginInline: 'auto',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: 'fit-content',

    [theme.breakpoints.down('md')]: {
      marginTop: 50,
      marginBottom: 157
    },

    [theme.breakpoints.down('sm')]: {
      marginTop: 40,
      marginBottom: 113
    },

    [theme.breakpoints.down('xs')]: {
      marginBottom: 76,
      flexDirection: 'column-reverse',
      flexWrap: 'unset'
    }
  },
  right: {
    width: 794,

    [theme.breakpoints.down('lg')]: {
      width: 661
    },

    [theme.breakpoints.down('md')]: {
      width: 470
    },

    [theme.breakpoints.down('sm')]: {
      width: 258
    },

    [theme.breakpoints.down('xs')]: {
      width: 318,
      marginBottom: 20
    }
  },
  title: {
    color: colors.white.main,
    fontSize: 60,
    lineHeight: '60px',
    fontWeight: 700,
    marginBottom: 10,

    [theme.breakpoints.down('lg')]: {
      fontSize: 50
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 40,
      lineHeight: '46px'
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
      lineHeight: '28px'
    }
  },
  intro: {
    fontSize: 22,
    lineHeight: '30px',
    color: '#E4E4E4',

    [theme.breakpoints.down('lg')]: {
      fontSize: 20
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 18,
      lineHeight: '28px'
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 13,
      lineHeight: '18px'
    }
  },
  description: {
    fontSize: 22,
    lineHeight: '30px',
    color: '#9FA7B8',

    [theme.breakpoints.down('lg')]: {
      fontSize: 20
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 18,
      lineHeight: '28px'
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 13,
      lineHeight: '18px'
    }
  },
  builtOn: {
    fontSize: 22,
    lineHeight: '40px',
    color: '#9FA7B8',

    [theme.breakpoints.down('md')]: {
      fontSize: 18
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 13
    }
  },
  solanaLogo: {
    backgroundSize: '1920px 259px',
    marginLeft: 8,
    maxWidth: 121,

    [theme.breakpoints.down('sm')]: {
      maxWidth: 82,
      marginLeft: 5
    }
  },
  photoWrapper: {
    backgroundColor: colors.navy.info,
    padding: 18,
    borderRadius: 10,
    marginRight: 135,

    [theme.breakpoints.down('lg')]: {
      padding: 14,
      marginRight: 22
    },

    [theme.breakpoints.down('md')]: {
      padding: 11
    },

    [theme.breakpoints.down('sm')]: {
      padding: 7
    },

    [theme.breakpoints.down('xs')]: {
      padding: 9,
      marginInline: 'auto'
    }
  },
  photo: {
    borderRadius: 5,
    height: 'auto',
    width: 655,

    [theme.breakpoints.down('lg')]: {
      width: 490
    },

    [theme.breakpoints.down('md')]: {
      width: 392
    },

    [theme.breakpoints.down('sm')]: {
      width: 258
    },

    [theme.breakpoints.down('xs')]: {
      width: 320
    }
  }
}))

export default useStyles

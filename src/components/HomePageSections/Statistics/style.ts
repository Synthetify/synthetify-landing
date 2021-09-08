import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: 317,
    marginInline: 'auto',
    width: 'fit-content',

    [theme.breakpoints.down('md')]: {
      marginBottom: 174
    },

    [theme.breakpoints.down('sm')]: {
      marginBottom: 107
    },

    [theme.breakpoints.down('xs')]: {
      marginBottom: 75
    }
  },
  title: {
    fontSize: 30,
    lineHeight: '40px',
    color: colors.navy.lightGrey,
    marginInline: 'auto',
    fontWeight: 700,

    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      lineHeight: '30px'
    }
  },
  description: {
    fontSize: 20,
    lineHeight: '25px',
    color: colors.navy.info,
    marginInline: 'auto',
    marginBottom: 50,

    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
      lineHeight: '13px',
      marginBottom: 36
    }
  },
  wrapper: {
    width: 901,
    height: 194,
    background: 'rgba(7, 9, 24, 0.3)',
    border: '1px solid #4D527A',
    backdropFilter: 'blur(7px)',
    borderRadius: 20,

    [theme.breakpoints.down('lg')]: {
      width: 751,
      height: 161
    },

    [theme.breakpoints.down('sm')]: {
      width: 326,
      height: 80
    }
  },
  field: {
    width: '33%'
  },
  divider: {
    background: 'linear-gradient(0deg, rgba(157, 160, 174, 0) 0%, #4D527A 49.61%, rgba(157, 160, 174, 0) 100%)',
    height: '100%'
  },
  fieldValue: {
    fontSize: 45,
    lineHeight: '69px',
    color: colors.navy.veryLightGrey,
    marginBlock: 15,
    fontWeight: 700,

    [theme.breakpoints.down('lg')]: {
      fontSize: 38,
      lineHeight: '57px',
      marginBlock: 13
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 19,
      lineHeight: '26px',
      marginBlock: 7
    }
  },
  fieldName: {
    fontSize: 16,
    lineHeight: '20px',
    color: colors.navy.grey,

    [theme.breakpoints.down('lg')]: {
      lineHeight: '17px'
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
      lineHeight: '12px'
    }
  }
}))

export default useStyles

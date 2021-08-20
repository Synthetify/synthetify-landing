import { colors } from '@static/theme'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 258,
    height: 129,
    borderRadius: 20,
    borderWidth: 0.2,
    borderStyle: 'solid',
    backgroundColor: 'rgba(7, 9, 24, 0.33)',
    paddingTop: 18,
    paddingInline: 12,
    paddingBottom: 10,

    [theme.breakpoints.up('lg')]: {
      transition: 'transform 300ms linear, border-color 300ms linear, box-shadow 300ms linear',

      '&:hover': {
        transform: 'scale(1.085) translateY(-5px)'
      }
    },

    [theme.breakpoints.down('md')]: {
      width: 174,
      height: 82,
      borderRadius: 6,
      paddingTop: 9,
      paddingBottom: 13,
      paddingInline: 9
    },

    [theme.breakpoints.down('xs')]: {
      width: 164,
      height: 87,
      borderRadius: 6,
      paddingBottom: 12,
      paddingInline: 8
    }
  },
  token: {
    fontSize: 28,
    lineHeight: '28px',
    fontWeight: 600,
    color: colors.navy.veryLightGrey,

    [theme.breakpoints.down('md')]: {
      fontSize: 22,
      lineHeight: '22px'
    }
  },
  tokenName: {
    fontSize: 13,
    lineHeight: '13px',
    color: colors.navy.info,

    [theme.breakpoints.down('md')]: {
      fontSize: 10,
      lineHeight: '10px'
    }
  },
  value: {
    fontSize: 25,
    lineHeight: '25px',
    fontWeight: 700,
    color: colors.navy.veryLightGrey,
    marginLeft: 4,

    [theme.breakpoints.down('md')]: {
      fontSize: 18
    }
  },
  chg: {
    justifySelf: 'flex-end',
    fontSize: 13,
    color: colors.navy.navButton,
    marginRight: 9,

    [theme.breakpoints.down('md')]: {
      fontSize: 10,
      marginRight: 3
    }
  },
  percent: {
    justifySelf: 'flex-end',
    fontSize: 16,
    color: colors.navy.veryLightGrey,

    [theme.breakpoints.down('md')]: {
      fontSize: 10
    }
  },
  change: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap'
  }
}))

export default useStyles

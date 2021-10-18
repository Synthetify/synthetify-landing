import { colors, typography } from '@static/theme'
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
      height: 92,
      borderRadius: 6,
      paddingBlock: 9,
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
    ...typography.heading2,
    color: colors.navy.veryLightGrey,

    [theme.breakpoints.down('md')]: {
      ...typography.heading4
    }
  },
  tokenName: {
    ...typography.body4,
    color: colors.navy.info,
    lineHeight: '2px',
    padding: '0 0 0 1px',

    [theme.breakpoints.down('md')]: {
      ...typography.caption1,
      padding: '0 0 0 .5px',
      lineHeight: '6px'
    }
  },
  value: {
    ...typography.heading4,
    color: colors.navy.veryLightGrey,
    marginLeft: 4,

    [theme.breakpoints.down('md')]: {
      ...typography.subtitle1
    }
  },
  chg: {
    justifySelf: 'flex-end',
    ...typography.subtitle2,
    color: colors.navy.navButton,
    marginRight: 9,

    [theme.breakpoints.down('md')]: {
      ...typography.caption1,
      marginRight: 3
    }
  },
  percent: {
    justifySelf: 'flex-end',
    ...typography.subtitle1,
    color: colors.navy.veryLightGrey,

    [theme.breakpoints.down('md')]: {
      ...typography.caption2
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

import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  circle: {
    width: 43,
    height: 43,
    cursor: 'pointer',

    '&:not(:last-child)': {
      marginBottom: 6
    }
  },
  socials: {
    paddingBlock: 18,
    paddingInline: 13,
    width: 69,
    height: 225,
    borderRadius: 56.5,
    backdropFilter: 'blur(4px)',
    backgroundColor: 'rgba(157, 160, 174, 0.1)',
    position: 'fixed',
    top: 270,
    right: 25,
    zIndex: 1,

    [theme.breakpoints.down('md')]: {
      right: 17
    }
  }
}))

export default useStyles

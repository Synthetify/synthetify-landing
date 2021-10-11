import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  circle: {
    width: 43,
    height: 43,
    transition: 'transform 300ms',

    '&:hover': {
      transform: 'scale(1.1) rotate(-20deg)'
    }
  },
  socials: {
    paddingBlock: 18,
    paddingInline: 13,
    width: 69,
    height: 270,
    borderRadius: 56.5,
    backdropFilter: 'blur(4px)',
    backgroundColor: 'rgba(157, 160, 174, 0.1)',
    position: 'fixed',
    bottom: 50,
    right: 25,
    zIndex: 10,

    '& a:not(:last-child)': {
      marginBottom: 6
    },

    [theme.breakpoints.down('md')]: {
      right: 17
    }
  }
}))

export default useStyles

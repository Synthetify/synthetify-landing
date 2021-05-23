import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: 'linear-gradient(180deg, #15151F 0%, #030313 100%)',
    minHeight: 600
  },
  partners: {
    padding: 30,
    '& > *': {
      paddingLeft: 30,
      paddingRight: 30,
      paddingBottom: 80
    }
  },
  title: {
    color: theme.palette.text.primary,
    fontWeight: 400,
    fontSize: 46,
    textAlign: 'center'
  },
  bold: {
    fontWeight: 700
  }
}))

export default useStyles

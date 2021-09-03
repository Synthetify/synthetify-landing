import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  video: {
    objectFit: 'cover',
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0
  }
}))

export default useStyles

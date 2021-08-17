import React from 'react'
// import background from '@static/background.mp4'
import useStyles from './style'

export const Background: React.FC = () => {
  const classes = useStyles()

  return (
    <video
      playsInline
      autoPlay
      muted
      loop
      disablePictureInPicture
      preload='auto'
      className={classes.video}
    >
      <source src='background.mp4' type="video/mp4" />
    </video>
  )
}
export default Background

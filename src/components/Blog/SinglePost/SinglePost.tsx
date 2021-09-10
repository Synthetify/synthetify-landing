import React from 'react'
import { Button, Grid } from '@material-ui/core'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import useStyles from './style'
const id: number = 1
const post: string = `
## **Welcome** 

---

### Posted July 12, 2021

![example Image](https://resources.synthetify.io/synthetify-metatags.png)
>#### Lorem Ipsum
>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an
unknown printer took a galley of type and scrambled it to make a type specimen book. It
has survived not only five centuries, but also the leap into electronic typesetting,
remaining essentially unchanged.

> It was popularised in the 1960s with the release of
    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
    publishing software like Aldus PageMaker including versions of Lorem Ipsum.


![example Image](https://resources.synthetify.io/synthetify-metatags.png)

>#### Header 2
> It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of
    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
    publishing software like Aldus PageMaker including versions of Lorem Ipsum.

> It was popularised in the 1960s with the release of
    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`

export const SinglePost: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid key={ id } container item justifyContent='center' className={classes.mainContainer}>
      <ReactMarkdown children={post} remarkPlugins={[remarkGfm]} />
      <Button className={classes.backButton}>Back to Blog</Button>
    </Grid>
  )
}

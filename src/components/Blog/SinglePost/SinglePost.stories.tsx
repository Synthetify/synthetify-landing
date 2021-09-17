import React from 'react'
import { SinglePost } from './SinglePost'
import { storiesOf } from '@storybook/react'

storiesOf('blog', module).add('singlepost', () => <SinglePost singlePost={post} title='Welcome' date='2021-01-01' />)

const post: string = `
![img1](https://miro.medium.com/max/1838/0*Pn3ZFJ6ZwnaScnJ-)
**Lorem Ipsum**

Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an
unknown printer took a **galley of type** and _scrambled_ it to make a [type](wp.pl) specimen book. It
has survived not only five centuries, but also the leap into electronic typesetting,
remaining essentially unchanged.

![img2](https://miro.medium.com/max/1838/0*Pn3ZFJ6ZwnaScnJ-)
**Lorem Ipsum**

Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an
unknown printer took a galley of type and scrambled it to make a type specimen book. It
has survived not only five centuries, but also the leap into electronic typesetting,
remaining essentially unchanged.

- First item
- Second item
- Third item
- Fourth item 

Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an
unknown printer took a galley of type and scrambled it to make a type specimen book. It
has survived not only five centuries, but also the leap into electronic typesetting,
remaining essentially unchanged.
`

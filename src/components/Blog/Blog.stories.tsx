import React from 'react'
import { storiesOf } from '@storybook/react'
import Blog from '@components/Blog/Blog'

storiesOf('Blog', module)
  .add('Blog', () => (
    <Blog/>
  ))

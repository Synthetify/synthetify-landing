import React from 'react'
import { storiesOf } from '@storybook/react'
import Article from '@components/Blog/Article/Article'

storiesOf('Blog/Article', module)
  .add('Article', () => (
    <Article/>
  ))

import React from 'react'
import { storiesOf } from '@storybook/react'
import Article from '@components/Blog/Article/Article'

storiesOf('Blog/Article', module)
  .add('Article', () => (
    <Article
      title={'Donec quis eros ut ante viverra pulvinar. Donec quis eros.'}
      date={'June 20, 2021'}
      image={'https://poinformowani.pl/image/868x429/0.93.1140.563/media/2021/09/31809/solana.jpg'}
      desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.'}/>
  ))

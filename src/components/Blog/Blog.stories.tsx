import React from 'react'
import { storiesOf } from '@storybook/react'
import { Blog, DataForArticles } from '@components/Blog/Blog'

const large: DataForArticles[] = [
  {
    title: 'Donec quis eros ut ante viverra pulvinar. Donec quis eros.',
    date: 'June 20, 2021 ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image: 'https://poinformowani.pl/image/868x429/0.93.1140.563/media/2021/09/31809/solana.jpg',
    slug: 'post1'
  },
  {
    title: 'Donec quis eros ut ante viverra pulvinar.',
    date: 'June 20, 2021',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image: '',
    slug: 'post2'
  },
  {
    title: 'Donec quis eros.',
    date: 'June 20, 2021',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image: '',
    slug: 'post3'
  },
  {
    title: 'Donec quis eros ut ante viverra pulvinar. Donec quis eros.',
    date: 'June 20, 2021 ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image: '',
    slug: 'post4'
  },
  {
    title: 'Donec quis eros ut ante viverra pulvinar.',
    date: 'June 20, 2021',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image: '',
    slug: 'post5'
  },
  {
    title: 'Donec quis eros.',
    date: 'June 20, 2021',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image: '',
    slug: 'post6'
  },
  {
    title: 'Donec quis eros ut ante viverra pulvinar. Donec quis eros.',
    date: 'June 20, 2021 ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image: '',
    slug: 'post7'
  },
  {
    title: 'Donec quis eros ut ante viverra pulvinar.',
    date: 'June 20, 2021',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image: '',
    slug: 'post8'
  },
  {
    title: 'Donec quis eros.',
    date: 'June 20, 2021',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image: '',
    slug: 'post9'
  }
]

const medium: DataForArticles[] = [
  {
    title: 'Donec quis eros ut ante viverra pulvinar. Donec quis eros.',
    date: 'June 20, 2021 ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image: 'https://poinformowani.pl/image/868x429/0.93.1140.563/media/2021/09/31809/solana.jpg',
    slug: 'post1'
  },
  {
    title: 'Donec quis eros ut ante viverra pulvinar.',
    date: 'June 20, 2021',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image: '',
    slug: 'post2'
  },
  {
    title: 'Donec quis eros.',
    date: 'June 20, 2021',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image: '',
    slug: 'post3'
  },
  {
    title: 'Donec quis eros ut ante viverra pulvinar. Donec quis eros.',
    date: 'June 20, 2021 ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image: '',
    slug: 'post4'
  },
  {
    title: 'Donec quis eros ut ante viverra pulvinar.',
    date: 'June 20, 2021',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image: '',
    slug: 'post5'
  }
]

const small: DataForArticles[] = [
  {
    title: 'Donec quis eros ut ante viverra pulvinar. Donec quis eros.',
    date: 'June 20, 2021 ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image: 'https://poinformowani.pl/image/868x429/0.93.1140.563/media/2021/09/31809/solana.jpg',
    slug: 'post1'
  }
]

storiesOf('Blog', module)
  .add('Large', () => (
    <div style={{ backgroundColor: '#0C0D2C', height: 3000 }}>
      <Blog data={large}/>
    </div>
  ))
  .add('Medium', () => (
    <div style={{ backgroundColor: '#0C0D2C', height: 3000 }}>
      <Blog data={medium}/>
    </div>
  ))
  .add('Small', () => (
    <div style={{ backgroundColor: '#0C0D2C', height: 3000 }}>
      <Blog data={small}/>
    </div>
  ))

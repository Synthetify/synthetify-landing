import React from 'react'
import { storiesOf } from '@storybook/react'
import { Blog, DataForArticles } from '@components/Blog/Blog'

const large: DataForArticles[] = [
  {
    title: 'Donec quis eros ut ante viverra pulvinar. Donec quis eros.',
    date: 'June 20, 2021 ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image: 'https://cdn.publish0x.com/prod/fs/images/134538ec7d89fb5f38557935b659a3edfbd220a63a86cb5d4acef65f38130546.jpg'
  },
  {
    title: 'Donec quis eros ut ante viverra pulvinar.',
    date: 'June 20, 2021',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image:''
  },
  {
    title: 'Donec quis eros.',
    date: 'June 20, 2021',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image:''
  },
  {
    title: 'Donec quis eros ut ante viverra pulvinar. Donec quis eros.',
    date: 'June 20, 2021 ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image:''
  },
  {
    title: 'Donec quis eros ut ante viverra pulvinar.',
    date: 'June 20, 2021',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image:''
  },
  {
    title: 'Donec quis eros.',
    date: 'June 20, 2021',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image:''
  },
  {
    title: 'Donec quis eros ut ante viverra pulvinar. Donec quis eros.',
    date: 'June 20, 2021 ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image:''
  },
  {
    title: 'Donec quis eros ut ante viverra pulvinar.',
    date: 'June 20, 2021',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image:''
  },
  {
    title: 'Donec quis eros.',
    date: 'June 20, 2021',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image:''
  }
]

const medium: DataForArticles[] = [
  {
    title: 'Donec quis eros ut ante viverra pulvinar. Donec quis eros.',
    date: 'June 20, 2021 ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image: 'https://cdn.publish0x.com/prod/fs/images/134538ec7d89fb5f38557935b659a3edfbd220a63a86cb5d4acef65f38130546.jpg'
  },
  {
    title: 'Donec quis eros ut ante viverra pulvinar.',
    date: 'June 20, 2021',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image:''
  },
  {
    title: 'Donec quis eros.',
    date: 'June 20, 2021',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image:''
  },
  {
    title: 'Donec quis eros ut ante viverra pulvinar. Donec quis eros.',
    date: 'June 20, 2021 ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image:''
  },
  {
    title: 'Donec quis eros ut ante viverra pulvinar.',
    date: 'June 20, 2021',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image:''
  }
]

const small: DataForArticles[] = [
  {
    title: 'Donec quis eros ut ante viverra pulvinar. Donec quis eros.',
    date: 'June 20, 2021 ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image: 'https://cdn.publish0x.com/prod/fs/images/134538ec7d89fb5f38557935b659a3edfbd220a63a86cb5d4acef65f38130546.jpg'
  },
  {
    title: 'Donec quis eros ut ante viverra pulvinar.',
    date: 'June 20, 2021',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula rutrum laoreet. Nulla quis felis id metus pellentesque ultrices in sed dolor.',
    image:''
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

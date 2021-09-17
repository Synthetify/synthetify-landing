import React from 'react'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import BlogListing, { DataForArticles } from '@components/Blog/Blog'

export const Blog: React.FC<{ posts: DataForArticles[] }> = ({ posts }) => {
  return (
    <BlogListing data={posts}/>
  )
}

export const getStaticProps = async () => {
  const postsFiles = fs.readdirSync(path.join('src/blogPosts'))

  const posts = postsFiles.map((name) => {
    const postData = fs.readFileSync(path.join(`src/blogPosts/${name}`), 'utf-8')
    const { data: { title, description, image, date } } = matter(postData)

    return {
      slug: name.replace('.md', ''),
      title,
      description,
      image,
      date
    }
  })

  return {
    props: {
      posts: posts.sort((a, b) => (new Date(a.date)).getTime() - (new Date(b.date)).getTime())
    }
  }
}

export default Blog

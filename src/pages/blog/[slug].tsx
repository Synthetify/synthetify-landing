import React from 'react'
import matter from 'gray-matter'
import fs from 'fs'
import { BlogData } from '.'
import BlogPostMetatags from '@components/Metatags/BlogPostMetatags'
import { GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import path from 'path'

export const BlogPost: React.FC<BlogData> = ({ title, description, image, slug, date }) => {
  return (
    <>
      <BlogPostMetatags
        slug={slug}
        title={title}
        description={description}
        image={image}
      />
      {title} - {date}
    </>
  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('src/blogPosts'))

  const paths = files.map((name) => ({
    params: {
      slug: name.replace('.md', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams
  const postData = fs.readFileSync(path.join(`src/blogPosts/${slug}.md`), 'utf-8')
  const { data: { title, description, image, date } } = matter(postData)

  return {
    props: {
      slug,
      title,
      description,
      image,
      date
    }
  }
}

export default BlogPost

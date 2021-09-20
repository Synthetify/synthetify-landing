import Head from 'next/head'

export interface IProps {
  slug: string
  title: string
  description: string
  image: string
}

export const BlogPostMetatags: React.FC<IProps> = ({ slug, title, description, image }) => {
  const href: string = typeof window !== 'undefined' ? window.location.origin : ''
  return (
    <Head>
      {/* Open Graph  */}
      <meta property="og:url" key="og:url" content={`https://synthetify.io/blog/${slug}`} />
      <meta property="og:title" key="og:title" content={`${title} - Synthetify`} />
      <meta
        property="og:description"
        key="og:description"
        content={description}
      />
      <meta property="og:image" key="og:image" content={href + image} />

      {/* Twitter Card  */}
      <meta property="twitter:url" key="twitter:url" content="https://twitter.com/synthetify" />
      <meta property="twitter:title" key="twitter:title" content={`${title} - Synthetify`} />
      <meta
        property="twitter:description"
        key="twitter:description"
        content={description}
      />
      <meta
        property="twitter:image"
        key="twitter:image"
        content={href + image}
      />

      {/* DublinCore */}
      <meta name="DC.title" key="DC.title" lang="en" content={`${title} - Synthetify`} />
      <meta
        name="DC.description"
        key="DC.description"
        lang="en"
        content={description}
      />
      <meta name="DC.identifier" key="DC.identifier" content={`https://synthetify.io/blog/${slug}`} />

      <title>{title} - Synthetify</title>
      <meta name="title" key="title" content={`${title} - Synthetify`} />
      <meta
        name="description"
        key="description"
        content={description}
      />
    </Head>
  )
}

export default BlogPostMetatags

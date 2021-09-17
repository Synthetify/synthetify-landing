import Head from 'next/head'

export interface IProps {
  slug: string
  title: string
  description: string
  image: string
}

export const BlogPostMetatags: React.FC<IProps> = ({ slug, title, description, image }) => (
  <Head>
    {/* Open Graph  */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`https://synthetify.io/blog/${slug}`} />
    <meta property="og:title" content={`${title} - Synthetify`} />
    <meta
      property="og:description"
      content={description}
    />
    <meta property="og:image" content={image} />

    {/* Twitter Card  */}
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:url" content="https://twitter.com/synthetify" />
    <meta property="twitter:title" content={`${title} - Synthetify`} />
    <meta
      property="twitter:description"
      content={description}
    />
    <meta
      property="twitter:image"
      content={image}
    />

    {/* DublinCore */}
    <link rel="schema.dcterms" href="https://purl.org/dc/terms/" />
    <meta name="DC.title" lang="en" content={`${title} - Synthetify`} />
    <meta
      name="DC.description"
      lang="en"
      content={description}
    />
    <meta name="DC.publisher" content="Synthetify" />
    <meta name="DC.identifier" content={`https://synthetify.io/blog/${slug}`} />
    <meta name="DC.format" content="text/html" />
    <meta name="DC.type" content="Text" />

    <title>{title} - Synthetify</title>
    <meta
      name="description"
      content={description}
    />
  </Head>
)

export default BlogPostMetatags

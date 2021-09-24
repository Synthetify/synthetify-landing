import Head from 'next/head'

export const BlogMetatags: React.FC = () => (
  <Head>
    <meta name="title" key="title" content="Blog - Synthetify" />

    {/* Open Graph  */}
    <meta property="og:url" key="og:url" content="https://synthetify.io/blog" />
    <meta property="og:title" key="og:title" content="Blog - Synthetify" />

    {/* Twitter Card  */}
    <meta property="twitter:title" key="twitter:title" content="Blog - Synthetify" />

    {/* DublinCore */}
    <meta name="DC.title" key="DC.title" lang="en" content="Blog - Synthetify" />
    <meta name="DC.identifier" key="DC.identifier" content="https://synthetify.io/blog" />

    <title>Blog - Synthetify</title>
  </Head>
)

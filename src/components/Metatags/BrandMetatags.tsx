import Head from 'next/head'

export const BrandMetatags: React.FC = () => (
  <Head>
    <meta name="title" key="title" content="Brand - Synthetify" />

    {/* Open Graph  */}
    <meta property="og:url" key="og:url" content="https://synthetify.io/brand" />
    <meta property="og:title" key="og:title" content="Brand - Synthetify" />

    {/* Twitter Card  */}
    <meta property="twitter:title" key="twitter:title" content="Brand - Synthetify" />

    {/* DublinCore */}
    <meta name="DC.title" key="DC.title" lang="en" content="Brand - Synthetify" />
    <meta name="DC.identifier" key="DC.identifier" content="https://synthetify.io/brand" />

    <title>Brand - Synthetify</title>
  </Head>
)

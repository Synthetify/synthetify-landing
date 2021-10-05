import Head from 'next/head'

export const FAQMetatags: React.FC = () => (
  <Head>
    <meta name="title" key="title" content="FAQ - Synthetify" />

    {/* Open Graph  */}
    <meta property="og:url" key="og:url" content="https://synthetify.io/faq" />
    <meta property="og:title" key="og:title" content="FAQ - Synthetify" />

    {/* Twitter Card  */}
    <meta property="twitter:title" key="twitter:title" content="FAQ - Synthetify" />

    {/* DublinCore */}
    <meta name="DC.title" key="DC.title" lang="en" content="FAQ - Synthetify" />
    <meta name="DC.identifier" key="DC.identifier" content="https://synthetify.io/faq" />

    <title>FAQ - Synthetify</title>
  </Head>
)

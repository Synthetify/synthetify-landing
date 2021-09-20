import Head from 'next/head'

export const Metatags: React.FC = () => (
  <Head>
    <meta charSet="utf-8" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/android-icon-192x192.png"
    />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <title>Synthetify - Decentralized synthetic assets exchange</title>
    <meta name="title" key="title" content="Synthetify - The Future of Synthetic Assests" />
    <meta
      name="description"
      key="description"
      content="Synthetify is an upcoming crypto based platform which provides a bridge between synthetic assets and real-world currencies, crypto, stocks and other financial instruments."
    />

    {/* Open Graph  */}
    <meta property="og:type" content="website" />
    <meta property="og:url" key="og:url" content="https://synthetify.io/" />
    <meta property="og:title" key="og:title" content="Synthetify - The Future of Synthetic Assests" />
    <meta
      property="og:description"
      key="og:description"
      content="Synthetify is an upcoming crypto based platform which provides a bridge between synthetic assets and real-world currencies, crypto, stocks and other financial instruments."
    />
    <meta property="og:image" key="og:image" content="https://resources.synthetify.io/synthetify-metatags.png" />

    {/* Twitter Card  */}
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:url" key="twitter:url" content="https://twitter.com/synthetify" />
    <meta property="twitter:title" key="twitter:title" content="Synthetify - The Future of Synthetic Assests" />
    <meta
      property="twitter:description"
      key="twitter:description"
      content="Synthetify is an upcoming crypto based platform which provides a bridge between synthetic assets and real-world currencies, crypto, stocks and other financial instruments."
    />
    <meta
      property="twitter:image"
      key="twitter:image"
      content="https://resources.synthetify.io/synthetify-metatags.png"
    />

    {/* DublinCore */}
    <link rel="schema.dcterms" href="https://purl.org/dc/terms/" />
    <meta name="DC.title" key="DC.title" lang="en" content="Synthetify - The Future of Synthetic Assests" />
    <meta
      name="DC.description"
      key="DC.description"
      lang="en"
      content="Synthetify is a decentralized synthetic assets exchange built on Solana, providing ultimate trading experiences"
    />
    <meta name="DC.identifier" key="DC.identifier" content="https://synthetify.io/" />

    <link rel="canonical" href="https://synthetify.io/" />
    <link rel="manifest" href="/manifest.json" />

    <title>Synthetify</title>
  </Head>
)

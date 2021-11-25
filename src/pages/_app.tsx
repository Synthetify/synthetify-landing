import React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core'
import { Metatags } from '@components/Metatags/Metatags'
import theme from '@static/theme'
import { toBlur } from '@utils/uiUtils'
import Header from '@components/Header/Header'
import { LanguageProvider } from '@providers/LanguageProvider/LanguageProvider'
import Footer from '@components/Footer/Footer'
import SocialMediaWidget from '@components/SocialMediaWidget/SocialMediaWidget'
import Background from '@components/Background/Background'
import { useRouter } from 'next/router'
import './index.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      {router.asPath === '/' && <Background />}
      <LanguageProvider>
        <div id={toBlur} style={{ position: 'absolute', zIndex: 1, width: '100%' }}>
          <Metatags />
          <Header />
          <SocialMediaWidget />
          <Component {...pageProps} />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
export default MyApp

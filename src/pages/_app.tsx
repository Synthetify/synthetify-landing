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
import './index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Background />
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

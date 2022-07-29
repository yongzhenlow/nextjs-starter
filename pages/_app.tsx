import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import nextSeoConfig from 'next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <DefaultSeo {...nextSeoConfig} />
  <Component {...pageProps} />
  </>
}

export default MyApp

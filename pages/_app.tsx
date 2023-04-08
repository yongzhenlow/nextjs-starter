import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import nextSeoConfig from '@/next-seo.config'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} font-sans`}>
      <DefaultSeo {...nextSeoConfig} />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

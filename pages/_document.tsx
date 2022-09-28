import type { DocumentContext, DocumentInitialProps } from 'next/document'
import { Head, Html, Main, NextScript } from 'next/document'
import Document from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          {/**
           *  Add your custom font style tags here
           * e.g. <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
           * @see https://nextjs.org/docs/basic-features/font-optimization
           */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

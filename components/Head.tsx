import * as React from 'react'
import Head from 'next/head'

interface Props {
  title: string
  description: string
  image: string
  url: string
}

export default ({title, description, image, url}: Props): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="600" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@unvalley_" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}

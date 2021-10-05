import Head from 'next/head'


import Nav from '../components/en/products/nav'
import Heroes from '../components/en/products/heroes'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Products | Kumi</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://kumithebear.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kumi the chubby bear" />
        <meta property="og:description" content="Kumi the chubby bear" />
        <meta name="twitter:title" content="Kumi the chubby bear" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Nav />

      <Heroes />



    </div>
  )
}

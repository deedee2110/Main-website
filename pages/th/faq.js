import Head from 'next/head'


import Nav from '../../components/en/faq/nav'


import Footer from '../../components/en/footer'




export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>คำถามที่พบบ่อย | คุมิ</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://kumithebear.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Kumi the chubby bear" />
        <meta name="twitter:title" content="Kumi the chubby bear" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

    <Nav />
      

    <Footer />


    </div>
  )
}

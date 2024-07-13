import Head from 'next/head'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Courses from '../components/Courses'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Codecamp Advantage - Learn Full-Stack Development</title>
        <meta name="description" content="Master full-stack development with AI-powered personalized learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Features />
        <Courses />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

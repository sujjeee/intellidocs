import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Analytics } from "@vercel/analytics/react";
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className='border-b sticky top-0 bg-white z-50'>
          <Navbar />
        </header>
        <Analytics />
        <Component {...pageProps} />
        <footer className='border-t py-9 bg-white mt-auto'>
          <Footer />
        </footer>
      </div>
    </>
  )
}

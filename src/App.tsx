import { useEffect } from 'react'
import Header from './layout/header/Header'
import Hero from './sections/hero/Hero'
import About from './sections/about/About'
import Services from './sections/services/Services'
import Contact from './sections/contact/Contact'
import Footer from './layout/footer/Footer'
import { useTextDecoder } from './utils/textDecoder'
import './App.css'

function App() {
  const { decodeOnLoad } = useTextDecoder()

  useEffect(() => {
    decodeOnLoad()
  }, [decodeOnLoad])

  return (
    <div className="app-layout">
      <Header />
      <main id="main-content relative" role="main" aria-label="Główna treść strony">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App

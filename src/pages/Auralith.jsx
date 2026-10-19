import Hero from '../components/Hero'
import Features from '../components/Features'
import Stats from '../components/Stats'
import Pricing from '../components/Pricing'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Auralith() {
  return (
    <div className="bg-[#041a15] text-white overflow-x-hidden">
      <Hero />
      <Features />
      <Stats />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}
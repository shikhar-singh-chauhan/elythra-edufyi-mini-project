import { motion } from 'framer-motion'
import GemScene from './GemScene'
import Navbar from './Navbar'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{ background: 'radial-gradient(circle at 50% 55%, #0c5c44 0%, #062a22 50%, #021410 100%)' }}
    >
      <h1 className="absolute top-28 md:top-24 left-0 w-full text-center text-[20vw] md:text-[18vw] leading-none font-light text-white/20 select-none">
        Auralith
      </h1>

      <div className="absolute inset-0 z-10">
        <GemScene />
      </div>

      <Navbar />

      <div className="relative z-20 pointer-events-none min-h-screen flex flex-col justify-end p-6 md:p-10 pt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-sm"
          >
            <h2 className="text-3xl md:text-5xl font-semibold tracking-wide">FUEL FOR FOUNDERS</h2>
            <p className="mt-4 text-white/70 text-sm">
              Strategic guidance, funding support and growth acceleration for early-stage ventures.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="pointer-events-auto px-6 py-3 rounded-full bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition">
                Get Started
              </a>
              <a href="#about" className="pointer-events-auto px-6 py-3 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition">
                Learn More
              </a>
            </div>
          </motion.div>

          <div className="rounded-2xl bg-white/10 backdrop-blur p-5 w-full md:w-72">
            <p className="text-sm text-white/70">Launching Startups</p>
            <p className="mt-2 text-4xl font-semibold text-emerald-300">86%</p>
            <p className="text-xs text-white/60 mt-1">83% success · 17% failure</p>
          </div>
        </div>
      </div>
    </section>
  )
}
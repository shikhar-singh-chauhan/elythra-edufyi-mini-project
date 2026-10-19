import { motion } from 'framer-motion'
import { Rocket, Lightbulb, Users, ShieldCheck, Target, Globe } from 'lucide-react'

const items = [
  { icon: Rocket, title: 'Launch Support', text: 'From idea to first customers with a clear step-by-step launch plan.' },
  { icon: Lightbulb, title: 'Idea Validation', text: 'Test your concept with real market feedback before you spend big.' },
  { icon: Users, title: 'Mentor Network', text: 'Learn directly from founders and experts who have done it before.' },
  { icon: ShieldCheck, title: 'Funding Readiness', text: 'Get your pitch, numbers and documents investor-ready.' },
  { icon: Target, title: 'Growth Strategy', text: 'Focused plans for marketing, sales and scaling your venture.' },
  { icon: Globe, title: 'Global Reach', text: 'Connect with partners and markets beyond your home city.' },
]

export default function Features() {
  return (
    <section id="about" className="px-6 md:px-10 py-20 md:py-28 max-w-6xl mx-auto">
      <p className="text-emerald-400 text-sm tracking-widest">WHAT WE DO</p>
      <h2 id="services" className="mt-3 text-3xl md:text-5xl font-semibold max-w-2xl">
        Everything an early-stage startup needs
      </h2>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-emerald-400/40 transition"
          >
            <it.icon className="text-emerald-400" size={28} />
            <h3 className="mt-4 text-xl font-medium">{it.title}</h3>
            <p className="mt-2 text-white/60 text-sm leading-relaxed">{it.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ShieldCheck, Zap, Headphones, Plus, Minus, ArrowUpRight } from 'lucide-react'
import PeloraLogo from '../components/PeloraLogo'

const fade = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
}

function Star({ className = '', size = 40 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 40 40">
      <path d="M20 2 L24 16 L38 20 L24 24 L20 38 L16 24 L2 20 L16 16 Z" fill="currentColor" />
    </svg>
  )
}

/* ---------------- NAVBAR ---------------- */
function Nav() {
  const [open, setOpen] = useState(false)
  const links = ['Products', 'Resources', 'Pricing', 'Blog']

  return (
    <header className="sticky top-0 z-30 bg-[#faf8f5]/90 backdrop-blur border-b border-black/5">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-10">
          <a href="#top" className="flex items-center gap-2">
            <PeloraLogo />
            <span className="text-2xl font-semibold text-[#1c2b2e]">pelora</span>
          </a>
          <ul className="hidden md:flex gap-8 text-sm text-[#1c2b2e]">
            {links.map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-[#5f93a3] transition">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-3 text-sm">
          <button className="px-3 py-2 text-[#1c2b2e]">Log in</button>
          <button className="px-4 py-2 rounded-lg border border-black/10 bg-white hover:bg-black/5 transition">Request a demo</button>
          <button className="px-4 py-2 rounded-lg bg-[#1c2b2e] text-white hover:bg-black transition">Apply now</button>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-5 pb-5 flex flex-col gap-4 text-[#1c2b2e]">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
          ))}
          <button className="px-4 py-3 rounded-lg border border-black/10 bg-white">Request a demo</button>
          <button className="px-4 py-3 rounded-lg bg-[#1c2b2e] text-white">Apply now</button>
        </div>
      )}
    </header>
  )
}

/* ---------------- HERO + PRODUCT CARDS ---------------- */
function Hero() {
  return (
    <section id="top" className="max-w-6xl mx-auto px-5 pt-14 md:pt-20">
      <motion.div {...fade} className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold text-[#1c2b2e] leading-tight">
          Manage all spend and cash with Pelora
        </h1>
        <p className="mt-5 text-[#6b7678] text-lg">
          The powerful business banking platform backed by an award-winning customer support team.
        </p>
      </motion.div>

      <div id="products" className="mt-14 grid gap-6 lg:grid-cols-2">
        {/* BIG CARD: Checking */}
        <motion.div {...fade}>
          <div className="relative h-[420px] md:h-[520px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#9cc4b4] to-[#5f93a3]">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-[12%] top-[10%] w-[110px] md:w-[140px] h-[260px] md:h-[330px] rounded-full bg-[#1f3a3f] grid place-items-center"
            >
              <Star className="text-[#f3efe9]" size={56} />
            </motion.div>
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-[42%] top-[14%] w-[110px] md:w-[130px] h-[150px] md:h-[190px] rounded-full bg-[#e6eeee] grid place-items-center"
            >
              <Star className="text-[#1f3a3f]" size={44} />
            </motion.div>

            <div className="absolute right-4 bottom-4 left-4 sm:left-auto sm:w-[280px] rounded-2xl bg-white shadow-xl overflow-hidden">
              <div className="bg-[#9cc4b4]/60 px-4 py-3">
                <p className="text-xs text-[#1f3a3f]/70">All Accounts</p>
                <p className="text-lg font-semibold text-[#1c2b2e]">$ 254,783.37</p>
              </div>
              {['Operating', 'Payroll'].map((n) => (
                <div key={n} className="flex items-center justify-between px-4 py-3 border-t border-black/5">
                  <div>
                    <p className="text-xs text-[#6b7678]">{n} checking</p>
                    <p className="font-medium text-[#1c2b2e]">$ 34,764.42</p>
                  </div>
                  <Star className="text-[#1f3a3f]" size={18} />
                </div>
              ))}
            </div>
          </div>
          <span className="inline-block mt-5 text-xs px-3 py-1 rounded-md bg-[#e1ebea] text-[#1f3a3f]">Send money</span>
          <h3 className="mt-2 text-2xl font-semibold text-[#1c2b2e]">Business Checking Accounts</h3>
          <p className="mt-1 text-[#6b7678] max-w-md">
            Manage your operating cash without annoying ACH fees and enjoy 24/7 customer support.
          </p>
        </motion.div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-8">
          <motion.div {...fade}>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="sm:w-[48%] h-[210px] rounded-2xl bg-[#d8c9bb] p-5 flex flex-col gap-3 justify-center">
                <div className="h-[70px] rounded-full bg-[#2f241c] grid place-items-center text-[#f3efe9]"><Star size={28} /></div>
                <div className="h-[60px] rounded-full bg-[#f3efe9] grid place-items-center text-[#2f241c]"><Star size={26} /></div>
              </div>
              <div className="flex-1 rounded-2xl bg-[#ece6e0] p-5">
                <p className="text-xs text-[#8a8580]">Card Balance</p>
                <div className="mt-3 flex gap-1.5">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} className={`h-4 w-4 rounded-sm ${i < 6 ? 'bg-[#2f241c]' : 'bg-[#cfc8c0]'}`} />
                  ))}
                </div>
                <div className="mt-4 flex gap-8 text-sm">
                  <div><p className="font-medium">$ 7,880</p><p className="text-xs text-[#8a8580]">Spent</p></div>
                  <div><p className="font-medium">$ 3,430</p><p className="text-xs text-[#8a8580]">Remaining</p></div>
                </div>
              </div>
            </div>
            <span className="inline-block mt-5 text-xs px-3 py-1 rounded-md bg-[#ece6e0] text-[#2f241c]">Control Spend</span>
            <h3 className="mt-2 text-2xl font-semibold text-[#1c2b2e]">Business Credit Cards</h3>
            <p className="mt-1 text-[#6b7678] max-w-md">
              Stop non-compliant spend in real time and automate your expense accounting.
            </p>
          </motion.div>

          <hr className="border-black/10" />

          <motion.div {...fade} className="flex flex-col sm:flex-row gap-5 items-start">
            <div className="w-full sm:w-[48%]">
              <div className="h-[110px] rounded-2xl bg-gradient-to-br from-[#2f6b3f] to-[#1e4a2c] grid place-items-center">
                <div className="h-14 w-14 rounded-full bg-[#dfeedd] grid place-items-center text-[#1e4a2c]"><Star size={28} /></div>
              </div>
              <div className="mt-3 rounded-2xl bg-[#dfeedd] p-4">
                <p className="text-xs text-[#4b6b50]">Card Balance</p>
                <p className="font-semibold text-[#1c2b2e]">$ 254,783.37</p>
              </div>
            </div>
            <div>
              <span className="inline-block text-xs px-3 py-1 rounded-md bg-[#dfeedd] text-[#1e4a2c]">Earn yield</span>
              <h3 className="mt-2 text-2xl font-semibold text-[#1c2b2e]">PeloraTreasury</h3>
              <p className="mt-1 text-[#6b7678]">Earn up to 5.30%* yield on your cash with Pelora Treasury.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- WHY PELORA ---------------- */
function Why() {
  const items = [
    { icon: Zap, title: 'Instant transfers', text: 'Move money between accounts and vendors in seconds, with zero hidden fees.' },
    { icon: ShieldCheck, title: 'Bank-grade security', text: 'Real-time fraud alerts, card controls and encrypted data by default.' },
    { icon: Headphones, title: 'Real human support', text: 'Talk to a real person any time, day or night, not a chatbot loop.' },
  ]
  return (
    <section id="resources" className="max-w-6xl mx-auto px-5 py-24">
      <motion.h2 {...fade} className="text-3xl md:text-5xl font-semibold text-[#1c2b2e] text-center">
        Built for businesses that move fast
      </motion.h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl bg-white border border-black/5 p-8 shadow-sm"
          >
            <div className="h-12 w-12 rounded-full bg-[#e1ebea] grid place-items-center text-[#1f3a3f]">
              <it.icon size={22} />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-[#1c2b2e]">{it.title}</h3>
            <p className="mt-2 text-[#6b7678]">{it.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ---------------- STATS ---------------- */
function Stats() {
  const stats = [
    ['$2.4B', 'Processed yearly'],
    ['12,000+', 'Businesses onboarded'],
    ['5.30%', 'Treasury yield*'],
    ['24/7', 'Human support'],
  ]
  return (
    <section id="pricing" className="px-5">
      <motion.div {...fade} className="max-w-6xl mx-auto rounded-3xl bg-[#1f3a3f] text-[#f3efe9] p-10 md:p-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map(([n, l]) => (
          <div key={l}>
            <p className="text-3xl md:text-5xl font-semibold text-[#9cc4b4]">{n}</p>
            <p className="mt-2 text-sm text-[#f3efe9]/70">{l}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

/* ---------------- FAQ ---------------- */
function Faq() {
  const [open, setOpen] = useState(0)
  const qs = [
    ['How long does it take to open an account?', 'Most businesses are approved within one business day after submitting their documents.'],
    ['Are there monthly or ACH fees?', 'No. Pelora checking has no monthly fee and no ACH fees on transfers.'],
    ['How does Pelora Treasury earn yield?', 'Idle cash is placed in secure money-market instruments and the yield is passed on to you.'],
    ['Can my team have their own cards?', 'Yes. Issue unlimited virtual and physical cards with individual spend limits.'],
  ]
  return (
    <section id="blog" className="max-w-3xl mx-auto px-5 py-24">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#1c2b2e] text-center">Frequently asked questions</h2>
      <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
        {qs.map(([q, a], i) => (
          <div key={q} className="py-5">
            <button className="w-full flex items-center justify-between text-left text-lg font-medium text-[#1c2b2e]" onClick={() => setOpen(open === i ? -1 : i)}>
              {q}
              {open === i ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            {open === i && <p className="mt-3 text-[#6b7678]">{a}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------------- CTA + FOOTER ---------------- */
function Footer() {
  return (
    <>
      <section className="px-5 pb-24">
        <motion.div {...fade} className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-br from-[#9cc4b4] to-[#5f93a3] p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#1c2b2e]">Ready to simplify your business banking?</h2>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 rounded-lg bg-[#1c2b2e] text-white inline-flex items-center justify-center gap-2 hover:bg-black transition">
              Apply now <ArrowUpRight size={18} />
            </button>
            <button className="px-6 py-3 rounded-lg bg-white/70 hover:bg-white transition">Request a demo</button>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-black/10 px-5 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#6b7678]">
          <div className="flex items-center gap-2 text-[#1c2b2e]">
            <PeloraLogo size={26} />
            <span className="font-semibold">pelora</span>
          </div>
          <p>© 2026 Pelora · A mini project for Elythra Edufyi</p>
          <p>Designed &amp; developed by Shikhar Singh</p>
        </div>
      </footer>
    </>
  )
}

export default function Pelora() {
  return (
    <div className="bg-[#faf8f5] text-[#1c2b2e] min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Why />
      <Stats />
      <Faq />
      <Footer />
    </div>
  )
}
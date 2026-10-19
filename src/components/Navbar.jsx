import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import AuralithLogo from './AuralithLogo'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 w-full z-30 p-5 md:p-8">
      <nav className="flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <AuralithLogo />
          <span className="text-xl font-medium">Auralith</span>
        </a>

        <ul className="hidden md:flex gap-8 px-8 py-3 rounded-full bg-white/10 backdrop-blur text-sm">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="hover:text-emerald-300 transition">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button className="hidden sm:block px-5 py-2 rounded-full bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition">
            Login / Register
          </button>
          <button
            className="md:hidden p-2 rounded-full bg-white/10 backdrop-blur"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden mt-4 rounded-2xl bg-[#062a22]/95 backdrop-blur p-5 flex flex-col gap-4 border border-white/10">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setOpen(false)} className="block text-lg">
                {l.label}
              </a>
            </li>
          ))}
          <button className="mt-2 px-5 py-3 rounded-full bg-emerald-500 text-black font-medium">
            Login / Register
          </button>
        </ul>
      )}
    </header>
  )
}
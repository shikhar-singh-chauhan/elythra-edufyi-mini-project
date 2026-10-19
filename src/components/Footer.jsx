import AuralithLogo from './AuralithLogo'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 md:px-10 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
        <div className="flex items-center gap-2 text-white">
          <AuralithLogo size={26} />
          <span className="font-medium">Auralith</span>
        </div>
        <p>© 2026 Auralith · A mini project for Elythra Edufyi</p>
        <p>Designed &amp; developed by Shikhar Singh</p>
      </div>
    </footer>
  )
}
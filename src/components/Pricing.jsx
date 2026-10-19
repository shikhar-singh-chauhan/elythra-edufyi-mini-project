import { Check } from 'lucide-react'

const plans = [
  { name: 'Starter', price: '$0', note: 'For first-time founders', perks: ['Idea review', 'Community access', '1 mentor session'], highlight: false },
  { name: 'Growth', price: '$49', note: 'Most popular', perks: ['Everything in Starter', 'Weekly mentoring', 'Pitch deck review', 'Investor introductions'], highlight: true },
  { name: 'Scale', price: '$149', note: 'For funded teams', perks: ['Everything in Growth', 'Dedicated advisor', 'Growth strategy', 'Priority support'], highlight: false },
]

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 md:px-10 py-20 md:py-28 max-w-6xl mx-auto">
      <p className="text-emerald-400 text-sm tracking-widest text-center">PRICING</p>
      <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-center">Simple plans, no surprises</h2>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-3xl p-8 border transition ${
              p.highlight
                ? 'bg-emerald-500 text-black border-emerald-300 md:scale-105'
                : 'bg-white/5 border-white/10 hover:border-emerald-400/40'
            }`}
          >
            <h3 className="text-xl font-medium">{p.name}</h3>
            <p className={`text-sm ${p.highlight ? 'text-black/70' : 'text-white/50'}`}>{p.note}</p>
            <p className="mt-5 text-5xl font-semibold">
              {p.price}<span className="text-base font-normal">/mo</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {p.perks.map((perk) => (
                <li key={perk} className="flex items-center gap-2">
                  <Check size={16} /> {perk}
                </li>
              ))}
            </ul>
            <button
              className={`mt-8 w-full py-3 rounded-full font-medium transition ${
                p.highlight ? 'bg-black text-white hover:bg-black/80' : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              Choose {p.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
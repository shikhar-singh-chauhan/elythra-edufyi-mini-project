import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 2,
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to])

  return <span ref={ref}>{value}{suffix}</span>
}

const stats = [
  { to: 500, suffix: '+', label: 'Startups launched' },
  { to: 86, suffix: '%', label: 'Success rate' },
  { to: 120, suffix: '+', label: 'Expert mentors' },
  { to: 25, suffix: 'M', label: 'Funding raised ($)' },
]

export default function Stats() {
  return (
    <section className="px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-br from-emerald-500/20 to-emerald-900/20 border border-emerald-400/20 p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-4xl md:text-5xl font-semibold text-emerald-300">
              <Counter to={s.to} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm text-white/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
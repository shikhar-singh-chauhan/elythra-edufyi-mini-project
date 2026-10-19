import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    e.target.reset()
  }

  return (
    <section id="contact" className="px-6 md:px-10 py-20">
      <div className="max-w-3xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-semibold">Ready to launch your startup?</h2>
        <p className="mt-3 text-white/60">Tell us about your idea and our team will get back to you.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <input required placeholder="Your name" className="rounded-xl bg-white/10 px-4 py-3 outline-none focus:ring-2 ring-emerald-400" />
          <input required type="email" placeholder="Email address" className="rounded-xl bg-white/10 px-4 py-3 outline-none focus:ring-2 ring-emerald-400" />
          <textarea required rows="4" placeholder="Describe your startup idea" className="rounded-xl bg-white/10 px-4 py-3 outline-none focus:ring-2 ring-emerald-400" />
          <button className="rounded-full bg-emerald-500 text-black font-medium py-3 hover:bg-emerald-400 transition">
            Send message
          </button>
          {sent && <p className="text-emerald-300 text-sm">Thank you! We will contact you soon.</p>}
        </form>
      </div>
    </section>
  )
}
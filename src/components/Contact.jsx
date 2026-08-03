import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { profile, formspreeEndpoint } from '../data/portfolioData'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      if (res.ok) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Let's build something."
          description="Have a project in mind, or just want to say hello? The form below lands straight in my inbox."
        />

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left: direct contact info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-6"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-start gap-4 p-5 rounded-xl border border-border bg-panel/50 hover:border-gold/40 transition-colors"
            >
              <Mail className="text-gold shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-sm text-muted">Contactno / Whatsapp</p>
                <p className="text-ink font-mono text-sm break-all">{profile.contactNo}</p>
              </div>
            </a>
            <div className="flex items-start gap-4 p-5 rounded-xl border border-border bg-panel/50">
              <MapPin className="text-cyan shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-sm text-muted">Location</p>
                <p className="text-ink font-mono text-sm">{profile.location}</p>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 rounded-xl border border-border bg-panel/50 p-6 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block font-mono text-xs uppercase tracking-widest text-muted mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-ink placeholder:text-muted/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-mono text-xs uppercase tracking-widest text-muted mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-ink placeholder:text-muted/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-xs uppercase tracking-widest text-muted mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-ink placeholder:text-muted/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center gap-2 bg-gold text-bg font-medium px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-gold/30 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
            >
              {status === 'sending' ? (
                'Sending...'
              ) : (
                <>
                  <Send size={16} /> Send message
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="flex items-center gap-2 text-sm text-cyan font-mono">
                <CheckCircle2 size={16} /> Message sent — I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="flex items-center gap-2 text-sm text-red-400 font-mono">
                <AlertCircle size={16} /> Something went wrong. Try emailing me directly instead.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

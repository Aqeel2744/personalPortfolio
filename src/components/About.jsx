import { motion } from 'framer-motion'
import { Code2, Layers, Zap } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolioData'

const highlights = [
  {
    icon: Layers,
    title: 'Full-stack by default',
    text: 'Comfortable owning a feature end to end — schema, API, and the interface it ships in.',
  },
  {
    icon: Zap,
    title: 'AI-assisted workflow',
    text: 'Uses tools like Claude, OpenAI and Antigravity to prototype faster and catch issues earlier.',
  },
  {
    icon: Code2,
    title: 'Clean, structured code',
    text: 'Writes code that is easy to extend — clear structure now saves rework later.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="A developer who ships."
          description={profile.description}
        />

        <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl border border-border bg-panel/50 hover:border-gold/40 hover:bg-panel transition-all"
            >
              <h.icon className="text-gold mb-4" size={24} />
              <h3 className="font-display text-lg font-medium text-ink mb-2">{h.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skillGroups, toolItems } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          index="02"
          eyebrow="Tech stack"
          title="What I build with."
          description="The languages, frameworks and data layers I reach for most, plus the tools and AI copilots that keep the workflow moving."
        />

        {/* Core stack, grouped */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="rounded-xl border border-border bg-panel/50 p-5"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-4">
                {group.label}
              </p>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-ink text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tools & AI, presented like an installed-dependencies list */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-border bg-panel/50 overflow-hidden"
        >
          <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-panelLight/60">
            <span className="font-mono text-xs text-muted">Tools</span>
       
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {toolItems.map((tool) => (
              <div
                key={tool.name}
                className="group bg-panel px-5 py-4 hover:bg-panelLight transition-colors flex items-center justify-between"
              >
                <span className="font-mono text-sm text-ink group-hover:text-gold transition-colors">
                  {tool.name}
                </span>
                <span className="font-mono text-xs text-muted">{tool.category}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

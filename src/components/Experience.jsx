import { useState } from 'react'
import { motion } from 'framer-motion'
import { GitCommitHorizontal, Award } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Lightbox from './Lightbox'
import { experience } from '../data/portfolioData'

export default function Experience() {
  const [activeCert, setActiveCert] = useState(null)

  return (
    <section id="experience" className="relative py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          index="04"
          eyebrow="Experience"
          title="I've worked with."
          description="A quick history of where I've worked"
        />

        <div className="relative pl-8 md:pl-10">
          {/* vertical line */}
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={`${job.company}-${i}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-8 md:-left-10 top-1 w-4 h-4 rounded-full bg-bg border-2 border-gold flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                </span>

                <div className="rounded-xl border border-border bg-panel/50 p-6 hover:border-cyan/40 transition-colors">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                    <GitCommitHorizontal size={16} className="text-cyan" />
                    <span className="font-mono text-xs text-muted">{job.period}</span>
                  </div>
                  <h3 className="font-display text-xl font-medium text-ink">
                    {job.role} <span className="text-muted font-normal">· {job.company}</span>
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed max-w-2xl">
                    {job.summary}
                  </p>
                  {job.stack?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.stack.map((s) => (
                        <span
                          key={s}
                          className="font-mono text-xs text-cyan bg-cyan/10 border border-cyan/20 rounded-full px-3 py-1"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  {job.certificates?.length > 0 && (
                    <div className="mt-5 pt-5 border-t border-border">
                      <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">
                        {job.certificates.length > 1 ? 'Certificates' : 'Certificate'}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {job.certificates.map((cert) => (
                          <button
                            key={cert.url}
                            type="button"
                            onClick={() => setActiveCert(cert)}
                            className="group flex items-center gap-3 rounded-lg border border-border bg-bg/60 hover:border-gold/50 transition-colors overflow-hidden pr-4"
                          >
                            <span className="w-16 h-16 shrink-0 bg-panelLight overflow-hidden flex items-center justify-center">
                              <img
                                src={cert.url}
                                alt={cert.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              />
                            </span>
                            <span className="flex items-center gap-1.5 font-mono text-xs text-ink group-hover:text-gold transition-colors">
                              <Award size={14} className="text-gold shrink-0" />
                              {cert.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Lightbox item={activeCert} onClose={() => setActiveCert(null)} />
    </section>
  )
}

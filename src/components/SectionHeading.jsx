import { motion } from 'framer-motion'

/**
 * Consistent section header used across the page.
 * `index` renders like a commit/step number (e.g. "02") — pass as string.
 */
export default function SectionHeading({ index, eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-12 md:mb-16"
    >
      <div className="flex items-center gap-3 mb-3">
        {index && (
          <span className="font-mono text-xs text-gold border border-gold/30 rounded px-2 py-1">
            {index}
          </span>
        )}
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}

import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2 } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { projects } from '../data/portfolioData'

function ProjectCard({ project, index }) {
  const hasLinks = project.links?.demo || project.links?.github

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group rounded-xl border border-border bg-panel/50 overflow-hidden hover:border-gold/40 transition-colors flex flex-col"
    >
      <div className="aspect-video bg-panelLight border-b border-border flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <Code2 className="text-border group-hover:text-cyan/40 transition-colors" size={40} />
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-lg font-medium text-ink mb-2">{project.title}</h3>
        <p className="text-sm text-muted leading-relaxed flex-1">{project.description}</p>

        {project.stack?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-xs text-gold bg-gold/10 border border-gold/20 rounded-full px-3 py-1"
              >
                {s}
              </span>
            ))}
          </div>
        )}

        {hasLinks && (
          <div className="mt-5 pt-5 border-t border-border flex items-center gap-4">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-ink hover:text-gold transition-colors"
              >
                <ExternalLink size={14} /> Live demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-ink hover:text-gold transition-colors"
              >
                <Github size={14} /> Source
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title="Things I've built."
          description=" Projects i have worked on, showcasing my skills and experience in web development. Each project highlights my ability to create functional and visually appealing applications."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

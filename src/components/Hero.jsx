import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin } from 'lucide-react'
import { profile } from '../data/portfolioData'

// The "code" that gets typed out inside the terminal panel.
// Edit this array to change what the terminal types.
const CODE_LINES = [
  { text: 'const developer = {', color: 'text-ink' },
  { text: `  name: 'Aqeel Ahmed Sheikh',`, color: 'text-cyan', indent: true },
  { text: `  role: 'Web Developer',`, color: 'text-cyan', indent: true },
  { text: `  stack: ['React', 'Next.js', 'Node.js'],`, color: 'text-gold', indent: true },
  { text: `  status: 'open to opportunities',`, color: 'text-cyan', indent: true },
  { text: '};', color: 'text-ink' },
]

function TypingTerminal() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (lineIndex >= CODE_LINES.length) {
      setDone(true)
      return
    }
    const currentLine = CODE_LINES[lineIndex].text
    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => setCharIndex((c) => c + 1), 22)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setLineIndex((l) => l + 1)
        setCharIndex(0)
      }, 220)
      return () => clearTimeout(timeout)
    }
  }, [charIndex, lineIndex])

  return (
    <div className="relative rounded-xl border border-border bg-panel/80 backdrop-blur-sm shadow-2xl shadow-black/40 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-panelLight/60">
        <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
        <span className="ml-3 font-mono text-xs text-muted">aqeel.dev — profile.js</span>
      </div>
      <div className="p-6 font-mono text-sm leading-relaxed min-h-[220px]">
        {CODE_LINES.slice(0, lineIndex + (charIndex > 0 || lineIndex === CODE_LINES.length ? 1 : 0)).map(
          (line, i) => {
            const isCurrent = i === lineIndex && !done
            const shown = isCurrent ? line.text.slice(0, charIndex) : line.text
            return (
              <div key={i} className={`${line.indent ? 'pl-4' : ''} ${line.color}`}>
                {shown}
                {isCurrent && <span className="inline-block w-2 h-4 ml-0.5 bg-gold animate-blink align-middle" />}
              </div>
            )
          }
        )}
        {done && <span className="inline-block w-2 h-4 bg-gold animate-blink align-middle" />}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* background layer: grid pattern + glow blobs, isolated from content so
          the mask-image used for the fade effect never touches real text */}
      <div className="absolute inset-0 grid-fade pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl animate-float pointer-events-none"
        style={{ animationDelay: '2s' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan border border-cyan/30 rounded-full px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            Available for work
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-ink">
            Hi, I'm <span className="text-gradient">{profile.firstName}</span>
            <br />I build for the web.
          </h1>

          <p className="mt-6 text-lg text-muted max-w-lg leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="bg-gold text-bg font-medium px-6 py-3 rounded-full hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5 transition-all"
            >
              Let's talk
            </a>
            <a
              href="#experience"
              className="border border-border text-ink px-6 py-3 rounded-full hover:border-cyan hover:text-cyan transition-colors"
            >
              View experience
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-muted">
            {profile.socials.github && (
              <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-ink transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            )}
            {profile.socials.linkedin && (
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            )}
            
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          <TypingTerminal />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-gold transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to about section"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}

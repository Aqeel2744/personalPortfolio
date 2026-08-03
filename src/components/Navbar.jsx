import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/portfolioData'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the full-screen mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${
        open 
          ? 'bg-bg border-b border-border' // Uses your exact website background when open
          : scrolled 
            ? 'bg-bg/90 backdrop-blur-lg border-b border-border' 
            : 'bg-transparent'
      }`}
    >
      <nav className="relative z-[110] max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" onClick={closeMenu} className="font-display font-semibold text-lg tracking-tight">
          <span className="text-gold">&lt;</span>
          Aqeel<span className="text-cyan">.dev</span>
          <span className="text-gold">/&gt;</span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-ink transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          
        </div>

        <button
          type="button"
          className="md:hidden relative z-[110] text-ink p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Full-screen mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 top-16 z-[105] bg-bg" 
          >
            <div className="flex flex-col px-6 py-10 gap-2 font-mono text-lg">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="block w-full py-4 border-b border-border text-ink hover:text-gold transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
             
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
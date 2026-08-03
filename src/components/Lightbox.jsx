import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

/**
 * Full-screen image viewer. Pass `item` as { name, url } or null to hide.
 */
export default function Lightbox({ item, onClose }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-sm flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full max-h-[85vh] rounded-xl overflow-hidden border border-border bg-panel"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <span className="font-mono text-sm text-ink">{item.name}</span>
              <button
                type="button"
                onClick={onClose}
                className="text-muted hover:text-gold transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            <div className="max-h-[75vh] overflow-auto flex items-center justify-center bg-bg">
              <img src={item.url} alt={item.name} className="w-full h-auto object-contain" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

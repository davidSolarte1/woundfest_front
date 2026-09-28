import { useCallback, useEffect, useState } from 'react'
import SectionTitle from './ui/SectionTitle'

const SPEAKERS = Array.from({ length: 19 }, (_, i) => ({
  src: `/images/ponentes/${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `Ponente ${i + 1} — Wound Fest`,
}))

const navButtonClass =
  'flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition-colors duration-200 hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)]'

export default function SpeakersSection() {
  const [openIndex, setOpenIndex] = useState(null)
  const isOpen = openIndex !== null

  const close = useCallback(() => setOpenIndex(null), [])
  const prev = useCallback(() => setOpenIndex((i) => (i - 1 + SPEAKERS.length) % SPEAKERS.length), [])
  const next = useCallback(() => setOpenIndex((i) => (i + 1) % SPEAKERS.length), [])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, close, prev, next])

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Expertos invitados" title="PONENTES" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SPEAKERS.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Ampliar ${item.alt}`}
              className="group block cursor-zoom-in overflow-hidden rounded-2xl border shadow-sm transition-shadow duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)]"
              style={{ borderColor: 'var(--color-border)', background: '#FFFFFF' }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width={1200}
                height={1553}
                className="block h-auto w-full transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={SPEAKERS[openIndex].alt}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center gap-2 p-4 sm:gap-4"
          style={{ background: 'rgba(15,15,35,0.92)' }}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Ponente anterior"
            className={navButtonClass}
          >
            ‹
          </button>
          <img
            src={SPEAKERS[openIndex].src}
            alt={SPEAKERS[openIndex].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] min-w-0 max-w-full rounded-lg object-contain shadow-2xl"
          />
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Ponente siguiente"
            className={navButtonClass}
          >
            ›
          </button>
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar"
            className={`${navButtonClass} absolute right-4 top-4`}
          >
            ×
          </button>
        </div>
      )}
    </section>
  )
}

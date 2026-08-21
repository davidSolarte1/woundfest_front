import { Link } from 'react-router-dom'
import { EVENT_NAME, EVENT_SUBTITLE } from '../data/eventData'

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{ borderColor: 'var(--color-border)', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)' }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)] rounded-lg">
          <img src="/images/logo.jpeg" alt="Logo Wound Fest" className="h-10 w-10 rounded-full object-cover shadow-sm" />
          <div className="leading-tight">
            <span className="block text-xl tracking-widest" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>
              {EVENT_NAME}
            </span>
            <span className="block text-xs tracking-widest" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-gold)' }}>
              {EVENT_SUBTITLE}
            </span>
          </div>
        </Link>

        <Link
          to="/registro"
          className="rounded-lg px-5 py-2 text-sm font-bold tracking-wider text-white transition-colors duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)] focus:ring-offset-2"
          style={{ background: 'var(--color-primary)', fontFamily: 'var(--font-heading)', letterSpacing: '0.1em' }}
        >
          REGISTRARME
        </Link>
      </nav>
    </header>
  )
}

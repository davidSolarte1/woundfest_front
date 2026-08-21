import { Link } from 'react-router-dom'
import RegistrationForm from '../components/RegistrationForm'
import { EVENT_DATE, EVENT_LOCATION, EVENT_FULL_NAME } from '../data/eventData'
import CalendarIcon from '../components/icons/CalendarIcon'
import LocationIcon from '../components/icons/LocationIcon'

export default function RegistrationPage() {
  return (
    <div style={{ background: 'rgba(244,246,255,0.93)', minHeight: '100dvh', fontFamily: 'var(--font-body)' }}>
      {/* Header mínimo */}
      <header
        className="border-b px-6 py-3"
        style={{ borderColor: 'var(--color-border)', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)' }}
      >
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/logo.jpeg" alt="Logo Wound Fest" className="h-9 w-9 rounded-full object-cover" />
            <div className="leading-tight">
              <span className="block text-lg tracking-widest" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>
                WOUND FEST
              </span>
              <span className="block text-xs tracking-widest" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-gold)' }}>
                EL RETO
              </span>
            </div>
          </div>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 hover:underline focus:outline-none focus:underline"
            style={{ color: 'var(--color-primary)' }}
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="px-6 py-10">
        <div className="mx-auto max-w-2xl">
          {/* Info compacta del evento */}
          <div
            className="mb-8 rounded-xl border p-5"
            style={{ borderColor: 'var(--color-border)', background: '#FFFFFF' }}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--color-muted-foreground)' }}>
              Inscripción al congreso
            </p>
            <h1 className="text-3xl sm:text-4xl mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>
              {EVENT_FULL_NAME}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'var(--color-body-text)' }}>
              <div className="flex items-center gap-1.5">
                <CalendarIcon className="h-4 w-4 shrink-0" style={{ color: 'var(--color-primary)' }} />
                <span>{EVENT_DATE}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <LocationIcon className="h-4 w-4 shrink-0" style={{ color: 'var(--color-primary)' }} />
                <span>{EVENT_LOCATION}</span>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div
            className="rounded-2xl border bg-white p-8 shadow-sm"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <h2 className="mb-6 text-2xl" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>
              DATOS DE REGISTRO
            </h2>
            <RegistrationForm />
          </div>
        </div>
      </main>

      <footer className="px-6 py-6 text-center text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
        © {new Date().getFullYear()} Wound Fest · Todos los derechos reservados
      </footer>
    </div>
  )
}

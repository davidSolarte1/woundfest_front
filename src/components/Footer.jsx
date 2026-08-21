import { EVENT_EMAIL } from '../data/eventData'

export default function Footer() {
  return (
    <footer
      className="px-6 py-10"
      style={{ background: 'var(--color-primary)' }}
    >
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p
            className="text-lg tracking-widest text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            WOUND FEST — EL RETO
          </p>
          <p className="text-xs mt-1 text-blue-200">
            2do Congreso Suramericano de Heridas, Ostomía e Incontinencia
          </p>
        </div>
        <div className="text-sm text-blue-200">
          <p>Más información:</p>
          <a
            href={`mailto:${EVENT_EMAIL}`}
            className="text-white hover:underline focus:outline-none focus:underline"
          >
            {EVENT_EMAIL}
          </a>
          <p className="mt-3 text-xs text-blue-300">
            © {new Date().getFullYear()} Wound Fest · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}

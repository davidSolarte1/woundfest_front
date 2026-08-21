import SectionTitle from './ui/SectionTitle'
import { SCHEDULE } from '../data/eventData'

export default function ScheduleSection() {
  return (
    <section className="px-6 py-20" style={{ background: 'rgba(255,255,255,0.90)' }}>
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Programa" title="DOS DÍAS DE CONGRESO" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {SCHEDULE.map((day, idx) => (
            <DayCard key={day.day} day={day} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DayCard({ day, index }) {
  return (
    <div
      className="rounded-xl border p-6 shadow-sm"
      style={{
        borderColor: 'var(--color-border)',
        background: 'var(--color-muted)',
        borderLeftColor: 'var(--color-primary)',
        borderLeftWidth: '4px',
      }}
    >
      <p
        className="mb-1 text-xs font-bold uppercase tracking-widest"
        style={{ color: 'var(--color-muted-foreground)' }}
      >
        {day.day}
      </p>
      <h3
        className="text-2xl"
        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}
      >
        {day.title}
      </h3>
      <ul className="mt-4 space-y-2" aria-label={`Actividades ${day.day}`}>
        {day.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-body-text)' }}>
            <span
              className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
              style={{ background: 'var(--color-primary)' }}
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

import SectionTitle from './ui/SectionTitle'

const ENDORSEMENTS = [
  { src: '/images/ACICHE.jpeg', alt: 'Aciche — Asociación Colombiana de Heridas' },
  { src: '/images/Cooperativa.jpeg', alt: 'Cooperativa — aval académico Wound Fest' },
]

export default function AcademicEndorsementSection() {
  return (
    <section className="px-6 py-20" style={{ background: 'rgba(255,255,255,0.90)' }}>
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Respaldo institucional" title="AVAL ACADÉMICO" />
        <div className="mt-10 grid grid-cols-1 items-center gap-6 sm:grid-cols-2 sm:max-w-3xl sm:mx-auto">
          {ENDORSEMENTS.map((item) => (
            <div
              key={item.src}
              className="flex items-center justify-center overflow-hidden rounded-2xl border p-6 shadow-sm"
              style={{ borderColor: 'var(--color-border)', background: '#FFFFFF' }}
            >
              <img src={item.src} alt={item.alt} className="w-full h-auto block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

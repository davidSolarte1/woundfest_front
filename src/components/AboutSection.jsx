export default function AboutSection() {
  return (
    <section
      className="px-6 py-20 border-y"
      style={{ background: 'rgba(244,246,255,0.92)', borderColor: 'var(--color-border)' }}
    >
      <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border shadow-sm" style={{ borderColor: 'var(--color-border)' }}>
        <img
          src="/images/banner-2.jpeg"
          alt="Wound Fest El Reto — 2do Congreso Suramericano de Heridas, Ostomía e Incontinencia. San Juan de Pasto, 15 y 16 de Octubre 2026, Hotel Cuéllar's. Talleres, ponencias académicas, muestra comercial, certificado."
          className="w-full block"
        />
      </div>
    </section>
  )
}

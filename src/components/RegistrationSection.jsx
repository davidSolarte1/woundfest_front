import SectionTitle from './ui/SectionTitle'
import RegistrationForm from './RegistrationForm'

export default function RegistrationSection() {
  return (
    <section
      id="registro"
      className="px-6 py-20 border-t"
      style={{ background: 'rgba(244,246,255,0.93)', borderColor: 'var(--color-border)' }}
    >
      <div className="mx-auto max-w-2xl">
        <SectionTitle eyebrow="Inscripción" title="ASEGURA TU LUGAR" />
        <p className="mt-4 mb-10 text-center text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
          Diligencia el formulario y recibe la confirmación de tu registro en tu correo electrónico.
        </p>
        <div
          className="rounded-2xl border bg-white p-8 shadow-sm"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <RegistrationForm />
        </div>
      </div>
    </section>
  )
}

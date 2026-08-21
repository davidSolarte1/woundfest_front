import { useState } from 'react'
import { createRegistration } from '../api/registrations'

const OCUPACION_OPTIONS = [
  { value: '', label: 'Selecciona tu ocupación' },
  { value: 'invitado', label: 'Invitado' },
  { value: 'ponente', label: 'Ponente' },
  { value: 'profesional', label: 'Profesional' },
  { value: 'estudiante', label: 'Estudiante' },
]

const INITIAL_FORM = {
  nombres: '',
  apellidos: '',
  numero_documento: '',
  celular: '',
  correo: '',
  ocupacion: '',
  institucion: '',
}

function getServerErrorMessage(err) {
  const data = err.response?.data
  if (!data) return 'No se pudo conectar con el servidor. Intenta de nuevo.'
  if (typeof data.detail === 'string') return data.detail

  const [field] = Object.keys(data)
  const fieldMessages = field && data[field]
  if (Array.isArray(fieldMessages) && fieldMessages.length > 0) {
    return fieldMessages[0]
  }

  return 'Error al enviar el formulario. Intenta de nuevo.'
}

const INPUT_BASE =
  'w-full min-h-[44px] rounded-lg border px-3 py-2.5 text-sm bg-white text-[var(--color-body-text)] placeholder:text-[var(--color-muted-foreground)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)]'

export default function RegistrationForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [serverError, setServerError] = useState('')

  const validate = () => {
    const next = {}
    if (!form.nombres.trim()) next.nombres = 'El nombre es requerido.'
    if (!form.apellidos.trim()) next.apellidos = 'Los apellidos son requeridos.'
    if (!form.numero_documento.trim()) next.numero_documento = 'El número de documento es requerido.'
    if (!form.celular.trim()) next.celular = 'El celular es requerido.'
    if (!form.correo.trim()) {
      next.correo = 'El correo es requerido.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) {
      next.correo = 'Ingresa un correo válido.'
    }
    if (!form.ocupacion) next.ocupacion = 'Selecciona una ocupación.'
    if (!form.institucion.trim()) next.institucion = 'La institución es requerida.'
    return next
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      const firstErrorField = document.querySelector('[data-field-error]')
      firstErrorField?.focus()
      return
    }
    setStatus('loading')
    setServerError('')
    try {
      await createRegistration(form)
      setStatus('success')
      setForm(INITIAL_FORM)
    } catch (err) {
      setStatus('error')
      setServerError(getServerErrorMessage(err))
    }
  }

  if (status === 'success') {
    return (
      <div
        role="alert"
        className="rounded-xl border p-8 text-center"
        style={{ borderColor: 'var(--color-primary)', background: 'var(--color-muted)' }}
      >
        <svg
          className="mx-auto mb-4 h-12 w-12"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
          style={{ color: 'var(--color-primary)' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="mb-2 text-2xl" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>
          ¡Registro exitoso!
        </h3>
        <p style={{ color: 'var(--color-muted-foreground)' }}>
          Tu registro fue recibido. Te esperamos en Wound Fest — El Reto.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 cursor-pointer rounded-lg border px-6 py-2 text-sm font-semibold transition-colors duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)] focus:ring-offset-2"
          style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.color = '#fff' }}
          onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = 'var(--color-primary)' }}
        >
          Registrar otro asistente
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Formulario de registro Wound Fest">
      {status === 'error' && (
        <div
          role="alert"
          aria-live="assertive"
          className="mb-6 rounded-lg border p-4 text-sm"
          style={{ borderColor: 'var(--color-destructive)', background: '#FEF2F2', color: 'var(--color-destructive)' }}
        >
          {serverError}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombres"           name="nombres"          type="text"  value={form.nombres}          error={errors.nombres}          onChange={handleChange} autoComplete="given-name"  required />
        <Field label="Apellidos"         name="apellidos"        type="text"  value={form.apellidos}        error={errors.apellidos}        onChange={handleChange} autoComplete="family-name" required />
        <Field label="Número de documento" name="numero_documento" type="text" inputMode="numeric" value={form.numero_documento} error={errors.numero_documento} onChange={handleChange} required />
        <Field label="Celular"           name="celular"          type="tel"   inputMode="tel"  value={form.celular}   error={errors.celular}   onChange={handleChange} autoComplete="tel" required />

        <div className="sm:col-span-2">
          <Field label="Correo electrónico" name="correo" type="email" inputMode="email" value={form.correo} error={errors.correo} onChange={handleChange} autoComplete="email" required />
        </div>

        {/* Ocupación */}
        <div>
          <label htmlFor="ocupacion" className="mb-1 block text-sm font-semibold" style={{ color: 'var(--color-body-text)' }}>
            Ocupación <span style={{ color: 'var(--color-destructive)' }} aria-hidden="true">*</span>
            <span className="sr-only">(requerido)</span>
          </label>
          <select
            id="ocupacion"
            name="ocupacion"
            value={form.ocupacion}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.ocupacion}
            aria-describedby={errors.ocupacion ? 'ocupacion-error' : undefined}
            className={`${INPUT_BASE} cursor-pointer ${
              errors.ocupacion ? 'border-[var(--color-destructive)]' : 'border-[var(--color-border)] hover:border-[var(--color-primary)]'
            }`}
          >
            {OCUPACION_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.ocupacion && (
            <p id="ocupacion-error" role="alert" data-field-error className="mt-1 text-xs" style={{ color: 'var(--color-destructive)' }}>
              {errors.ocupacion}
            </p>
          )}
        </div>

        <Field label="Institución / Empresa" name="institucion" type="text" value={form.institucion} error={errors.institucion} onChange={handleChange} autoComplete="organization" required />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-8 w-full min-h-[48px] cursor-pointer rounded-xl px-6 py-3 text-lg font-bold tracking-widest text-white transition-colors duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        style={{
          fontFamily: 'var(--font-heading)',
          background: 'var(--color-primary)',
          boxShadow: '0 4px 20px rgba(13,27,142,0.25)',
        }}
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Enviando...
          </span>
        ) : (
          'REGISTRARME'
        )}
      </button>
    </form>
  )
}

function Field({ label, name, type, value, error, onChange, required, autoComplete, inputMode }) {
  const inputId = `field-${name}`
  const errorId = `${name}-error`
  return (
    <div>
      <label htmlFor={inputId} className="mb-1 block text-sm font-semibold" style={{ color: 'var(--color-body-text)' }}>
        {label}{' '}
        {required && (
          <>
            <span style={{ color: 'var(--color-destructive)' }} aria-hidden="true">*</span>
            <span className="sr-only">(requerido)</span>
          </>
        )}
      </label>
      <input
        id={inputId}
        name={name}
        type={type}
        inputMode={inputMode}
        value={value}
        onChange={onChange}
        required={required}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        autoComplete={autoComplete}
        className={`${INPUT_BASE} ${
          error
            ? 'border-[var(--color-destructive)]'
            : 'border-[var(--color-border)] hover:border-[var(--color-primary)]'
        }`}
      />
      {error && (
        <p id={errorId} role="alert" data-field-error className="mt-1 text-xs" style={{ color: 'var(--color-destructive)' }}>
          {error}
        </p>
      )}
    </div>
  )
}

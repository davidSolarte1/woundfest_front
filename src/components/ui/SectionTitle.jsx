export default function SectionTitle({ eyebrow, title }) {
  return (
    <div className="text-center">
      {eyebrow && (
        <p
          className="mb-2 text-xs font-bold uppercase tracking-widest"
          style={{ color: 'var(--color-muted-foreground)' }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="text-4xl sm:text-5xl"
        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}
      >
        {title}
      </h2>
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import SectionTitle from './ui/SectionTitle'
import { SCHEDULE } from '../data/eventData'

const GOLD_TEXT = 'color-mix(in srgb, var(--color-gold) 65%, black)'

export default function ScheduleSection() {
  return (
    <section className="px-6 py-20" style={{ background: 'rgba(255,255,255,0.90)' }}>
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Programa" title="DOS DÍAS DE CONGRESO" />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {SCHEDULE.map((day) => (
            <DayCard key={day.day} day={day} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DayCard({ day }) {
  const scrollRef = useRef(null)
  const [hasMore, setHasMore] = useState(false)
  const [hasBefore, setHasBefore] = useState(false)

  const updateScrollState = () => {
    const el = scrollRef.current
    if (!el) return
    setHasMore(el.scrollHeight - el.clientHeight - el.scrollTop > 4)
    setHasBefore(el.scrollTop > 4)
  }

  useEffect(() => {
    updateScrollState()
    window.addEventListener('resize', updateScrollState)
    return () => window.removeEventListener('resize', updateScrollState)
  }, [])

  return (
    <div
      className="flex flex-col rounded-xl border p-6 shadow-sm sm:p-8"
      style={{
        borderColor: 'var(--color-border)',
        background: 'var(--color-muted)',
        boxShadow: 'inset 4px 0 0 0 var(--color-primary)',
      }}
    >
      <div className="mb-5 sm:mb-6">
        <p
          className="text-sm font-bold uppercase tracking-widest sm:text-base"
          style={{ color: 'var(--color-muted-foreground)' }}
        >
          {day.day}
        </p>
        <h3
          className="text-4xl leading-none sm:text-6xl"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}
        >
          {day.date}
        </h3>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="schedule-scroll h-96 scroll-smooth space-y-6 overflow-y-auto pr-2 sm:h-[34rem] sm:space-y-8"
        >
          {day.blocks.map((block) => (
            <BlockSection key={block.period} block={block} />
          ))}
        </div>

        {hasBefore && (
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-10"
            style={{ background: 'linear-gradient(to bottom, var(--color-muted), transparent)' }}
          />
        )}

        {hasMore && (
          <>
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-12"
              style={{ background: 'linear-gradient(to top, var(--color-muted), transparent)' }}
            />
            <span
              className="schedule-bounce pointer-events-none absolute bottom-1 left-1/2 text-xl"
              style={{ color: 'var(--color-primary)' }}
              aria-hidden="true"
            >
              ↓
            </span>
          </>
        )}
      </div>
    </div>
  )
}

function BlockSection({ block }) {
  return (
    <div>
      <p
        className="mb-3 text-base font-bold uppercase tracking-widest sm:text-xl"
        style={{ color: 'var(--color-primary)' }}
      >
        {block.period}
      </p>
      {block.type === 'talleres' ? (
        <TalleresList block={block} />
      ) : (
        <TalksList talks={block.talks} period={block.period} />
      )}
    </div>
  )
}

function ScheduleRow({ time, highlight, children }) {
  if (!time) {
    return (
      <li
        className="rounded-lg border p-4 text-center"
        style={{
          borderColor: highlight ? GOLD_TEXT : 'var(--color-border)',
          background: '#FFFFFF',
        }}
      >
        {children}
      </li>
    )
  }

  return (
    <li
      className="flex gap-4 rounded-lg border p-4"
      style={{
        borderColor: highlight ? GOLD_TEXT : 'var(--color-border)',
        background: '#FFFFFF',
      }}
    >
      <span
        className="w-20 shrink-0 pt-0.5 text-sm font-bold sm:w-28 sm:text-lg"
        style={{ color: highlight ? GOLD_TEXT : 'var(--color-primary)' }}
      >
        {time}
      </span>
      <div className="min-w-0 flex-1">{children}</div>
    </li>
  )
}

function TalksList({ talks, period }) {
  return (
    <ul className="space-y-3" aria-label={`Ponencias ${period}`}>
      {talks.map((talk) => (
        <ScheduleRow key={`${talk.time ?? ''}-${talk.title}`} time={talk.time} highlight={talk.highlight}>
          <p
            className="text-base font-semibold sm:text-xl"
            style={{ color: talk.highlight ? GOLD_TEXT : 'var(--color-body-text)' }}
          >
            {talk.title}
          </p>
          {talk.speaker && (
            <p className="mt-1 text-sm sm:text-base" style={{ color: 'var(--color-muted-foreground)' }}>
              {talk.speaker}
            </p>
          )}
        </ScheduleRow>
      ))}
    </ul>
  )
}

function TalleresList({ block }) {
  return (
    <ul className="space-y-3" aria-label={`Talleres ${block.period}`}>
      {block.items.map((item) => (
        <ScheduleRow key={`${item.time}-${item.label}`} time={item.time} highlight={item.highlight}>
          <p
            className="text-base font-semibold sm:text-xl"
            style={{ color: item.highlight ? GOLD_TEXT : 'var(--color-body-text)' }}
          >
            {item.label}
          </p>
          {item.shared ? (
            <p className="mt-1 text-sm sm:text-base" style={{ color: 'var(--color-muted-foreground)' }}>
              {item.shared}
            </p>
          ) : (
            <div className="mt-1 space-y-1.5">
              {item.talks.map((title, i) => (
                <p key={i} className="text-sm sm:text-base" style={{ color: 'var(--color-muted-foreground)' }}>
                  <span className="font-bold" style={{ color: i === 0 ? 'var(--color-primary)' : GOLD_TEXT }}>
                    {block.rooms[i]}:{' '}
                  </span>
                  {title}
                </p>
              ))}
            </div>
          )}
        </ScheduleRow>
      ))}
    </ul>
  )
}

import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDay } from '../hooks/useDays'

const SEASON_ICON = {
  summer: '☀',
  autumn: '🍂',
  winter: '❄',
  spring: '🌿',
}

function formatDate(dateStr) {
  return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default function DayView() {
  const { id } = useParams()
  const { day, loading, error } = useDay(id)
  const [total, setTotal] = useState(null)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL ?? '/api'}/total`)
      .then(r => r.json())
      .then(d => setTotal(d.total))
  }, [])

  if (loading) {
    return (
      <main className="mx-auto max-w-[640px] py-10 pb-20">
        <div className="py-12 text-[0.9rem] text-text-dim">Loading day {id}…</div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="mx-auto max-w-[640px] py-10 pb-20">
        <div className="py-12 text-[0.9rem] text-red-700">
          {error === 'Day not found'
            ? `Day ${id} doesn't exist yet.`
            : 'Could not load day. Is the backend running on port 3001?'}
        </div>
        <Link
          to="/timeline"
          className="mt-3 inline-block text-[0.85rem] text-text-dim no-underline hover:underline"
        >
          ← Back to all days
        </Link>
      </main>
    )
  }

  if (!day) return null

  const prevId = day.id - 1
  const nextId = day.id + 1

  return (
    <main className="mx-auto max-w-[640px] py-10 pb-20">
      <nav className="mb-9 flex items-center justify-between">
        <Link
          to="/timeline"
          className="text-[0.82rem] text-text-dim no-underline transition-colors hover:text-text hover:no-underline"
        >
          ← All days
        </Link>
        <span className="text-[0.78rem] tracking-wide text-text-dim">Day {day.id}</span>
      </nav>

      <header className="mb-7">
        <div className="mb-2.5 flex items-center gap-3">
          <span className="rounded bg-accent-lt px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-accent">
            {SEASON_ICON[day.season.toLowerCase()]} {capitalize(day.season)}
          </span>
          <span className="text-[0.8rem] italic text-text-dim">{day.chapter_ref}</span>
        </div>
        <h1 className="mb-1.5 font-serif text-[1.75rem] font-normal leading-tight text-text-h">
          {formatDate(day.date)}
        </h1>
        <p className="text-[0.8rem] italic text-text-dim">{day.weather}</p>
      </header>

      <section className="mb-8 border-b border-border pb-8 text-base leading-8 text-text">
        <p>{day.summary}</p>
      </section>

      {day.quotes.map((q, i) => (
        <blockquote key={i} className="mb-8 border-l-2 border-accent py-1 pl-5">
          <p className="mb-2 font-serif text-[1.05rem] italic leading-7 text-text-h">
            "{q.text}"
          </p>
          <footer className="text-[0.78rem] text-text-dim">— {q.source}</footer>
        </blockquote>
      ))}

      <div className="mb-8 grid grid-cols-2 gap-5 max-[480px]:grid-cols-1">
        <div className="rounded-lg border border-border bg-bg-card p-5">
          <h3 className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-text-dim">
            Activities
          </h3>
          <ul className="flex list-none flex-col gap-1.5">
            {day.activities.map((a, i) => (
              <li
                key={i}
                className="relative pl-3.5 text-[0.88rem] leading-snug text-text before:absolute before:left-0 before:text-text-dim before:content-['·']"
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-border bg-bg-card p-5">
          <h3 className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-text-dim">
            Food & drink
          </h3>
          <ul className="flex list-none flex-col gap-1.5">
            {day.food.map((f, i) => (
              <li
                key={i}
                className="relative pl-3.5 text-[0.88rem] leading-snug text-text before:absolute before:left-0 before:text-text-dim before:content-['·']"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <aside className="mb-12 border-l-2 border-border py-1 pl-5 text-[0.88rem] italic leading-7 text-text-dim">
        <p>{day.reflection}</p>
      </aside>

      <footer className="border-t border-border pt-7">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2.5">
          {prevId >= 1 ? (
            <Link
              to={`/day/${prevId}`}
              className="flex items-center gap-2.5 rounded-lg border border-border px-4 py-3.5 text-text no-underline transition-colors hover:border-accent hover:bg-bg-card hover:no-underline"
            >
              <span className="shrink-0 text-lg text-text-dim">←</span>
              <span className="flex flex-col gap-0.5">
                <span className="text-[0.7rem] uppercase tracking-wider text-text-dim">
                  Previous
                </span>
                <span className="text-[0.88rem] text-text-h">Day {prevId}</span>
              </span>
            </Link>
          ) : (
            <div className="pointer-events-none flex items-center gap-2.5 rounded-lg border border-border px-4 py-3.5 opacity-35">
              <span className="shrink-0 text-lg text-text-dim"></span>
              <span className="flex flex-col gap-0.5">
                <span className="text-[0.7rem] uppercase tracking-wider text-text-dim">
                  First day
                </span>
                <span className="text-[0.88rem] text-text-h">Day {day.id}</span>
              </span>
            </div>
          )}

          <Link
            to="/timeline"
            className="flex items-center justify-center rounded-lg border border-border px-3.5 py-2.5 text-[0.78rem] tracking-wide text-text-dim no-underline transition-colors hover:border-accent hover:bg-bg-card hover:no-underline"
          >
            All days
          </Link>

          {total === null || nextId <= total ? (
            <Link
              to={`/day/${nextId}`}
              className="flex flex-row-reverse items-center gap-2.5 rounded-lg border border-border px-4 py-3.5 text-text no-underline transition-colors hover:border-accent hover:bg-bg-card hover:no-underline"
            >
              <span className="shrink-0 text-lg text-text-dim">→</span>
              <span className="flex flex-col items-end gap-0.5">
                <span className="text-[0.7rem] uppercase tracking-wider text-text-dim">Next</span>
                <span className="text-[0.88rem] text-text-h">Day {nextId}</span>
              </span>
            </Link>
          ) : (
            <div className="pointer-events-none flex flex-row-reverse items-center gap-2.5 rounded-lg border border-border px-4 py-3.5 opacity-35">
              <span className="shrink-0 text-lg text-text-dim"></span>
              <span className="flex flex-col items-end gap-0.5">
                <span className="text-[0.7rem] uppercase tracking-wider text-text-dim">
                  Last day
                </span>
                <span className="text-[0.88rem] text-text-h">Day {day.id}</span>
              </span>
            </div>
          )}
        </div>
      </footer>
    </main>
  )
}
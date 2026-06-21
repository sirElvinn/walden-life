import { Link } from 'react-router-dom'
import { useDays } from '../hooks/useDays'

const SEASON_COLOR = {
  summer: '#5c6b3e',
  autumn: '#b5813a',
  winter: '#4a7c9e',
  spring: '#7a9e4a',
}

function formatDate(dateStr) {
  return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}

function firstSentence(text) {
  return text.split('.')[0] + '.'
}

export default function Timeline() {
  const { days, loading, error } = useDays()

  const grouped = days.reduce((acc, day) => {
    const season = day.season.charAt(0).toUpperCase() + day.season.slice(1)
    if (!acc[season]) acc[season] = []
    acc[season].push(day)
    return acc
  }, {})

  return (
    <main className="py-12 pb-20">
      <header className="mb-10">
        <Link
          to="/"
          className="mb-3.5 inline-block text-[0.82rem] text-text-dim no-underline transition-colors hover:text-text hover:no-underline"
        >
          ← Walden
        </Link>
        <h1 className="font-serif text-[2.2rem] font-normal text-text-h">All Days</h1>
        {!loading && (
          <p className="mt-1 text-[0.82rem] text-text-dim">{days.length} days recorded</p>
        )}
      </header>

      {loading && (
        <div className="py-10 text-[0.9rem] text-text-dim">Loading days…</div>
      )}

      {error && (
        <div className="py-10 text-[0.9rem] text-red-700">
          Could not load days. Make sure the backend is running on port 3001.
        </div>
      )}

      {!loading && !error && Object.entries(grouped).map(([season, seasonDays]) => (
        <section key={season} className="mb-9">
          <div
            className="mb-1 border-b border-border pb-2 text-xs font-semibold uppercase tracking-[0.14em]"
            style={{ color: SEASON_COLOR[season.toLowerCase()] }}
          >
            {season}
          </div>

          <div className="flex flex-col">
            {seasonDays.map(day => (
              <Link
                to={`/day/${day.id}`}
                key={day.id}
                className="grid grid-cols-[52px_56px_1fr] items-baseline gap-4 rounded px-2 py-2.5 text-text no-underline transition-colors hover:bg-bg-card hover:no-underline max-sm:grid-cols-1 max-sm:gap-1"
              >
                <span className="whitespace-nowrap text-xs text-text-dim">Day {day.id}</span>
                <span className="whitespace-nowrap text-[0.82rem] text-text-dim">
                  {formatDate(day.date)}
                </span>
                <span className="text-[0.92rem] leading-snug text-text-h">
                  {firstSentence(day.summary)}
                </span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}

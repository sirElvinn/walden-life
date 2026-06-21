import { Link } from 'react-router-dom'
import { useDays } from '../hooks/useDays'
import './Timeline.css'

const SEASON_COLOR = {
  summer: '#5c6b3e',
  autumn: '#b5813a',
  winter: '#4a7c9e',
  spring: '#7a9e4a',
}

function formatDate(dateStr) {
  return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day:   'numeric',
  })
}

function firstSentence(text) {
  return text.split('.')[0] + '.'
}

export default function Timeline() {
  const { days, loading, error } = useDays()

  // Group days by season preserving order of first appearance
  const grouped = days.reduce((acc, day) => {
    const season = day.season.charAt(0).toUpperCase() + day.season.slice(1)
    if (!acc[season]) acc[season] = []
    acc[season].push(day)
    return acc
  }, {})

  return (
    <main className="timeline">

      <header className="tl-header">
        <Link to="/" className="tl-back">← Walden</Link>
        <h1 className="tl-title">All Days</h1>
        {!loading && (
          <p className="tl-count">{days.length} days recorded</p>
        )}
      </header>

      {/* Loading */}
      {loading && (
        <div className="tl-state">Loading days…</div>
      )}

      {/* Error */}
      {error && (
        <div className="tl-state tl-error">
          Could not load days. Make sure the backend is running on port 3001.
        </div>
      )}

      {/* Days grouped by season */}
      {!loading && !error && Object.entries(grouped).map(([season, seasonDays]) => (
        <section key={season} className="tl-season">

          <div
            className="tl-season-label"
            style={{ color: SEASON_COLOR[season.toLowerCase()] }}
          >
            {season}
          </div>

          <div className="tl-rows">
            {seasonDays.map(day => (
              <Link
                to={`/day/${day.id}`}
                key={day.id}
                className="tl-row"
              >
                <span className="tl-day-num">Day {day.id}</span>
                <span className="tl-date">{formatDate(day.date)}</span>
                <span className="tl-summary">{firstSentence(day.summary)}</span>
              </Link>
            ))}
          </div>

        </section>
      ))}

    </main>
  )
}
import { useParams, Link, Navigate } from 'react-router-dom'
import { useDay } from '../hooks/useDays'
import './DayView.css'

const SEASON_ICON = {
  summer: '☀',
  autumn: '🍂',
  winter: '❄',
  spring: '🌿',
}

function formatDate(dateStr) {
  return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-US', {
    weekday: 'long',
    year:    'numeric',
    month:   'long',
    day:     'numeric',
  })
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default function DayView() {
  const { id }             = useParams()
  const { day, loading, error } = useDay(id)

  // ── Loading ──────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <main className="day-view">
        <div className="dv-state">Loading day {id}…</div>
      </main>
    )
  }

  // ── Error / not found ────────────────────────────────────────────────────
  if (error) {
    return (
      <main className="day-view">
        <div className="dv-state dv-error">
          {error === 'Day not found'
            ? `Day ${id} doesn't exist yet.`
            : 'Could not load day. Is the backend running on port 3001?'}
        </div>
        <Link to="/timeline" className="dv-back-link">← Back to all days</Link>
      </main>
    )
  }

  if (!day) return null

  const prevId = day.id - 1
  const nextId = day.id + 1

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <main className="day-view">

      {/* Top nav */}
      <nav className="dv-nav">
        <Link to="/timeline" className="dv-nav-back">← All days</Link>
        <span className="dv-nav-num">Day {day.id}</span>
      </nav>

      {/* Header */}
      <header className="dv-header">
        <div className="dv-badges">
          <span className="dv-season">
            {SEASON_ICON[day.season.toLowerCase()]} {capitalize(day.season)}
          </span>
          <span className="dv-chapter">{day.chapter_ref}</span>
        </div>
        <h1 className="dv-date">{formatDate(day.date)}</h1>
        <p className="dv-weather">{day.weather}</p>
      </header>

      {/* Summary */}
      <section className="dv-summary">
        <p>{day.summary}</p>
      </section>

      {/* Quotes */}
      {day.quotes.map((q, i) => (
        <blockquote key={i} className="dv-quote">
          <p className="dv-quote-text">"{q.text}"</p>
          <footer className="dv-quote-source">— {q.source}</footer>
        </blockquote>
      ))}

      {/* Activities + Food */}
      <div className="dv-details">
        <div className="dv-detail-card">
          <h3>Activities</h3>
          <ul>
            {day.activities.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </div>
        <div className="dv-detail-card">
          <h3>Food & drink</h3>
          <ul>
            {day.food.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </div>
      </div>

      {/* Reflection */}
      <aside className="dv-reflection">
        <p>{day.reflection}</p>
      </aside>

      {/* Prev / Next */}
      <footer className="dv-footer">
        <div className="dv-pager">

          {prevId >= 1 ? (
            <Link to={`/day/${prevId}`} className="dv-pager-card dv-pager-prev">
              <span className="dv-pager-arrow">←</span>
              <span className="dv-pager-text">
                <span className="dv-pager-label">Previous</span>
                <span className="dv-pager-day">Day {prevId}</span>
              </span>
            </Link>
          ) : (
            <div className="dv-pager-card dv-pager-disabled">
              <span className="dv-pager-text">
                <span className="dv-pager-label">First day</span>
              </span>
            </div>
          )}

          <Link to="/timeline" className="dv-pager-card dv-pager-all">
            <span className="dv-pager-label">All days</span>
          </Link>

          <Link to={`/day/${nextId}`} className="dv-pager-card dv-pager-next">
            <span className="dv-pager-text">
              <span className="dv-pager-label">Next</span>
              <span className="dv-pager-day">Day {nextId}</span>
            </span>
            <span className="dv-pager-arrow">→</span>
          </Link>

        </div>
      </footer>

    </main>
  )
}
export default function LandingContent({ landingIn, onReplay }) {
  return (
    <main className={`landing ${landingIn ? 'in' : ''}`}>
      <p className="landing-eyebrow">July 4, 1845 - September 6, 1847</p>
      <h1 className="landing-title">Walden</h1>
      <p className="landing-sub">
        Henry David Thoreau spent two years, two months, and two days living alone in a
        cabin he built with his own hands.
      </p>
      <blockquote className="landing-quote">
        "I went to the woods because I wished to live deliberately, to front only the
        essential facts of life."
      </blockquote>
      <div className="landing-actions">
        <a href="/day/1" className="btn-primary">
          Begin Day 1
        </a>
        <a href="/timeline" className="btn-secondary">
          View all days
        </a>
      </div>
      <p className="landing-meta">730 days - 18 chapters - 1 pond</p>
      <button className="landing-replay" onClick={onReplay}>
        Replay intro
      </button>
    </main>
  )
}

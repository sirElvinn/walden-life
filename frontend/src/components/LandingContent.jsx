import { Link } from 'react-router-dom'
import { ROUTES } from '../config/routes'

export default function LandingContent() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-5 px-6 py-12 text-center">
      <p className="text-xs uppercase tracking-[0.14em] text-text-dim">
        July 4, 1845 · September 6, 1847
      </p>

      <h1 className="font-serif text-[clamp(3.5rem,12vw,6rem)] font-normal leading-none tracking-tight text-text-h">
        Walden
      </h1>

      <p className="max-w-[380px] text-[0.95rem] leading-7 text-text-dim">
        Henry David Thoreau spent two years, two months, and two days living alone in a
        cabin he built with his own hands.
      </p>

      <blockquote className="max-w-[440px] border-l-2 border-accent py-0 pl-[18px] text-left font-serif text-base italic leading-7 text-text">
        "I went to the woods because I wished to live deliberately, to front only the
        essential facts of life."
      </blockquote>

      <div className="mt-1 flex flex-wrap justify-center gap-3">
        <Link
          to={ROUTES.day(1)}
          className="rounded-md bg-accent px-7 py-[11px] text-[0.9rem] font-medium text-white no-underline transition-opacity hover:opacity-90 hover:no-underline"
        >
          Begin Day 1
        </Link>
        <Link
          to={ROUTES.timeline}
          className="rounded-md border border-border px-7 py-[11px] text-[0.9rem] text-text no-underline transition-colors hover:bg-bg-card hover:no-underline"
        >
          View all days
        </Link>
      </div>

      <p className="text-xs tracking-wider text-text-dim">
        730 days · 18 chapters · 1 pond
      </p>
    </main>
  )
}

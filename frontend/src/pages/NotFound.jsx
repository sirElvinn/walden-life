import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-8 pb-20 pt-16 text-center font-serif">

      <div className="animate-[w4-num-in_0.9s_cubic-bezier(0.16,1,0.3,1)_both] text-[clamp(6rem,18vw,8.5rem)] font-medium leading-none tracking-tight text-[#5c6b3e]">
        404
      </div>

      <div className="mx-auto mb-6 mt-5 h-px w-10 animate-[w4-line-in_0.5s_ease_0.55s_both] bg-[#8a9e68] opacity-0" />

      <h1 className="mb-3 animate-[w4-fade-up_0.6s_ease_0.7s_both] text-xl italic font-normal text-text-dim opacity-0">
        You have gone to the woods.
      </h1>

      <p className="mb-9 max-w-[280px] animate-[w4-fade-up_0.6s_ease_0.85s_both] text-sm leading-relaxed text-text-dim opacity-0">
        But this particular path doesn't exist.<br />
        Thoreau got lost here too, occasionally.
      </p>

      <div className="flex animate-[w4-fade-up_0.6s_ease_1s_both] gap-2.5 opacity-0">
        <Link
          to="/"
          className="rounded-md border border-[#5c6b3e] bg-[#5c6b3e] px-5 py-2.5 text-sm text-[#faf9f6] no-underline transition-colors hover:bg-[#4a5632]"
        >
          ← Return home
        </Link>
        <Link
          to="/timeline"
          className="rounded-md border border-[#4a5240] px-5 py-2.5 text-sm text-[#8a9e68] no-underline transition-colors hover:border-[#8a9e68]"
        >
          View all days
        </Link>
      </div>

      <p className="absolute bottom-6 left-0 right-0 animate-[w4-fade-up_0.6s_ease_1.2s_both] text-center text-xs italic text-text-dim opacity-0">
        "Not till we are lost do we begin to find ourselves." — Walden
      </p>

      <style>{`
        @keyframes w4-num-in {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes w4-line-in {
          from { width: 0; opacity: 0; }
          to   { width: 40px; opacity: 1; }
        }
        @keyframes w4-fade-up {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </main>
  )
}
import { useState, useEffect } from 'react'

// No hardcoded localhost — Vite proxies /api → backend automatically.
// This means the same code works in dev AND in production.
const API = import.meta.env.VITE_API_URL ?? '/api'

// ── useDays ───────────────────────────────────────────────────────────────────
// Fetches the slim list of all days. Used by Timeline.
// Returns { days, loading, error }

export function useDays() {
  const [days,    setDays]    = useState([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  useEffect(() => {
    fetch(`${API}/days`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch days')
        return res.json()
      })
      .then(data => {
        setDays(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { days, loading, error }
}

// ── useDay ────────────────────────────────────────────────────────────────────
// Fetches one full day by id. Re-runs whenever id changes.
// Used by DayView. Returns { day, loading, error }

export function useDay(id) {
  const [day,     setDay]     = useState(null)
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    setDay(null)
    setError(null)

    fetch(`${API}/days/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Day not found')
        return res.json()
      })
      .then(data => {
        setDay(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  return { day, loading, error }
}
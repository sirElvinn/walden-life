const express = require('express')
const cors    = require('cors')
const path    = require('path')
const fs      = require('fs')

const app  = express()
const PORT = process.env.PORT || 3001

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors())
app.use(express.json())

// ── Load data ─────────────────────────────────────────────────────────────────
// Read the JSON once at startup. When you add MongoDB later, swap these
// out for Mongoose queries — the route handlers stay exactly the same.
const dataPath = path.join(__dirname, 'data', 'walden-days.json')
const days     = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))

// ── Routes ────────────────────────────────────────────────────────────────────

// GET /api/days
// Returns a slim version of every day (no quotes/activities) — used by Timeline
app.get('/api/days', (req, res) => {
  const slim = days.map(({ id, date, season, chapter_ref, summary }) => ({
    id, date, season, chapter_ref, summary,
  }))
  res.json(slim)
})

// GET /api/days/:id
// Returns one full day object — used by DayView
app.get('/api/days/:id', (req, res) => {
  const id  = Number(req.params.id)
  const day = days.find(d => d.id === id)
  if (!day) return res.status(404).json({ error: 'Day not found' })
  res.json(day)
})

// GET /api/total
// Returns total number of days — used for progress indicators
app.get('/api/total', (req, res) => {
  res.json({ total: days.length })
})

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Walden API → http://localhost:${PORT}`)
  console.log(`  GET /api/days`)
  console.log(`  GET /api/days/:id`)
  console.log(`  GET /api/total`)
})
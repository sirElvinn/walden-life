require('dotenv').config()
const express  = require('express')
const cors     = require('cors')
const mongoose = require('mongoose')
const Day      = require('./models/Day')

const app  = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// GET /api/days — slim list for Timeline
app.get('/api/days', async (req, res) => {
  try {
    const days = await Day.find({}, 'id date season chapter_ref summary').sort({ id: 1 })
    res.json(days)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch days' })
  }
})

// GET /api/days/:id — full day for DayView
app.get('/api/days/:id', async (req, res) => {
  try {
    const day = await Day.findOne({ id: Number(req.params.id) })
    if (!day) return res.status(404).json({ error: 'Day not found' })
    res.json(day)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch day' })
  }
})

// GET /api/total
app.get('/api/total', async (req, res) => {
  try {
    const total = await Day.countDocuments()
    res.json({ total })
  } catch (err) {
    res.status(500).json({ error: 'Failed to get total' })
  }
})

// Connect to MongoDB, then start server
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected.')
    app.listen(PORT, () => {
      console.log(`Walden API → http://localhost:${PORT}`)
    })
  })
  .catch(err => {
    console.error('MongoDB connection failed:', err.message)
    process.exit(1)
  })
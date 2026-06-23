require('dotenv').config()
const mongoose = require('mongoose')
const fs       = require('fs')
const path     = require('path')
const Day      = require('./models/Day')

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI)
  console.log('Connected to MongoDB.')

  await Day.deleteMany({})
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'walden-days.json'), 'utf-8'))
  await Day.insertMany(data)

  console.log(`Seeded ${data.length} days.`)
  await mongoose.disconnect()
}

seed().catch(console.error)
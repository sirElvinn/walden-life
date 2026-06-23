const mongoose = require('mongoose')

const QuoteSchema = new mongoose.Schema({
  text:   String,
  source: String,
})

const DaySchema = new mongoose.Schema({
  id:          { type: Number, required: true, unique: true },
  date:        String,
  season:      String,
  chapter_ref: String,
  summary:     String,
  activities:  [String],
  food:        [String],
  quotes:      [QuoteSchema],
  weather:     String,
  reflection:  String,
})

module.exports = mongoose.model('Day', DaySchema)
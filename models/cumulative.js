const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cumulativeSchema = new mongoose.Schema({
    processName: { type: String },
    lowerBound: { type: Number },
    upperBound: { type: Number },
    frequency: { type: Number, min: 0 },
    cumuFrequency: { type: Number, min: 0 },
    percentage: { type: Number, min: 0 },
    level: { type: Number, min: 0 }
});

const cumulative = mongoose.model('cumulative', cumulativeSchema);
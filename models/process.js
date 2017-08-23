const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const processSchema = new mongoose.Schema({
    processName: { type: String },
    stDt: { type: Date },
    endDt: { type: Date },
    leadTime: { type: Number, min: 0 },
    timeStamp: { type: Date, default: Date.now }
});

const process = mongoose.model('process', processSchema);
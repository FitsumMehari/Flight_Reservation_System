const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    airline: {
        type: String,
        required: true,
    },
    flighNum: {
        type: String,
        required: true,
    },
    source: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    departureTime: {
        type: String,
        required: true,
    },
    arrivalTime: {
        type: String,
        required: true,
    },

}, {
    timestamps: true,
});

module.exports = mongoose.model('file', FlightSchema);
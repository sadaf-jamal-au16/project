const mongoose = require('mongoose')

const campSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true,
    },
    // Image: {
    //     type: String,
    //     required: true,
    // },
    Description:{
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const campdataModel = mongoose.model('campground', campSchema)

module.exports = campdataModel
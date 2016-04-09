var mongoose = require('mongoose');

var CarSchema = new mongoose.Schema({
    name:        String,
    brand:       String,
    model:       String,
    descritpion: String,
    year:        String,
    color:       String,
    performance: Boolean,
    luxury:      Boolean,

    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Car', CarSchema);
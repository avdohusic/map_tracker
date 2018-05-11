let mongoose = require('mongoose');

//Marker schema
let markerSchema = mongoose.Schema({
    category:{
        type: String,
        required: false
    },
    location: {
        type: {type: String, default: 'Point'},
        coordinates: {type: [Number], default: [0, 0]}
    }
});

let Marker = module.exports = mongoose.model('Marker', markerSchema);
let mongoose = require('mongoose');

//Marker schema
let markerSchema = mongoose.Schema({
    category:{
        type: String,
        required: false
    },
    loc: {
        type: { type: String },
        coordinates: [Number],
        index: true
    }
});

let Marker = module.exports = mongoose.model('Marker', markerSchema);

module.exports.getMarkers = function (callback, limit) {
    Marker.find(callback).limit(limit);
};

module.exports.getMarkerById = function (id, callback) {
    Marker.getMarkerById(id, callback).limit(limit);
};
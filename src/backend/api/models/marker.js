let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Marker schema
let markerSchema = Schema({
    category: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    location: {
        type: {type: String, default: 'Point'},
        coordinates: {type: [Number], default: [0, 0]}
    }
});

let Marker = module.exports = mongoose.model('Marker', markerSchema);
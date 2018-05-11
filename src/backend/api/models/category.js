let mongoose = require('mongoose');

//Category schema
let categorySchema = mongoose.Schema({
    name:{
        type: String,
        required: false
    }
});

let Category = module.exports = mongoose.model('Category', categorySchema);
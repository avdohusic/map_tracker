let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Category schema
let categorySchema = Schema({
    name:{
        type: String,
        required: false
    }
});

let Category = module.exports = mongoose.model('Category', categorySchema);
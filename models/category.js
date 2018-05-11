let mongoose = require('mongoose');

//Category schema
let categorySchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    }
});

let Category = module.exports = mongoose.model('Category', categorySchema);

module.exports.getCategories = function (callback, limit) {
    Category.find(callback).limit(limit);
};
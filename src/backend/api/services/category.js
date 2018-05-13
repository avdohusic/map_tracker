let mongoose = require('mongoose'),
    Category = mongoose.model('Category');

exports.getAll = function (req, res) {
    Category.find({}, function (err, categories) {
        if(err)
            throw err;
        res.json(categories);
    })
};

exports.create = function (req, res) {
    let newCategory = new Category(req.body);
    newCategory.save(function (err, category) {
        if(err)
            throw err;
        res.json(category);
    })
};

exports.update = function (req, res) {
    Category.findOneAndUpdate({_id: req.params._id}, req.body, {new: true}, function (err, category) {
        if(err)
            throw err;
        res.json(category);
    });
};

exports.delete = function (req, res) {
    Category.remove({_id: req.params._id}, function (err, category) {
        if(err)
            throw err;
        res.json({ message: 'Category successfully deleted' });
    });
};
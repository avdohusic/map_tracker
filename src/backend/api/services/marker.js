let mongoose = require('mongoose'),
    Marker = mongoose.model('Marker');

exports.getAll = function (req, res) {
    let conditions = {};
    if(req.query.category)
        conditions = { category: req.query.category };

    Marker.find(conditions, function (err, markers) {
        if(err)
            throw err;
        res.json(markers);
    }).populate('category', 'name');
};

exports.getById = function (req, res) {
    Marker.findById(req.params._id, function (err, marker) {
        if(err)
            throw err;
        res.json(marker);
    }).populate('category', 'name');
};

exports.create = function (req, res) {
    let newMarker = new Marker(req.body);
    newMarker.save(function (err, marker) {
        if(err)
            throw err;
        res.json(marker);
    })
};

exports.update = function (req, res) {
    Marker.findOneAndUpdate({_id: req.params._id}, req.body, {new: true}, function (err, marker) {
        if(err)
            throw err;
        res.json(marker);
    });
};

exports.delete = function (req, res) {
    Marker.remove({_id: req.params._id}, function (err, marker) {
        if(err)
            throw err;
        res.json({ message: 'Marker successfully deleted' });
    });
};
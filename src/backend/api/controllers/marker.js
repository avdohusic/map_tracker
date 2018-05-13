let markerService = require('../services/marker');

exports.getAll = function (req, res) {
    markerService.getAll(req, res);
};

exports.getById = function(req, res) {
    markerService.getById(req, res);
};

exports.create = function (req, res) {
    markerService.create(req, res);
};

exports.update = function (req, res) {
    markerService.update(req, res);
};

exports.delete = function (req, res) {
    markerService.delete(req, res);
};
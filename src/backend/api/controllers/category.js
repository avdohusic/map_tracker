let categoryService = require('../services/category');

exports.getAll = function (req, res) {
    categoryService.getAll(req, res);
};

exports.create = function (req, res) {
    categoryService.create(req, res);
};

exports.update = function (req, res) {
    categoryService.update(req, res);
};

exports.delete = function (req, res) {
    categoryService.delete(req, res);
};
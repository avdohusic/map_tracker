module.exports = function (app) {
    let categoryController = require('../controllers/category');

    app.route('/api/categories')
        .get(categoryController.getAll)
        .post(categoryController.create);

    app.route('/api/categories/:_id')
        .put(categoryController.update)
        .delete(categoryController.delete);
};
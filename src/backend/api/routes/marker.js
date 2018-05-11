module.exports = function (app) {
    let markerController = require('../controllers/marker');

    app.route('/api/markers')
        .get(markerController.getAll)
        .post(markerController.create);

    app.route('/api/markers/:_id')
        .get(markerController.getById)
        .put(markerController.update)
        .delete(markerController.delete);
};
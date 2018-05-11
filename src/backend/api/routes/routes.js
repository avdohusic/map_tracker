module.exports = function (app) {

    let markerRoute = require('../routes/marker');
    markerRoute(app);

    let categoryRoute = require('../routes/category');
    categoryRoute(app);

    app.get('/', function (req, res) {
        res.send("Map Tracking: Welcome to RESTful API");
    });

    app.use(function(req, res) {
        res.status(404).send({url: req.originalUrl + ' not found'})
    });
};


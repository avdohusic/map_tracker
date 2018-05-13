let config = require('./config/config');
let express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    Category = require('./api/models/category'),
    Marker = require('./api/models/marker');

//Set connection to Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb.host + ':' + config.mongodb.port + "/" + config.mongodb.project);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

let routes = require('./api/routes/routes');
routes(app);

app.listen(config.port, function () {
    console.log("Map Tracker: RESTful API started on port %d", config.port);
});
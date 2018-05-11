let express = require('express');
let app = express();
let bodyPaser = require('body-parser');
let mongoose = require('mongoose');

let config = require('./config/config.json');

let Marker = require('./models/marker.js');
let Category = require('./models/category.js');

//Set connection to Mongoose
mongoose.connect(config.mongodb.host + ':' + config.mongodb.port + "/" + config.mongodb.project);
let db = mongoose.connection;

app.get('/', function (req, res) {
    res.send("Welcome to REST API for Map Tracking!");
});

app.get('/api/markers', function (req, res) {
    Marker.getMarkers(function (err, markers) {
        if(err){
            throw  err;
        }
        res.json(markers);
    })
});

app.get('/api/markers:_id', function (req, res) {
    Marker.getMarkerById(req.params._id, function (err, marker) {
        if(err){
            throw  err;
        }
        res.json(marker);
    })
});


app.get('/api/categories', function (req, res) {
    Category.getCategories(function (err, categories) {
        if(err){
            throw  err;
        }
        res.json(categories);
    })
});

app.listen(config.port);
console.log("Running on port:" + config.port);
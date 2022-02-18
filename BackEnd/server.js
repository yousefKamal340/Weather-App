const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const router = express.Router();
const axios = require('axios');

const Weathers = require('./models/Weather');

const session = require('express-session');
const passport = require('passport');
dotenv.config();

const MongoURI = process.env.Mongo_URI;
const apiKey = process.env.Base_URL;
const port = process.env.PORT || "8000";

const { response } = require("express");

const WeatherController = require('./Controllers/weatherController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => console.log("MongoDB is now connected"))
    .catch(err => console.log(err));

app.get('/', function (req, res) {
    res.send("Welcome");
});

app.use('/weather', WeatherController);

app.post('/WeatherDetails', function (req, res) {
    axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${req.body.city}`)
        .then(response => {
            const apiResponse = response.data;
            res.send(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
        }).catch(error => {
            res.send(error);
        });
});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});


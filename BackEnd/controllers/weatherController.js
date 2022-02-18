const router = require('express').Router();
const Weather = require('../models/Weather');

const axios = require('axios');

const apiKey = process.env.Base_URL;

router.get('/WeatherDetails', async (req, res) => {
    let city = req.body.city;
    let url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    try {  
        return axios.get(url); 
    }
    catch (err) {
        res.send(err);
    }


/*     request(url, function (err, response, body) {
      if(err){
        res.send(err);
      }
      let weather = JSON.parse(body);
      if(weather.current == undefined){
        res.send(err);
      }
      let weatherText = `It's ${weather.current.temperature} degrees ${weather.current.is_day === "yes" ? 'Day time' : 'Night time'} in ${weather.location.name}, ${weather.location.country}!`;
      res.send(weatherText);
    }); */
  });

module.exports = router;
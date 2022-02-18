const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const weatherSchema = new Schema({
  City: {
    type: String,
    required: true,
  },
  Temperature: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const Weather = mongoose.model('Weather', weatherSchema);

module.exports = Weather;
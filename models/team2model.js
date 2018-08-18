const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Team2Schema = new Schema({
    team2: String,
    score2: Number,
    shots2: Number,
    fouls2: Number
},{
    collection: 'team2'
  }); 

const Team2 = mongoose.model('team1', Team2Schema);

module.exports = Team2;
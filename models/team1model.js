const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Team1Schema = new Schema({
    team1: String,
    score1: Number,
    shots1: Number,
    fouls1: Number
},{
    collection: 'team1'
  }); 

const Team1 = mongoose.model('team1', Team1Schema);

module.exports = Team1;
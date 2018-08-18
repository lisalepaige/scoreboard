const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UpdateSchema = new Schema({
    update: String,
},{
    collection: 'update'
  }); 

const Update = mongoose.model('update', UpdateSchema);

module.exports = Update;
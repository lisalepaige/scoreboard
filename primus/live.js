const mongoose = require('mongoose');

const Team1 = require('../models/team1model');
const Team2 = require('../models/team2model');
const Update = require('../models/updatesmodel');

exports.go = function(server) {
    
    const Primus = require('primus');
    let primus = new Primus(server, {});

    //primus.save(__dirname+'/primuslib.js');

    primus.on("connection", function connection(primusspark) { 
        console.log("spark primus connected");

        primusspark.on("data", function(data) {
            console.log("data from primusspark")

            primus.write(data);
        });
    });
}


exports.go = function(server) {
    
    const Primus = require('primus');
    let primus = new Primus(server, {});

    //primus.save(__dirname+'/primuslib.js');

    primus.on("connection", function connection(primusspark) { 
        console.log("spark primus connected");

        primus.write('here is some data');

        primusspark.on("data", function(data) {
            console.log("data from primusspark")
        });
    });
}


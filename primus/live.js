exports.go = function(server) {
    
    const Primus = require('primus');
    let primus = new Primus(server, {});

    //primus.save(__dirname+'/primuslib.js');

    primus.on("connection", function(primusspark) { 
        console.log("spark primus connected");

        primusspark.on("data", function(data) {
            primus.write(data);
        });
    } );
}


var url = "/";

primus = Primus.connect(url, {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
});

primus.on('data', function message(data) {
    console.log('received message from server', data);
});

/*document.querySelector(".controls__min").addEventListener("click", function(e) {
    var min = document.querySelector(".min");

    primus.write(minbutton);
    console.log("min clicked");
    
});

function Min(data)
{
    var min = document.querySelector(".min");

    if(teller <= 1)
    {
        teller = 1;
        aantal.innerHTML = teller;
        Total();
    }
    else {
        teller -= 1;
        aantal.innerHTML = teller;
        Total();
    }

}

plus.addEventListener("click", function(e){
   
    console.log(teller);

    
        
});


primus.on('data', function message(data) {
    Min(data);
});*/
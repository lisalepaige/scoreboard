var url = "/";

primus = Primus.connect(url, {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
});

document.querySelector(".minscore__team1").addEventListener("click", function(e) {
    var minbutton = document.querySelector(".minscore__team1");

    primus.write(minbutton);
    console.log("min score 1 clicked");

    e.preventDefault();
    
});

document.querySelector(".minscore__team2").addEventListener("click", function(e) {
    var minbutton = document.querySelector(".minscore__team2");

    primus.write(minbutton);
    console.log("min score 2 clicked");

    e.preventDefault();
});

document.querySelector(".plusscore__team1").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".plusscore__team1");

    primus.write(plusbutton);
    console.log("plus score 1 clicked");

    e.preventDefault();
});

document.querySelector(".plusscore__team2").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".plusscore__team2");

    primus.write(plusbutton);
    console.log("plus score 2 clicked");

    e.preventDefault();
});

document.querySelector(".minshots__team1").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".minshots__team1");

    primus.write(plusbutton);
    console.log("min shots 1 clicked");

    e.preventDefault();
});

document.querySelector(".minshots__team2").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".minshots__team2");

    primus.write(plusbutton);
    console.log("min shots 2 clicked");

    e.preventDefault();
});

document.querySelector(".plusshots__team1").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".plusshots__team1");

    primus.write(plusbutton);
    console.log("plus shots 1 clicked");

    e.preventDefault();
});

document.querySelector(".plusshots__team2").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".plusshots__team2");

    primus.write(plusbutton);
    console.log("plus shots 2 clicked");

    e.preventDefault();
});

document.querySelector(".minfouls__team1").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".minfouls__team1");

    primus.write(plusbutton);
    console.log("min fouls 1 clicked");

    e.preventDefault();
});

document.querySelector(".minfouls__team2").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".minfouls__team2");

    primus.write(plusbutton);
    console.log("min fouls 2 clicked");

    e.preventDefault();
});

document.querySelector(".plusfouls__team1").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".plusfouls__team1");

    primus.write(plusbutton);
    console.log("plus fouls 1 clicked");

    e.preventDefault();
});

document.querySelector(".plusfouls__team2").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".plusfouls__team2");

    primus.write(plusbutton);
    console.log("plus fouls 2 clicked");

    e.preventDefault();
});





/*function Min(data)
{
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


primus.on('data', function message(data) {
    //console.log('received message from server', data);
});
var url = "/";

primus = Primus.connect(url, {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
});

var aantal1 = document.querySelector(".aantalscore__team1");
var teller1 = aantal1.innerHTML;

var aantal2 = document.querySelector(".aantalscore__team2");
var teller2 = aantal2.innerHTML;

var aantal3 = document.querySelector(".aantalshots__team1");
var teller3 = aantal3.innerHTML;

var aantal4 = document.querySelector(".aantalshots__team2");
var teller4 = aantal4.innerHTML;

var aantal5 = document.querySelector(".aantalfouls__team1");
var teller5 = aantal5.innerHTML;

var aantal6 = document.querySelector(".aantalfouls__team2");
var teller6 = aantal6.innerHTML;


document.querySelector(".minscore__team1").addEventListener("click", function(e) {
    var minbutton = document.querySelector(".minscore__team1");

    primus.write(minbutton);
    console.log("min score 1 clicked");

    if(teller1 <= 1)
    {
        teller1 = 0;
        aantal1.innerHTML = teller1;
    }
    else {
        teller1 -= 1;
        aantal1.innerHTML = teller1;
    }

    e.preventDefault();
    
});

document.querySelector(".minscore__team2").addEventListener("click", function(e) {
    var minbutton = document.querySelector(".minscore__team2");

    primus.write(minbutton);
    console.log("min score 2 clicked");

    if(teller2 <= 1)
    {
        teller2 = 0;
        aantal2.innerHTML = teller2;
    }
    else {
        teller2 -= 1;
        aantal2.innerHTML = teller2;
    }

    e.preventDefault();
});

document.querySelector(".plusscore__team1").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".plusscore__team1");

    primus.write(plusbutton);
    console.log("plus score 1 clicked");

        teller1++;
        aantal1.innerHTML = teller1;
    
    e.preventDefault();
});

document.querySelector(".plusscore__team2").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".plusscore__team2");

    primus.write(plusbutton);
    console.log("plus score 2 clicked");

    teller2++;
    aantal2.innerHTML = teller2;

    e.preventDefault();
});

document.querySelector(".minshots__team1").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".minshots__team1");

    primus.write(plusbutton);
    console.log("min shots 1 clicked");

    primus.write(plusbutton);
    console.log("min shots 2 clicked");

    if(teller3 <= 1)
    {
        teller3 = 0;
        aantal3.innerHTML = teller3;
    }
    else {
        teller3 -= 1;
        aantal3.innerHTML = teller3;
    }

    e.preventDefault();
});

document.querySelector(".minshots__team2").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".minshots__team2");

    primus.write(plusbutton);
    console.log("min shots 2 clicked");

    if(teller4 <= 1)
    {
        teller4 = 0;
        aantal4.innerHTML = teller4;
    }
    else {
        teller4 -= 1;
        aantal4.innerHTML = teller4;
    }

    e.preventDefault();
});

document.querySelector(".plusshots__team1").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".plusshots__team1");

    primus.write(plusbutton);
    console.log("plus shots 1 clicked");

    teller3++;
    aantal3.innerHTML = teller3;

    e.preventDefault();
});

document.querySelector(".plusshots__team2").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".plusshots__team2");

    primus.write(plusbutton);
    console.log("plus shots 2 clicked");

    teller4++;
    aantal4.innerHTML = teller4;

    e.preventDefault();
});

document.querySelector(".minfouls__team1").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".minfouls__team1");

    primus.write(plusbutton);
    console.log("min fouls 1 clicked");

    if(teller5 <= 1)
    {
        teller5 = 0;
        aantal5.innerHTML = teller5;
    }
    else {
        teller5 -= 1;
        aantal5.innerHTML = teller5;
    }

    e.preventDefault();
});

document.querySelector(".minfouls__team2").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".minfouls__team2");

    primus.write(plusbutton);
    console.log("min fouls 2 clicked");

    if(teller6 <= 1)
    {
        teller6 = 0;
        aantal6.innerHTML = teller6;
    }
    else {
        teller6 -= 1;
        aantal6.innerHTML = teller6;
    }

    e.preventDefault();
});

document.querySelector(".plusfouls__team1").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".plusfouls__team1");

    primus.write(plusbutton);
    console.log("plus fouls 1 clicked");

    teller5++;
    aantal5.innerHTML = teller5;

    e.preventDefault();
});

document.querySelector(".plusfouls__team2").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".plusfouls__team2");

    primus.write(plusbutton);
    console.log("plus fouls 2 clicked");

    teller6++;
    aantal6.innerHTML = teller6

    e.preventDefault();
});

/*function Min(data)
{
    if(teller <= 1)
    {
        teller = 0;
        aantal.innerHTML = teller;
    }
    else {
        teller -= 1;
        aantal.innerHTML = teller;
    }

}

function Plus(data)
{
    teller += 1;
    aantal.innerHTML = teller;
}
*/

/*plus.addEventListener("click", function(e){
  
});


primus.on('data', function message(data) {
    Min(data);
});*/


primus.on('data', function message(data) {
    //console.log('received message from server', data);
});
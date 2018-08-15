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

    primus.write({
        type: "minscore1",
    });

    console.log("min score 1 clicked");
    e.preventDefault();
});

function MinScore1()
{
    console.log("function minsore1");
    
    var aantal = document.querySelector(".aantalscore__team1");
    var count = aantal.innerHTML;
    var newCount = parseInt(count)-1;
    aantal.innerHTML = newCount;

    var aantalhome = document.querySelector(".score__team1");
    aantalhome.innerHTML = newCount;

    console.log(aantal.innerHTML);
    console.log(aantalhome.innerHTML);
}

document.querySelector(".minscore__team2").addEventListener("click", function(e) {
    var minbutton = document.querySelector(".minscore__team2");

    primus.write({
        type: "minscore2",
    });

    console.log("min score 2 clicked");
    e.preventDefault();
});

function MinScore2()
{
    console.log("function minsore2");
    
    var aantal = document.querySelector(".aantalscore__team2");
    var count = aantal.innerHTML;
    var newCount = parseInt(count)-1;
    aantal.innerHTML = newCount;

    console.log(aantal.innerHTML);
}

document.querySelector(".plusscore__team1").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".plusscore__team1");

    primus.write({
        type: "plusscore1"
    });
    
    console.log("plus score 1 clicked");    
    e.preventDefault();
});

function PlusScore1() {

    console.log("function plussore1");
    
    var aantal = document.querySelector(".aantalscore__team1");
    var count = aantal.innerHTML;
    var newCount = parseInt(count)+1;
    aantal.innerHTML = newCount;

    console.log(aantal.innerHTML);
}

document.querySelector(".plusscore__team2").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".plusscore__team2");

    primus.write({
        type: "plusscore2"
    });
    
    console.log("plus score 2 clicked");    
    e.preventDefault();
});

function PlusScore2() {

    console.log("function plussore2");
    
    var aantal = document.querySelector(".aantalscore__team2");
    var count = aantal.innerHTML;
    var newCount = parseInt(count)+1;
    aantal.innerHTML = newCount;

    console.log(aantal.innerHTML);
}

document.querySelector(".minshots__team1").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".minshots__team1");

    primus.write({
        type: "minshots1",
    });

    console.log("min shots 1 clicked");
    e.preventDefault();
});

function MinShots1()
{
    console.log("function minshots1");
    
    var aantal = document.querySelector(".aantalshots__team1");
    var count = aantal.innerHTML;
    var newCount = parseInt(count)-1;
    aantal.innerHTML = newCount;

    console.log(aantal.innerHTML);
}

document.querySelector(".minshots__team2").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".minshots__team2");

    primus.write({
        type: "minshots2",
    });

    console.log("min shots 2 clicked");
    e.preventDefault();
});

function MinShots2()
{
    console.log("function minshots 2");
    
    var aantal = document.querySelector(".aantalshots__team2");
    var count = aantal.innerHTML;
    var newCount = parseInt(count)-1;
    aantal.innerHTML = newCount;

    console.log(aantal.innerHTML);
}

document.querySelector(".plusshots__team1").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".plusshots__team1");

    primus.write({
        type: "plusshots1"
    });
    
    console.log("plus shots 1 clicked");    
    e.preventDefault();
});

function PlusShots1() {

    console.log("function plushots1");
    
    var aantal = document.querySelector(".aantalshots__team1");
    var count = aantal.innerHTML;
    var newCount = parseInt(count)+1;
    aantal.innerHTML = newCount;

    console.log(aantal.innerHTML);
}

document.querySelector(".plusshots__team2").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".plusshots__team2");

    primus.write({
        type: "plusshots2"
    });
    
    console.log("plus shots 2 clicked");    
    e.preventDefault();
});

function PlusShots2() {

    console.log("function plushots2");
    
    var aantal = document.querySelector(".aantalshots__team2");
    var count = aantal.innerHTML;
    var newCount = parseInt(count)+1;
    aantal.innerHTML = newCount;

    console.log(aantal.innerHTML);
}

document.querySelector(".minfouls__team1").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".minfouls__team1");

    primus.write({
        type: "minfouls1",
    });

    console.log("min fouls 1 clicked");
    e.preventDefault();
});

function MinFouls1()
{
    console.log("function minfouls1");
    
    var aantal = document.querySelector(".aantalfouls__team1");
    var count = aantal.innerHTML;
    var newCount = parseInt(count)-1;
    aantal.innerHTML = newCount;

    console.log(aantal.innerHTML);
}

document.querySelector(".minfouls__team2").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".minfouls__team2");

    primus.write({
        type: "minfouls2",
    });

    console.log("min fouls 2 clicked");
    e.preventDefault();
});

function MinFouls2()
{
    console.log("function minfouls2");
    
    var aantal = document.querySelector(".aantalfouls__team2");
    var count = aantal.innerHTML;
    var newCount = parseInt(count)-1;
    aantal.innerHTML = newCount;

    console.log(aantal.innerHTML);
}

document.querySelector(".plusfouls__team1").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".plusfouls__team1");

    primus.write({
        type: "plusfouls1"
    });
    
    console.log("plus fouls 1 clicked");    
    e.preventDefault();
});

function PlusFouls1() {

    console.log("function plufouls1");
    
    var aantal = document.querySelector(".aantalfouls__team1");
    var count = aantal.innerHTML;
    var newCount = parseInt(count)+1;
    aantal.innerHTML = newCount;

    console.log(aantal.innerHTML);
}

document.querySelector(".plusfouls__team2").addEventListener("click", function(e) {
    var plusbutton = document.querySelector(".plusfouls__team2");

    primus.write({
        type: "plusfouls2"
    });
    
    console.log("plus fouls 2 clicked");    
    e.preventDefault();
});

function PlusFouls2() {

    console.log("function plufouls2");
    
    var aantal = document.querySelector(".aantalfouls__team2");
    var count = aantal.innerHTML;
    var newCount = parseInt(count)+1;
    aantal.innerHTML = newCount;

    console.log(aantal.innerHTML);
}

document.querySelector(".sbmtbutton").addEventListener("click", function(e) {
    var team1 = document.querySelector(".team1__input").value;

    primus.write({
        type: "team1",
        name: team1
    });

});

function TeamName1(team1)
{
    console.log(team1);

    var teamname = document.querySelector(".title1");
    var name = teamname.innerHTML;
    name = team1;

    console.log(name);
}

primus.on('data', function message(data) {

    if (data.type == "team1") {
        TeamName1(data.name);
        
    }else if (data.type == "minscore1"){
        MinScore1();
    } 
    else if (data.type == "minscore2"){
        MinScore2();
    }
    else if (data.type == "plusscore1") {
        PlusScore1();
    } 
    else if (data.type == "plusscore2") {
        PlusScore2();
    } 
    else if (data.type == "minshots1"){
        MinShots1();
    }
    else if (data.type == "minshots2"){
        MinShots2();
    }
    else if (data.type == "plusshots1") {
        PlusShots1();
    } 
    else if (data.type == "plusshots2") {
        PlusShots2();
    } 
    else if (data.type == "minfouls1"){
        MinFouls1();
    }
    else if (data.type == "minfouls2"){
        MinFouls2();
    }
    else if (data.type == "plusfouls1") {
        PlusFouls1();
    } 
    else if (data.type == "plusfouls2") {
        PlusFouls2();
    } 
});
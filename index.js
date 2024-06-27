

var randomNumber1 = Math.floor(6 * Math.random()) + 1;
var randomNumber2 = Math.floor(6 * Math.random()) + 1;

var randomDiceNumber1 = "dice" + randomNumber1 + ".png";
var randomDiceNumber2 = "dice" + randomNumber2 + ".png";

var randomImage1 = "./images/" + randomDiceNumber1;
var randomImage2 = "./images/" + randomDiceNumber2;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);

var winner=document.querySelector("h1");
if (randomDiceNumber1>randomDiceNumber2){
    winner.innerHTML="Player 1 Wins";
}
else if (randomDiceNumber1==randomDiceNumber2){
    winner.innerHTML="Tie";
}
else{
    winner.innerHTML="Player 2 wins";
}

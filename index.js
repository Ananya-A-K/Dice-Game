// Player 1
var randomNumber1=Math.ceil(Math.random()*6);
var randomDiceImage1="images/"+"dice"+randomNumber1+".png";
var newImage1=document.querySelectorAll("img")[0];
newImage1.setAttribute("src",randomDiceImage1);
// Player 2
var randomNumber2=Math.ceil(Math.random()*6);
var randomDiceImage2="images/"+"dice"+randomNumber2+".png";
var newImage2=document.querySelectorAll("img")[1];
newImage2.setAttribute("src",randomDiceImage2);
// Outcome
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player2 Wins!";
}
else{
    document.querySelector("h1").textContent="Draw!";
}
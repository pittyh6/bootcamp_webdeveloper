//dice 1
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var imgDice1 = document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");

//dice 2
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var imgDice2 = document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomNumber2 + ".png");

//validated who win or draw.
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
} else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").textContent = "Draw!";
} else {
    document.querySelector("h1").textContent = "Refresh Me";
}
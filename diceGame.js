var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomNumber1 = Math.random();
// randomNumber1 = randomNumber1 * 6;
// randomNumber1 = Math.floor(randomNumber1) + 1;

// code refactored number generator

// Player 1
var randomDiceImage1 = "diceImage/dice" + randomNumber1 + ".png";

var image1 = document.querySelector(".img1");

image1.setAttribute("src", randomDiceImage1);

// Player 2
var randomDiceImage2 = "diceImage/dice" + randomNumber2 + ".png";
var image2 = document.querySelector(".img2");

image2.setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}

// ====
// unoptimized number generator

// if (randomNumber1 === 1) {
//   document.querySelector(".img1").setAttribute("src", "diceImage/dice1.png");
// }

// if (randomNumber1 === 2) {
//   document.querySelector(".img1").setAttribute("src", "diceImage/dice2.png");
// }

// if (randomNumber1 === 3) {
//   document.querySelector(".img1").setAttribute("src", "diceImage/dice3.png");
// }

// if (randomNumber1 === 4) {
//   document.querySelector(".img1").setAttribute("src", "diceImage/dice4.png");
// }

// if (randomNumber1 === 5) {
//   document.querySelector(".img1").setAttribute("src", "diceImage/dice5.png");
// }

// if (randomNumber1 === 6) {
//   document.querySelector(".img1").setAttribute("src", "diceImage/dice6.png");
// }

// ===

// Player 2

// refactored number generator

// ====
// unoptimized generator

// if (randomNumber2 === 1) {
//   document.querySelector(".img2").setAttribute("src", "diceImage/dice1.png");
// }

// if (randomNumber2 === 2) {
//   document.querySelector(".img2").setAttribute("src", "diceImage/dice2.png");
// }

// if (randomNumber2 === 3) {
//   document.querySelector(".img2").setAttribute("src", "diceImage/dice3.png");
// }

// if (randomNumber2 === 4) {
//   document.querySelector(".img2").setAttribute("src", "diceImage/dice4.png");
// }

// if (randomNumber2 === 5) {
//   document.querySelector(".img2").setAttribute("src", "diceImage/dice5.png");
// }

// if (randomNumber2 === 6) {
//   document.querySelector(".img2").setAttribute("src", "diceImage/dice6.png");
// }

// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "Player 1 Wins";
// }

// if (randomNumber1 < randomNumber2) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins";
// }

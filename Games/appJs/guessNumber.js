"use strict";

const closeBtn = document.querySelector(".close-modal");
const btnReset = document.querySelector(".again");
const showNumber = document.querySelector(".number");
const numberGuess = document.querySelector(".guess");
const btnCheck = document.querySelector(".check");
const message = document.querySelector(".message");
const currentScore = document.querySelector(".score");
const highScore = document.querySelector(".highscore");

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highestScore = 0;

btnCheck.addEventListener("click", function () {
  let guess = Number(numberGuess.value);
  if (!guess) {
    message.textContent = "Enter a Guess 🤦‍♂️";
  } else if (guess === secretNumber) {
    message.textContent = "You Win 🎉🏆";
    showNumber.textContent = secretNumber;
    document.querySelector(".gameOne").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    if (score > highestScore) {
      highestScore = score;
      highScore.textContent = highestScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      score;
      currentScore.textContent = score;
      message.textContent = guess > secretNumber ? "Too High 📈" : "Too Low 📉";
    } else {
      message.textContent = "Game Over 💣💣💣";
    }
  }
});

btnReset.addEventListener("click", function () {
  highScore.textContent = 0;
  currentScore.textContent = 20;
  message.textContent = "Start Guessing..";
  showNumber.textContent = "?";
  numberGuess.value = "";
  document.querySelector(".gameOne").style.backgroundColor = "grey";
  document.querySelector(".number").style.width = "15rem";
});

closeBtn.addEventListener("click", function () {
  document.querySelector(".gameOne").classList.add("hidden");
});

document.querySelector(".game1").addEventListener("click", function () {
  document.querySelector(".gameOne").classList.remove("hidden");
});

"use strict";
//selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const current0El = document.querySelector("#current--0");
const score1El = document.querySelector("#score--1");
const current1El = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".gameTwo-btn--new");
const btnRoll = document.querySelector(".gameTwo-btn--roll");
const btnHold = document.querySelector(".gameTwo-btn--hold");
const shutBtn = document.querySelector(".close-gameTwo");
const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  scoreNow = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

let scores, scoreNow, activePlayer, playing;
const init = function () {
  scores = [0, 0];
  scoreNow = 0;
  activePlayer = 0;
  playing = true;
  diceEl.classList.add("hidden");

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();

//rolling dice functionalities

btnRoll.addEventListener("click", function () {
  if (playing) {
    //1. Generate a random dice row
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. display the dice
    diceEl.classList.remove("hidden");
    diceEl.src = `img/dice-${dice}.png`;

    //3. check for rolled 1, if true switch to next player
    if (dice !== 1) {
      // add dice to current score;
      scoreNow += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        scoreNow;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    //add current to the score of active players
    scores[activePlayer] += scoreNow;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check if scores >=100
    if (scores[activePlayer] >= 50) {
      //finish game
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
  //next player
});
btnNew.addEventListener("click", init);

shutBtn.addEventListener("click", function () {
  document.querySelector(".gameTwo").classList.add("hidden");
  console.log("clicked");
});

document.querySelector(".game2").addEventListener("click", function () {
  document.querySelector(".gameTwo").classList.remove("hidden");
});

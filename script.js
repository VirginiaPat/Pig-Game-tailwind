"use strict";

// Selecting elements
const player0El = document.getElementById("player--0");
const player1El = document.getElementById("player--1");

const name0El = document.getElementById("name--0");
const name1El = document.getElementById("name--1");

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");

const currentBg0El = document.getElementById("current-bg--0");
const currentBg1El = document.getElementById("current-bg--1");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.getElementById("dice");

const btnNew = document.getElementById("btn--new");
const btnRoll = document.getElementById("btn--roll");
const btnHold = document.getElementById("btn--hold");

//---------------------------------------------------------
let scores, currentScore, activePlayer, playing;

// Function to set the initial values and styles-----------
const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add("hidden");

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  player0El.classList.remove("bg-(--color-grey-extra-dark)");
  player0El.classList.add("bg-(--color-bg-grey-op40)");
  player1El.classList.remove("bg-(--color-grey-extra-dark)");
  player1El.classList.remove("bg-(--color-bg-grey-op40)");

  name0El.classList.remove("font-medium");
  name0El.classList.add("font-semibold");
  name1El.classList.remove("font-semibold");
  name1El.classList.add("font-medium");

  score0El.classList.remove("font-medium");
  score0El.classList.add("font-normal");
  score1El.classList.remove("font-normal");
  score1El.classList.add("font-medium");

  currentBg0El.classList.remove("opacity-80");
  currentBg0El.classList.add("opacity-100");
  currentBg1El.classList.remove("opacity-100");
  currentBg1El.classList.add("opacity-80");
};

init();

// switch player function--------------------------------
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  //add and remove classes on active player
  player0El.classList.toggle("bg-(--color-bg-grey-op40)");
  player1El.classList.toggle("bg-(--color-bg-grey-op40)");

  name0El.classList.toggle("font-semibold");
  name0El.classList.toggle("font-medium");
  name1El.classList.toggle("font-medium");
  name1El.classList.toggle("font-semibold");

  score0El.classList.toggle("font-normal");
  score0El.classList.toggle("font-medium");
  score1El.classList.toggle("font-medium");
  score1El.classList.toggle("font-normal");

  currentBg0El.classList.toggle("opacity-100");
  currentBg0El.classList.toggle("opacity-80");
  currentBg1El.classList.toggle("opacity-80");
  currentBg1El.classList.toggle("opacity-100");
};

// Rolling dice functionality--------------------------------
btnRoll.addEventListener("click", function () {
  if (playing) {
    // Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// hold button functionality--------------------------------------
btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //check if active player has score >=20
    if (scores[activePlayer] >= 20) {
      //active player wins and game is finished
      playing = false;
      diceEl.classList.add("hidden");
      document
        .getElementById(`player--${activePlayer}`)
        .classList.add("bg-(--color-grey-extra-dark)");
      document
        .getElementById(`name--${activePlayer}`)
        .classList.add("font-semibold", "text-(--color-orange)");

      document.getElementById(`current--${activePlayer}`).textContent = 0;
    } else {
      switchPlayer();
    }
  }
});

// button new functionality--------------------------------------
btnNew.addEventListener("click", init);

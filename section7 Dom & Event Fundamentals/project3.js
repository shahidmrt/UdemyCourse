// Selecting Elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");

const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

// Starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Rolling Dice Functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6 + 1);
    console.log("dice number click", dice);

    //2. Display Dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice--${dice}.png`;

    // 3. Check the rolled 1: if true, switch to next player
    if (dice !== 1) {
      // Add dice to Current Score
      // currentScore = currentScore + dice;
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // currentScore =0;
      // document.getElementById(`current--${activePlayer}`).textContent = currentScore;
      // // document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // // document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
      // // OR
      // player0El.classList.toggle("player--active");
      // player1El.classList.toggle("player--active");
      switchPlayer();
    }
  }
});

// HOLD CURRENT NUMBER TO TOTAL SCORE
btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to active player's score
    // score0El.textContent += currentScore;
    //  scores[activePlayer] = scores[activePlayer] + currentScore;
    //  scores[1] = scores[1] + currentScore;
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //  2. check if player's score is >= 100 then finish the game
    if (scores[activePlayer] >= 20) {
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
      document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
      diceEl.classList.add("hidden");
      const el = document.getElementById(`name--${activePlayer}`);
      el.textContent = el.textContent + " win"; // => "Player 1 win"
    }

    // switch to the next player
    //   currentScore = 0;
    //   document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    //   activePlayer = activePlayer === 0 ? 1 : 0;
    //   player0El.classList.toggle("player--active");
    //   player1El.classList.toggle("player--active");
    switchPlayer();
  }
});

// RESTART THE NEW GAME
btnNew.addEventListener("click", function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");

  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;

  const el = document.getElementById(`name--0`);
  el.textContent = "Player 1";
  const el2 = document.getElementById(`name--1`);
  el2.textContent = "Player 2";
});

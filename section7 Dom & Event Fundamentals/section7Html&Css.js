"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore =0

const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
  

}




document.querySelector(".btn_check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
  // document.querySelector('.number').textContent = secretNumber;
  const guess = document.querySelector(".guess").value;

  if (!guess) {
    // document.querySelector(".message").textContent = "No number!";
    displayMessage('No number!')
  } else if (guess == secretNumber) {
    // document.querySelector(".message").textContent = "Correct Number!";
    displayMessage('Correct Number!')
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '15rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too High!";
  //     score = score - 1;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "Game is Over!";
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too Low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "Game is Over!";
  //   }
  // }
} else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent = guess > secretNumber ? "Too High!" : "Too Low!";
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low!")
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "Game is Over!";
    displayMessage('Game is Over!')
      document.querySelector(".score").textContent = 0;
    }
}
  
});

 
// CODING CHALENGE
//  RESTART THE GAME  (AGAIN)
 document.querySelector('.btn_again').addEventListener('click', function(){
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage('Start guessing...')
  document.querySelector(".score").textContent = score ;
  document.querySelector(".number").textContent = '?';
  document.querySelector(".guess").value = '';
  document.querySelector('body').style.backgroundColor = '#222';

 })


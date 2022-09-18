// business logic

/*
function activePlayer(){

}

function playerOne() {
  score = playerOneScore
  activePlayer = true
}

function playerTwo() {
  score = playerTwoScore
  activePlayer = false
}
*/

let playerOneScore = document.getElementById("playerOneScore");
let playerTwoScore = document.getElementById("playerTwoScore");
let currentTurn = document.getElementById("currentTurn");
let playerOne = 1

// dice variable

function playerRoll() {
  let roll = Math.floor(Math.random() * 6) + 1;
  if (roll !== 1) {
    currentTurn += roll;
  } else {
      currentTurn = 0;
  }
}

function addScore() {
  if (playerOne = 1) {
    playerOneScore += currentTurn;
    playerOne = 0;
  } else (playerOne = 0) {
    playerTwoScore += currentTurn;
    playerOne = 1;
  }
}
// UI logic

// eventlistener for "roll dice" button = run playerRoll()
// eventlistener for "endturn" button = run addScore()



// business logic

// dice variable
function Player() {
  this.activePlayer = 1;
  this.currentTurn = currentTurn;
}

Player.prototype.roll = function () {
  return Math.floor(Math.random() * 6) + 1;
}

Player.prototype.diceRoll = function() {
  if (this.roll !== 1) {
    this.currentTurn += this.roll;
  } else {
      this.currentTurn = 0;
  }
}

Player.prototype.addScore = function() {
  if (this.activePlayer = 1) {
    playerOneScore += this.currentTurn;
    this.activePlayer = 0;
  } else if (this.activePlayer = 0) {
    playerTwoScore += this.currentTurn;
    this.activePlayer = 1;
  }
}


// UI logic

window.addEventListener('load', function() {
  document.getElementById("rollDice").addEventListener('click', this.diceRoll);
})

function runGame(event) {
  event.preventDefault();
  let playerOneScore = document.getElementById("playerOneScore");
  let playerTwoScore = document.getElementById("playerTwoScore");


}












// eventlistener for "roll dice" button = run playerRoll()
// eventlistener for "endturn" button = run addScore()



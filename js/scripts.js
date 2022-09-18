// business logic

//player constructor
function Player(name, score, turnScore) {
  this.name = name;
  this.score = score;
  this.turnScore = turnScore;
}



// dice variable
let diceRoll = Math.floor(Math.random() * 6) + 1;
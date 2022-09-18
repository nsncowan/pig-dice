### Notes
* object for each player [name, score, ]
* object for the game [rules, procedures, etc]
* button to roll
* random number generator (1-6)
* button to switch players
* function to get the number generated
* function add generated number to the appropriate player's score
* counting for loop for each score
* a function to clear the score for the turn if the player rolls a 1
* a counter to count the number of rolls per turn (and/or rolls total)
* a function the returns a game over/winner message when a player reaches 100



### TDD

Test: It should output a value between one and six when diceRoll is called
Code: let diceRoll = value
Expected Output: number between 1 and 6

Test: it should add diceRoll output to currentTurn variable
code: let diceRoll = value; let score = Number
expected output: Number + value

Test: It should continue players turn when any number other than one is rolled
Code: playerRoll = value
Expected Output: number rolled

Test: It should stop players turn when one is rolled
Code: playerRoll = 1
Expected Output: 0

Test: it should add currentTurn number to player score
Code:
Expected Output:

Test: It should add currentTurn to player 1
Code: addscore(1)
Expected Output: 
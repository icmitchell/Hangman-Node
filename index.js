var Word = require("./word.js")
var inquirer = require("inquirer");

var wordsArray = ["awkward","bagpipes","banjo","bungler","croquet","crypt","dwarves","fervid","fishhook","fjord","gazebo","gypsy","haiku","haphazard","hyphen","ivory","jazzy","jiffy","jinx","jukebox","kayak","kiosk","klutz","memento","mystify","numbskull","ostracize","oxygen","pajama","phlegm","pixel","polka","quad","quip","rhythmic","rogue","sphinx","squawk","swivel","toady","twelfth","unzip","waxy","wildebeest","yacht","zealous","zigzag","zippy","zombie"]

function game() {
	var remainingGuesses = 15
	var random = Math.floor(Math.random() * Math.floor(wordsArray.length))
	var guessedArray = []
	var word = new Word(wordsArray[random]);
	word.display()
	function guess(){
		inquirer.prompt([ 
		{
			type: "input",
			message: "Guess a Letter",
			name: "guess"
		}
		]).then(function(resp) {
			if (resp.guess.length != 1) {
				console.log("One Letter at a time please")
				guess()
			}
			else {
				if (guessedArray.indexOf(resp.guess) != -1) {
					console.log("You have already guessed that")
					guess()
				}
				else {
					guessedArray.push(resp.guess)
					word.check(resp.guess)
					if (word.solved === false) {
						guess()
					}
					else {
						inquirer.prompt ([ 
						{
							type: "confirm",
							message: "Would you like a new word?",
							name: "again"
						}
						]).then(function(resp) {
							if (resp.again) {
								game()
							}
							else {
								console.log("Game Over")
							}
						})
					}
				}
			}
		})
	}
	guess()
}


game()

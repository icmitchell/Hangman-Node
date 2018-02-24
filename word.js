var Letter = require("./letter.js")

module.exports = function Word(arg){
	this.solved = false;
	this.wordArray = arg.split("");
	this.letterArray = [];
	for (var i = 0; i < this.wordArray.length; i++) {
		var letter = new Letter(this.wordArray[i])
		this.letterArray.push(letter)
	}
	this.display = function(){
		this.wordArray = [];
		for (var i = 0; i < this.letterArray.length; i++) {
			this.wordArray.push(this.letterArray[i].disp());
		}
		console.log(this.wordArray.join(" "))
	}
	this.check = function(lettr) {
		for (var i = 0; i < this.letterArray.length; i++) {
			this.letterArray[i].compare(lettr);
		}
		this.display()
		if (this.wordArray.indexOf("_") === -1) {
			this.solved = true;
		}
	}
	
}

module.exports = function Letter(arg){
	this.letter = arg;
	this.guessed = false
	this.disp = function() {
		if (this.guessed) {
			return this.letter
		}

		if (this.guessed === false) {
			return "_"
		}
	}
	this.compare = function(guess) {
		if (this.letter === guess) {
			this.guessed = true
		}
		this.disp()
	}
}


// Game Logics
var wrongLetters = [];
var currentWordIndex = "";
var answerDisplay = [];
var currentWrdLetters = [];
var numBlanks = 0;

// Stats
var wins = 0;
var losses = 0;
var remainingGuesses = 8;


// Array listing all words used in the game
var words = ["subzero", "quanchi", "shinnok", "raiden", "cyrax", "sector", "linkuei"]

// Array listing every letter of the alphabet
var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]


// Variables that hold references to the places in the HTML.
var displayWins = document.getElementById("display-wins");
var displayLosses = document.getElementById("display-losses");
var currentWord = document.getElementById("current-word");
var guessesRemaining = document.getElementById("guesses-remaining");
var alreadyGuessed = document.getElementById("already-guessed");

var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "./assets/sounds/Get Over Here!.mp3");


// New Game
function newGame() {

    // Generates random word from words array
    currentWordIndex = words[Math.floor(Math.random() * words.length)];
        console.log("The current word is: " + currentWordIndex);
    // Splits word up by letters
    currentWrdLetters = currentWordIndex.split("");
        console.log("The number of letters are: " + currentWrdLetters)
    // shows number of blanks needed for randomly generated word
    numBlanks = currentWrdLetters.length;
        console.log("The number of listters in current word: " + numBlanks);
   
    //resets variables
    remainingGuesses = 8;
    wrongLetters = [];
    answerDisplay = [];

    // pushed underscore to answerdisplay array for total number of letters for word
    for (i = 0; i < numBlanks; i++) {
        answerDisplay.push("_");
        console.log(answerDisplay)
    }
    //reset HTML variables
    currentWord.textContent = "Current Word: " + " " + answerDisplay.join(" ");
    guessesRemaining.textContent = "Number of Guesses Remaining: " + " " + remainingGuesses;
    displayWins.textContent = "Wins: " + " " + wins;
    displayLosses.textContent = "Losses: " + " " + losses;
        
}

// Letter Check
function checkLetter(letter) {
    if (KeyboardEvent.code >= 65 && KeyboardEvent.code <= 90) {

		//Check if the letter guessed is one of the letters in the word
		var correctLetter = false;

			for ( var i = 0; i < numBlanks; i++) {
				if(currentWordIndex[i] == letter) {
				    correctLetter = true;
					}
			    }

		//Check where the correct letter is located on the word, then add to html
				if(correctLetter) {
				for ( var i = 0; i < numBlanks; i++) {
					if(currentWordIndex[i] == letter) {
					    answerDisplay[i] = letter;
					        }
					    }
					}

		//If the letter isn't part of the word
					else {
						wrongLetters.push(letter);
						remainingGuesses--
					}
                }

}

// Round by Round
function round(){

    currentWord.textContent = "Current Word: " + " " + answerDisplay.join(" ");
    guessesRemaining.textContent = "Number of Guesses Remaining: " + " " + remainingGuesses;
    alreadyGuessed.textContent = "Already guessed: " + " " + wrongLetters.join(" ")


//When user wins
    if (currentWrdLetters.toString() == answerDisplay.toString()) {
        wins++;
        alert("You guessed " + currentWord + " ")
        audioElement.play()
        displayWins.textContent = "Wins: " + " " + wins;

        newGame();
        alreadyGuessed.textContent = "Already guessed: " + " " + " ";

    } else if (remainingGuesses =0) {
        losses++;
        alert("FATALITY")
        displayLosses.textContent = "Losses: " + " " + losses;
        newGame();
        alreadyGuessed.textContent = "Already guessed: " + " " + " ";
    }
}

// Play the Game
newGame();

document.onkeydown = function(event) {

}
round()






// Array listing total number of words
var NumberOfWords = 5

// Array listing all words used in the game
var words = ["reunion", "genesis", "overload", "maximum", "sovereign"]

// Array listing every letter of the alphabet
var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]


// Create variables that hold references to the places in the HTML where we want to display things.
var displayWins = document.getElementById("display-wins");
var currentWord = document.getElementById("current-word");
var guessesRemaining = document.getElementById("guesses-remaining");
var alreadyGuessed = document.getElementById("already-guessed");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

currentWord.textContent = words[Math.floor(Math.random() * words.length)];

// Shows letter user presses under "Letters Already Guessed"
document.onkeyup = function(event) {
    alreadyGuessed.textContent = event.key
}

    
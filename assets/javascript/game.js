
// Game Logics
var maxTries = 6;
var wrongLetters = [];
var currentWordIndex = "";
var remainingGuesses = 0;
var answerDisplay = [];
var gameStart = false;
var gameFinish = false;
var wins = false;
var currentWrdLetters = [];


// Array listing all words used in the game
var words = ["reunion", "genesis", "overload", "maximum", "sovereign"]

// Array listing every letter of the alphabet
var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]


// Variables that hold references to the places in the HTML.
var displayWins = document.getElementById("display-wins");
var currentWord = document.getElementById("current-word");
var guessesRemaining = document.getElementById("guesses-remaining");
var alreadyGuessed = document.getElementById("already-guessed");


// New Game
function newGame() {
    // Generates random word from words array
    currentWordIndex = words[Math.floor(Math.random() * words.length)];
        console.log("The current word is: " + currentWordIndex);
    
    currentWrdLetters = currentWordIndex.split("");
        console.log("The number of letters are: " + currentWrdLetters)
    
    numBlanks = currentWrdLetters.length;
        console.log("number of letters " + numBlanks)
}
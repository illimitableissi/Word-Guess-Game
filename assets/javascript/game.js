
// Game Logics
var wrongLetters = [];
var currentWordIndex = "";
var answerDisplay = [];
var gameStart = false;
var gameFinish = false;
var currentWrdLetters = [];
var numBlanks = 0;

// Stats
var wins = 0;
var losses = 0;
var remainingGuesses = 8;


// Array listing all words used in the game
var words = ["reunion", "genesis", "overload", "maximum", "sovereign"]

// Array listing every letter of the alphabet
var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]


// Variables that hold references to the places in the HTML.
var displayWins = document.getElementById("display-wins");
var displayLosses = document.getElementById("display-losses");
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
        console.log("The number of listters in current word: " + numBlanks);

    guessesRemaining = 8;
    wrongLetters = [];
    answerDisplay = [];

    for (i = 0; i < numBlanks; i++) {
        answerDisplay.push("_")
    }

    currentWord.textcontent = answerDisplay.join(" ");
    guessesRemaining.textcontent = "Number of Guesses Remaining: " + " " + remainingGuesses
    displayWins.textContent = "Wins: " + " " + wins;
    displayLosses.textcontent = "Losses: " + " " + losses;
        
}




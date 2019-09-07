
// Game Logics
var maxTries = 10;
var guessedLetters = [];
var currentWordIndex;
var remainingGuesses = 0;
var guessingWord = [];
var gameStart = false;
var gameFinish = false;
var wins = false;


// Array listing all words used in the game
var words = ["reunion", "genesis", "overload", "maximum", "sovereign"]

// Array listing every letter of the alphabet
var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]


// Variables that hold references to the places in the HTML.
var displayWins = document.getElementById("display-wins");
var currentWord = document.getElementById("current-word");
var guessesRemaining = document.getElementById("guesses-remaining");
var alreadyGuessed = document.getElementById("already-guessed");

// On Game Start Up



function Hangman() {

// Generates random word from words array
currentword = words[Math.floor(Math.random() * words.length)];

// Creating answer array loop
var answerArray = [];
for (var i = 0; i < word.length; i++) {}



}
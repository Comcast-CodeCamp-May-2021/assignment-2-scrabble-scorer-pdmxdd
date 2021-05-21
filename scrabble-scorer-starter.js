// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

// original scoring object used in oldScrabbleScorer
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

// the following function is never edited and is a good example of how the score is calculate for a given word using oldPointStructure
function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  // get some user input specfically a word for us to score
   console.log("Let's play some scrabble! Enter a word:");
};

// function thta will calculate simple score from a provided word
let simpleScore = function() {
  
};


// function that will calculate Vowel Bonus score from a provided word
let vowelBonusScore; 

// function that originally calls the oldScrabbleScorer() function, but is later updated to use the newPointStructure (not a part of oldScrabbleScorer())
let scrabbleScore; 

const scoringAlgorithms = []; // create new objects (object literal) inside of scoring Algorithms

// each should have:
// property-> name (value provided in table)
// property-> description (value provided in table)
// method-> scorerFunction (value should align with one of the scoring functions (simpleScore, vowelBonusScore, odlScrabbleScorer)

// this function should allow the user to select from a list the three scoring options -> it should return the coinciding object the user has selected
function scorerPrompt() {
} // you will need to invoke (call) this function inside of the runProgram() function below

// a function that takes an object as a parameter (the oldPointStructure) and returns a new object with lowercase versions of the values
function transform() {};

// newPointStructure should be the return value of the transform() function & will be used in scrabbleScore during part C
let newPointStructure;

function runProgram() {
  initialPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};


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
  //  console.log("Let's play some scrabble! Enter a word:");
  word = input.question("Let's play some scrabble! Enter a word: ").toUpperCase();
  // console.log(`oldScrabbleScorer: ${oldScrabbleScorer(word)}`);
  // console.log(`simple score: ${simpleScore(word)}`);
  // console.log(`vowel score: ${vowelBonusScore(word)}`);
  return word;
};

// function thta will calculate simple score from a provided word
// let simpleScore; 
function simpleScore(word) {
    const validLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let score = 0;
  for(const letter of word) {
    if(validLetters.includes(letter.toLowerCase())) {
      score += 1;
    }
  }
  return score;
}

// function that will calculate Vowel Bonus score from a provided word
// let vowelBonusScore; 
function vowelBonusScore(word) {
  const consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
  const vowels = ["a","e","i","o","u"];
  let score = 0;
  for(const letter of word) {
    if(consonants.includes(letter.toLowerCase())) {
      score += 1;
    }
    else if(vowels.includes(letter.toLowerCase())) {
      score += 3;
    }
  }
  return score;
}

// function that originally calls the oldScrabbleScorer() function, but is later updated to use the newPointStructure (not a part of oldScrabbleScorer())
let scrabbleScore = (word) => {
  let score = 0;
  for(const letter of word) {
    score += newPointStructure[letter.toLowerCase()];
  }
  return score;
}; 

const scoringAlgorithms = [
  {
    name: "Simple Score",
    description: "Each letter is worth 1 point.",
    scorerFunction: simpleScore
  },
  {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scorerFunction: vowelBonusScore
  },
  {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    scorerFunction: scrabbleScore
  }
]; // create new objects (object literal) inside of scoring Algorithms

// each should have:
// property-> name (value provided in table)
// property-> description (value provided in table)
// method-> scorerFunction (value should align with one of the scoring functions (simpleScore, vowelBonusScore, oldScrabbleScorer)

// this function should allow the user to select from a list the three scoring options -> it should return the coinciding object the user has selected
function scorerPrompt() {
  let scoringOption = -1;
  const validOptions = ["0", "1", "2"];
  while(!validOptions.includes(scoringOption)) {
    console.log("Option 0: Simple areScoring");
    console.log("Option 1: Bonus Vowel Scoring");
    console.log("Option 2: Scrabble Scoring");
    scoringOption = input.question("Please enter a choice from the list above: ");
  }

  console.log(`You chose: ${scoringAlgorithms[Number(scoringOption)].name}`);

  return scoringAlgorithms[Number(scoringOption)];

} // you will need to invoke (call) this function inside of the runProgram() function below

// a function that takes an object as a parameter (the oldPointStructure) and returns a new object with lowercase versions of the values
function transform(oldPointStructure) {
  theNewStruct = {};
  for(const key in oldPointStructure) {
    for(const element of oldPointStructure[key]) {
      theNewStruct[element.toLowerCase()] = Number(key);
    }
  }
  return theNewStruct;
};

// newPointStructure should be the return value of the transform() function & will be used in scrabbleScore during part C
let newPointStructure = transform(oldPointStructure);


function runProgram() {
  word = initialPrompt();
  scoringChoice = scorerPrompt();
  console.log(`You scored: ${scoringChoice.scorerFunction(word)} using the ${scoringChoice.name} ruleset with the word: ${word}.`);
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


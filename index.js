const input = require('readline-sync');

let canidateName = "";
let questionsArray = ["True or false: 5000 meters = 5 kilometers? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "Who was the first American woman in space? ", "What is the minimum crew size for the International Space Station (ISS)? "];
let answersArray = ["True", "40", "Trajectory", "Sally Ride", "3"];
let canidateResponseArray = [];
let numOfCorrectResponses = 0;
let overallGrade = null;
let status = "";

canidateName = input.question("What is your name? ");

// Ask all questions from array and put answers in an array
for (let i=0;i<questionsArray.length;i++) {
  canidateResponseArray.push(input.question(questionsArray[i]));
}

// use array to check answers
for (let i=0;i<canidateResponseArray.length;i++) {
  if (canidateResponseArray[i].toLowerCase() === answersArray[i].toLowerCase()) {
    numOfCorrectResponses++;
  }
}

//calculate % and detemine pass/fail
overallGrade = numOfCorrectResponses / questionsArray.length * 100;
if (overallGrade >= 80) {
  status = 'PASSED';
} else {
  status = 'FAILED'; 
}

//print out results
console.log(`\n\nCandidate Name: ${canidateName}\n`);

let j = 1;
for (let i=0;i<questionsArray.length;i++) {
  console.log(`${j}) ${questionsArray[i]}`);
  console.log(`Your Answer: ${canidateResponseArray[i]}`);
  console.log(`Correct Answer: ${answersArray[i]}\n`);
  j++;
}

console.log(`>>> Overall Grade: ${overallGrade}% (${numOfCorrectResponses} of ${canidateResponseArray.length} responses correct) <<<`);
console.log(`>>> Status: ${status} <<<`);
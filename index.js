// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Counter 1 uses a closure to create a new private variable which allows it to be used with other variables and track seperately. Counter 2 simply increments without using a return or allowing you to increment seperately.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * Counter 1, because it uses a function after the first return to run a child function after the parent has terminated
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * When multiple types of counters need to be used simultaneously. When there only needs to be 1 counter, for simplicity.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(innNum){
  // return console.log(`${innNum}: ${Math.floor(Math.random() * Math.floor(3))}`);
  let gameScore = 0;
  for(let i = 0; i < innNum; i++){
    let score = Math.floor(Math.random() * Math.floor(3));
    gameScore += score
  }
  return gameScore;
} 

console.log(inning(1));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, innNum){
  let final = {
    Home: inning(innNum),
    Away: inning(innNum)
  }
  return final;  
};

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(inning, innNum) {
  let currentScore = 0;
  let currentScore2 = 0;
  if(innNum === 1){
    return console.log(`1st inning ${currentScore += inning(innNum)} - ${currentScore2 += inning(innNum)}`)
  } else if(innNum === 2){
    console.log(`1st inning ${currentScore += inning(innNum - 1)} - ${currentScore2 += inning(innNum - 1)}`)
    return console.log(`2nd inning ${currentScore += inning(innNum - 1)} - ${currentScore2 += inning(innNum - 1)}`)
  }else if(innNum === 3){
    console.log(`1st inning ${currentScore += inning(innNum - 2)} - ${currentScore2 += inning(innNum - 2)}`)
    console.log(`2nd inning ${currentScore += inning(innNum - 2)} - ${currentScore2 += inning(innNum - 2)}`)
    return console.log(`3rd inning ${currentScore += inning(innNum -2)} - ${currentScore2 += inning(innNum - 2)}`)
  }else if(innNum === 4){
    console.log(`1st inning ${currentScore += inning(innNum - 3)} - ${currentScore2 += inning(innNum - 3)}`)
    console.log(`2nd inning ${currentScore += inning(innNum - 3)} - ${currentScore2 += inning(innNum - 3)}`)
    console.log(`3rd inning ${currentScore += inning(innNum -3)} - ${currentScore2 += inning(innNum - 3)}`)
    return console.log(`4th inning ${currentScore += inning(innNum -3)} - ${currentScore2 += inning(innNum - 3)}`)
  }else if(innNum === 5){
    console.log(`1st inning ${currentScore += inning(innNum - 4)} - ${currentScore2 += inning(innNum - 4)}`)
    console.log(`2nd inning ${currentScore += inning(innNum - 4)} - ${currentScore2 += inning(innNum - 4)}`)
    console.log(`3rd inning ${currentScore += inning(innNum -4)} - ${currentScore2 += inning(innNum - 4)}`)
    console.log(`4th inning ${currentScore += inning(innNum -4)} - ${currentScore2 += inning(innNum - 4)}`)
    return console.log(`5th inning ${currentScore += inning(innNum -4)} - ${currentScore2 += inning(innNum - 4)}`)
  }else if(innNum === 6){
    console.log(`1st inning ${currentScore += inning(innNum - 5)} - ${currentScore2 += inning(innNum - 5)}`)
    console.log(`2nd inning ${currentScore += inning(innNum - 5)} - ${currentScore2 += inning(innNum - 5)}`)
    console.log(`3rd inning ${currentScore += inning(innNum -5)} - ${currentScore2 += inning(innNum - 5)}`)
    console.log(`4th inning ${currentScore += inning(innNum -5)} - ${currentScore2 += inning(innNum - 5)}`)
    console.log(`5th inning ${currentScore += inning(innNum -5)} - ${currentScore2 += inning(innNum - 5)}`)
    return console.log(`6th inning ${currentScore += inning(innNum -5)} - ${currentScore2 += inning(innNum - 5)}`)
  }else if(innNum === 7){
    console.log(`1st inning ${currentScore += inning(innNum - 6)} - ${currentScore2 += inning(innNum - 6)}`)
    console.log(`2nd inning ${currentScore += inning(innNum - 6)} - ${currentScore2 += inning(innNum - 6)}`)
    console.log(`3rd inning ${currentScore += inning(innNum -6)} - ${currentScore2 += inning(innNum - 6)}`)
    console.log(`4th inning ${currentScore += inning(innNum -6)} - ${currentScore2 += inning(innNum - 6)}`)
    console.log(`5th inning ${currentScore += inning(innNum -6)} - ${currentScore2 += inning(innNum - 6)}`)
    console.log(`6th inning ${currentScore += inning(innNum -6)} - ${currentScore2 += inning(innNum - 6)}`)
    return console.log(`7th inning ${currentScore += inning(innNum -6)} - ${currentScore2 += inning(innNum - 6)}`)
  }else if(innNum === 8){
    console.log(`1st inning ${currentScore += inning(innNum - 7)} - ${currentScore2 += inning(innNum - 7)}`)
    console.log(`2nd inning ${currentScore += inning(innNum - 7)} - ${currentScore2 += inning(innNum - 7)}`)
    console.log(`3rd inning ${currentScore += inning(innNum -7)} - ${currentScore2 += inning(innNum - 7)}`)
    console.log(`4th inning ${currentScore += inning(innNum -7)} - ${currentScore2 += inning(innNum - 7)}`)
    console.log(`5th inning ${currentScore += inning(innNum -7)} - ${currentScore2 += inning(innNum - 7)}`)
    console.log(`6th inning ${currentScore += inning(innNum -7)} - ${currentScore2 += inning(innNum - 7)}`)
    console.log(`7th inning ${currentScore += inning(innNum -7)} - ${currentScore2 += inning(innNum - 7)}`)
    return console.log(`8th inning ${currentScore += inning(innNum -7)} - ${currentScore2 += inning(innNum - 7)}`)
  }else if(innNum === 9){
    console.log(`1st inning ${currentScore += inning(innNum - 8)} - ${currentScore2 += inning(innNum - 8)}`)
    console.log(`2nd inning ${currentScore += inning(innNum - 8)} - ${currentScore2 += inning(innNum - 8)}`)
    console.log(`3rd inning ${currentScore += inning(innNum -8)} - ${currentScore2 += inning(innNum - 8)}`)
    console.log(`4th inning ${currentScore += inning(innNum -8)} - ${currentScore2 += inning(innNum - 8)}`)
    console.log(`5th inning ${currentScore += inning(innNum -8)} - ${currentScore2 += inning(innNum - 8)}`)
    console.log(`6th inning ${currentScore += inning(innNum -8)} - ${currentScore2 += inning(innNum - 8)}`)
    console.log(`7th inning ${currentScore += inning(innNum -8)} - ${currentScore2 += inning(innNum - 8)}`)
    console.log(`8th inning ${currentScore += inning(innNum -8)} - ${currentScore2 += inning(innNum - 8)}`)
    console.log(`9th inning ${currentScore += inning(innNum -8)} - ${currentScore2 += inning(innNum - 8)}`)
    return console.log(`Final Score: ${currentScore} - ${currentScore2}`)
  }else{
    return console.log(`Invalid inning or data entry`)
  }
}

scoreboard(inning, 9);



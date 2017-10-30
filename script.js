//Generating random number from 1 to 6 formula
var randomNumber = Math.floor(Math.random() * 6) + 1;
var correctGuess = false;
var guess = prompt('Guess a number between 1 and 6. What is it?');

if (parseInt(guess) === randomNumber) {
  correctGuess = true;
} else if (parseInt(guess) < randomNumber) {
  var guessMore = prompt('Try again. The random number is more than ' + guess);
  if (parseInt(guessMore) === randomNumber) {
    correctGuess = true;
  }
} else if (parseInt(guess) > randomNumber) {
  var guessLess = prompt('Try again. The random number is less than ' + guess);
  if (parseInt(guessLess) === randomNumber) {
    correctGuess = true;
  }
}

if (correctGuess) {
   document.write('<p>You guessed the right number!</p>');
} else {
  document.write('<p>Sorry, the number was ' + randomNumber + '</p>');
}



//Asking 5 questions and receive a prize
var correctAnswers = 0;

var question1 = prompt('What day is today?');
if (question1.toLowerCase() === 'monday') {
  correctAnswers += 1;  
}
var question2 = prompt('What day is tomorrow?');
if (question2.toLowerCase() === 'tuesday') {
    correctAnswers += 1;
 }
var question3 = prompt('What day was yesterday?');
if (question3.toLowerCase() === 'sunday') {
    correctAnswers += 1;
 }
var question4 = prompt('What day is after friday?');
if (question4.toLowerCase() === 'saturday') {
    correctAnswers += 1;
 }
var question5 = prompt('What day is before friday?');
if (question5.toLowerCase() === 'thursday') {
    correctAnswers += 1;
 }

if (correctAnswers === 5) {
  var medal = 'Gold';
} else if (correctAnswers >= 3) {
  var medal = 'Silver';
} else if (correctAnswers >= 1) {
  var medal = 'Bronze';
}

if (correctAnswers === 5) {
   document.write('<p>You answered ' + correctAnswers + ' questions correct, out of 5. You earn ' + medal + '</p>');
} else if (correctAnswers >= 3) {
   document.write('<p>You answered ' + correctAnswers + ' questions correct, out of 5. You earn ' + medal + '</p>');
} else if (correctAnswers >= 1) {
   document.write('<p>You answered ' + correctAnswers + ' questions correct, out of 5. You earn ' + medal + '</p>');
} else {
   document.write('<p>You did not answered anything correct</p>');
}

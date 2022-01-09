/* this script was created using the following tutorial:
https://www.youtube.com/watch?v=DyqMglmrido and https://javascript.plainenglish.io/building-a-rock-paper-scissors-game-with-javascript-bce23d39509d. I have borrowed code from this tutorial to assist with creating the spock game and i also personalised some of the code for my own styling and created... */

var timer; 
var timeLeft = 5; // seconds

// What to do when the timer runs out
function gameOver() {
  // This cancels the setInterval, so the updateTimer stops getting called
  cancelInterval(timer);
  
  // re-show the button, so they can start it again
  $('#playAgainButton').show();
}

function updateTimer() {
  timeLeft = timeLeft - 1;
  if(timeLeft >= 0)
    $('#timer').html(timeLeft);
  else {
    gameOver();
  }
}

      
     
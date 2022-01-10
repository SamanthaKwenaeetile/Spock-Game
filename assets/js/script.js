/* this script was created using the following tutorial:
https://www.youtube.com/watch?v=lV2BMXdsDmc&t=1747s and https://javascript.plainenglish.io/building-a-rock-paper-scissors-game-with-javascript-bce23d39509d . I have borrowed code from this tutorial to assist with creating the spock game and i also personalised some of the code for my own styling and created... */

// Setting the scores and selecting our HTML elements.
let computerplayer = 1;
let userplayer = 1;
const pScore = document.getElementById('score-countuser');
const cScore = document.getElementById('score-countcomputer');
const buttons = document.querySelectorAll('#selection button');
const displayIcon = document.querySelector('.userdisplay i');
const computerdisplayIcon = document.querySelector('.computerdisplay i');
// The randomClass array below this contains Icons from font-awesome.
const randomClasses = ["far fa-hand-rock","far fa-hand-paper","far fa-hand-scissors","far fa-hand-lizard" ,"far fa-hand-spock" ];
const text = document.getElementById('text');



// Game Functionality: Setting forEach function for the buttons.
const game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
        // Random selection for the computer and the player
           let clickedBtn = e.target.className;
           displayIcon.className = clickedBtn;
           let randomNum = Math.floor(Math.random() * randomClasses.length);
           computerdisplayIcon.className = randomClasses[randomNum];
           // Game Score.
           // If it's a Tie .
           if(displayIcon.className === computerdisplayIcon.className){
               pScore.innerHTML = pScore.innerHTML;
               cScore.innerHTML = cScore.innerHTML;
               text.innerHTML = "OH NO!! It's a Tie ! ";
               text.style.color = 'black';
              
           }
         // if it's not a Tie.
         else if(displayIcon.className === randomClasses[0] && computerdisplayIcon.className === randomClasses[2]){
            pScore.innerHTML = userplayer;
            userplayer++;
            text.innerHTML = " You Win ! ";
            text.style.color = 'red';

        }else if(displayIcon.className === randomClasses[0] && computerdisplayIcon.className === randomClasses[1]){
            cScore.innerHTML = computerplayer;
            computerplayer++;
            text.innerHTML = "You Loose ! ";
            text.style.color = 'red';
    
        }else if(displayIcon.className === randomClasses[1] && computerdisplayIcon.className === randomClasses[2]){
            cScore.innerHTML = computerplayer;
            computerplayer++;
            text.innerHTML = "You Loose ! ";
            text.style.color = 'red';
        
        }else if(displayIcon.className === randomClasses[1] && computerdisplayIcon.className === randomClasses[0]){
            pScore.innerHTML = userplayer;
            userplayer++;
            text.innerHTML = "You Win ! ";
            text.style.color = 'red';
            
        }else if(displayIcon.className === randomClasses[2] && computerdisplayIcon.className === randomClasses[0]){
            cScore.innerHTML = computerplayer;
            computerplayer++;
            text.innerHTML = "You Loose ! ";
            text.style.color = 'red';
            
        }else if(displayIcon.className === randomClasses[2] && computerdisplayIcon.className === randomClasses[1]){
            pScore.innerHTML = userplayer;
            userplayer++;
            text.innerHTML = "You Win ! ";
            text.style.color = 'red';
            

        }
    });
});
}
// Calling the function.
game();

        

        



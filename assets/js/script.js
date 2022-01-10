/* this script was created using the following tutorial:
https://www.youtube.com/watch?v=lV2BMXdsDmc&t=1747s. I have borrowed code from this tutorial to assist with creating the spock game and i also personalised some of the code for my own styling and created... */

// Setting the scores and selecting our HTML elements.
let computerplayer = 1;
let userplayer = 1;
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');
// The randomClass array below this contains the rock,paper, and scissor Icon from font-awesome.
const randomClasses = ["far fa-hand-rock","far fa-hand-paper","far fa-hand-scissors","far fa-hand-lizard" ,"far fa-hand-spock" ];
const text = document.getElementById('display');
const text2 = document.getElementById('display2');


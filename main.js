window.addEventListener('load', init);

//Available levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
}

//To change level
const currentLevel = levels.medium;

//Globals
let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

//Initialize Game
function init(){
  //Show number of seconds
  seconds.innerHTML = currentLevel;
  //load word from array
  showWord(words);
  //Star matching on word input
  wordInput.addEventListener('input', startMatch);
  //Call countdown every second
  setInterval(countdown, 1000);
  //Check game status
  setInterval(checkStatus, 50);
}

//Start match
function startMatch() {
  if(matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score ++;
  }
  if(score === -1){
    scoreDisplay.innerHTML = 0;
  } else {
  scoreDisplay.innerHTML = score;
  }
}

//Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

//Pick & show Random word
function showWord(words){
  //Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  //Output random word
  currentWord.innerHTML = words[randIndex];
}

//Countdown timer
function countdown(){
  //Make sure time is not 0
  if(time > 0){
    //Decrease time
    time--;
  }else if (time === 0) {
    //Game over
    isPlaing = false;
  }
  //Show time
  timeDisplay.innerHTML = time;
}

//Check game status
function checkStatus() {
  if (time === 0) {
    message.innerHTML = 'Game Over';
    score = -1;
  }
}

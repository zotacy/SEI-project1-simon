// Variables-
const gameBoard = document.querySelector('.gameBoard');
const cellArray = document.querySelectorAll('.cell');

const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const blue = document.querySelector('#blue');
const green = document.querySelector('#green');

let counter = 0;
let sequence = [];
let moves = [];

// add event listeners to each button
cellArray.forEach(cell => cell.addEventListener('click', clickMoves));

// generate random sequence
    //queue color with brighter color.
function makeSequence(){

}
// add sequence tracking
    // when button clicked, add to sequence.
function clickMoves(){
    moves.push(this.id)
    console.log(this.id)
    console.log(moves)
}
// add losing logic: wrong button clicked in sequence
    //New array with clicks
    //compare to sequence array
    // iif they don't match, end game/ prevent clicking further.

// Start Button-  Sets Move array to empty and initalizes makeSequence
const startBtn = document.querySelector('#start')
startBtn.addEventListener('click', ()=>{
    moves=[];
    makeSequence;
})



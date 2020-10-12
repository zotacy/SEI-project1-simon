// Variables-
const gameBoard = document.querySelector('.gameBoard');
const cellArray = document.querySelectorAll('.cell');

const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const blue = document.querySelector('#blue');
const green = document.querySelector('#green');

let counter = 0;
let sequence = [];
let playSequence = [];
let moves = [];

// add event listeners to each button
cellArray.forEach(cell => cell.addEventListener('click', clickMoves));

// generate random sequence
    //queue color with brighter color.
function makeSequence(){
    if (sequence = []){
        for (let i=0; i<10; i++){
               let cellId= cellArray[Math.floor(Math.random()*cellArray.length)].id;
               sequence.push(cellId)
        };
        console.log(sequence)
        playSequence.push(sequence[counter])
        // console.log(playSequence)
    }; 
};

// Move tracking
    // when button clicked, add move to move array.
    // If moves are correct, initiate updateSequence.
    // If wrong move, end game.
function clickMoves(){
    moves.push(this.id); //adds move to moves array
    counter ++;
    for (let i=0; i<moves.length; i++){
        if (moves[i] !== playSequence[i]){
            alert (`You Lose`);
            moves = [];
            playSequence = [];
        };
    };
    if (moves.length === playSequence.length){ //updates the play sequence from the main sequence.
        playSequence.push(sequence[counter])
        moves = [];
        counter = 0;
            console.log(playSequence)
    };
};

// Start Button-  Sets Move array to empty and initalizes makeSequence
const startBtn = document.querySelector('#start')
startBtn.addEventListener('click', ()=>{
    moves=[];
    sequence=[];
    makeSequence();
});
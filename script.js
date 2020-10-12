// Variables-
const gameBoard = document.querySelector('.gameBoard');
const cellArray = document.querySelectorAll('.cell');

const redBtn = document.querySelector('#red');
const yellowBtn = document.querySelector('#yellow');
const blueBtn = document.querySelector('#blue');
const greenBtn = document.querySelector('#green');

let counter = 0;
let sequence = [];
let playSequence = [];
let moves = [];

// Display playSequence pattern
function resetColor(current){
    current.style.opacity = '1.0';
}
function illuminate(current){
    current.style.opacity = '0.5';
    setTimeout(()=>{
        resetColor(current)
    }, 300);
};
function displayPlaySequence(){
    cellArray.forEach(cell => cell.removeEventListener('click', clickMoves)); //Removes button clicking
    playSequence.forEach((color, index) => {
        let currentDiv = document.querySelector(`#${color}`)
        //console.log(currentDiv)
        setTimeout(() => {
            illuminate(currentDiv)
        }, 800*index+1);
    });
    cellArray.forEach(cell => cell.addEventListener('click', clickMoves)); //Add clicking function back
};
//--//

function makeSequence(){
    // Add event listeners to each button
    cellArray.forEach(cell => cell.addEventListener('click', clickMoves));
    counter = 0;
    sequence = [];
    // Generate random sequence
    if (sequence = []){
        for (let i=0; i<10; i++){
                let cellId= cellArray[Math.floor(Math.random()*cellArray.length)].id;
                sequence.push(cellId)
        };
        // console.log(sequence);
        playSequence.push(sequence[counter]);
        displayPlaySequence();
        // console.log(playSequence)
    }; 
};
function updateSequence(){
    playSequence.push(sequence[counter])
    // console.log(playSequence)
    displayPlaySequence();
    moves = [];
    counter = 0;  // Add level based on counter.
};

// Move tracking
    // when button clicked, add move to move array.
    // If moves are correct, initiate updateSequence.
function clickMoves(){
    moves.push(this.id); //adds move to moves array
    illuminate(this);
    counter ++;
    for (let i=0; i<moves.length; i++){
        if (moves[i] !== playSequence[i]){ //Lose logic- END GAME
            alert (`You Lose. Press OK to start a new game.`);
            moves = [];
            playSequence = [];
        };
    };
    if (moves.length === playSequence.length){
        setTimeout(updateSequence, 800)
    };
};

// Start Button-  Sets Move array to empty and initalizes makeSequence
const startBtn = document.querySelector('#start')
startBtn.addEventListener('click', ()=>{
    moves=[];
    sequence=[];
    playSequence=[];
    makeSequence();
});
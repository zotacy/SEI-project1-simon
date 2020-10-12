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
    }, 500);
};
function displayPlaySequence(){
    playSequence.forEach((color, index) => {
        let currentDiv = document.querySelector(`#${color}`)
        console.log(currentDiv)
        setTimeout(() => {
            illuminate(currentDiv)
        }, 1500*index+1);
    });
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
        console.log(sequence);
        playSequence.push(sequence[counter]);
        displayPlaySequence();
        // console.log(playSequence)
    }; 
};
function updateSequence(){
    playSequence.push(sequence[counter])
    displayPlaySequence();
        // Add level based on counter.
        moves = [];
        counter = 0;
            console.log(playSequence)
};

// Move tracking
    // when button clicked, add move to move array.
    // If moves are correct, initiate updateSequence.
    // If wrong move, end game.
function clickMoves(){
    moves.push(this.id); //adds move to moves array
    //this.style.opacity= '0.5'
    illuminate(this);
    counter ++;
    for (let i=0; i<moves.length; i++){
        if (moves[i] !== playSequence[i]){ //Lose logic
            alert (`You Lose. Press OK to start a new game.`);
            moves = [];
            playSequence = [];
            // // cellArray.forEach(cell => cell.removeEventListener('click', clickMoves)); //Removes button clicking
        };
    };
    if (moves.length === playSequence.length){
        setTimeout(updateSequence, 1000)
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
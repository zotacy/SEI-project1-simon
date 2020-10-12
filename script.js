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
function updateSequence(){
    playSequence.push(sequence[counter])
    displaySequence;
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
    counter ++;
    for (let i=0; i<moves.length; i++){
        if (moves[i] !== playSequence[i]){ //Lose logic
            alert (`You Lose. Press OK to start a new game.`);
            moves = [];
            playSequence = [];
            // cellArray.forEach(cell => cell.removeEventListener('click', clickMoves)); //Removes button clicking
        };
    };
    if (moves.length === playSequence.length){
        updateSequence()
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

// Display playSequence pattern
const redOG = redBtn.style.backgroundColor; 
const yellowOG = yellowBtn.style.backgroundColor;
const blueOG = blueBtn.style.backgroundColor;
const greenOG= greenBtn.style.backgroundColor;

function resetColor(){
    redBtn.style.backgroundColor = redOG;
    yellowBtn.style.backgroundColor = yellowOG;
    blueBtn.style.backgroundColor = blueOG;
    greenBtn.style.backgroundColor = greenOG;
};

function illuminateRed(){
    redBtn.style.backgroundColor = 'red'; //add to css
    setTimeout(resetColors, 1800);
};
function illuminateRed(){
    redBtn.style.backgroundColor = 'yellow'; //add to css
    setTimeout(resetColors, 1800);
};
function illuminateRed(){
    redBtn.style.backgroundColor = 'blue'; //add to css
    setTimeout(resetColors, 1800);
};
function illuminateRed(){
    redBtn.style.backgroundColor = 'green'; //add to css
    setTimeout(resetColors, 1800);
};

const displaySequence = function displaySequence(){
    playSequence.forEach((color, index) => {
        if (color == 'red'){
            setTimeout(illuminateRed(), 2000*index);
        } else if (color == 'yellow'){
            setTimeout(illuminateYellow(), 2000*index);
        } else if (color == 'blue'){
            setTimeout(illuminateBlue(), 2000*index);
        } else if (color == 'green'){
            setTimeout(illuminateGreen(), 2000*index);
        };      
    })
}
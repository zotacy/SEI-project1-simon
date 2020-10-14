// Variables-
const gameBoard = document.querySelector('.gameBoard');
const cellArray = document.querySelectorAll('.cell');

const redBtn = document.querySelector('#red');
const yellowBtn = document.querySelector('#yellow');
const blueBtn = document.querySelector('#blue');
const greenBtn = document.querySelector('#green');

const currentScore= document.querySelector('#currentScore');
const highScore= document.querySelector('#highScore');

let counter = 0;
let sequence = [];
let playSequence = [];
let moves = [];

// playSequence/Board Attributes
function resetColor(current){
    current.style.opacity = '1.0';
}
function illuminate(current){
    current.style.opacity = '0.5';
    setTimeout(()=>{
        resetColor(current)
    }, 300);
};
// function shadow(current){
//     let currentDiv = document.querySelector(`#${current}`)
//     console.log(currentDiv)
//     currentDiv.onmousedown =() => currentDiv.classList.add('shadow');
//     currentDiv.onmouseup =() => currentDiv.classList.remove('shadow');
// }

function soundBoard(current){
    let sound = document.querySelector(`[cell-sound='${current}']`);
    sound.play();
}
function displayPlaySequence(){
    cellArray.forEach(cell => cell.removeEventListener('click', clickMoves)); //Removes button clicking
    playSequence.forEach((color, index) => {
        let currentDiv = document.querySelector(`#${color}`)
        let currentSound = currentDiv.id
        setTimeout(() => {
            illuminate(currentDiv)
            soundBoard(currentSound)
        }, 900*index+1);
    });
    cellArray.forEach(cell => cell.addEventListener('click', clickMoves)); //Add clicking function back
};

// Make/update game sequence
function makeSequence(){
    // Add event listeners to each button
    cellArray.forEach(cell => cell.addEventListener('click', clickMoves));
    // Generate random sequence
    if (sequence = []){
        for (let i=0; i<100; i++){
                let cellId= cellArray[Math.floor(Math.random()*cellArray.length)].id;
                sequence.push(cellId)
        };
        playSequence.push(sequence[counter]);
        displayPlaySequence();
    }; 
};
function updateSequence(){
    playSequence.push(sequence[counter])
    displayPlaySequence();
    moves = [];
    counter = 0;  // Add level based on counter.
};

// Game logic/ move tracking
function clickMoves(){
    illuminate(this);
    //shadow(this.id);
    soundBoard(this.id)
    moves.push(this.id); //adds move to moves array
    counter ++;
    for (let i=0; i<moves.length; i++){
        if (moves[i] !== playSequence[i]){ //Lose logic- END GAME
            alert (`You Lose. Your score was ${currentScore.innerText}! Press OK to start a new game.`);
            moves = [];
            playSequence = [];
            highScore.innerText = currentScore.innerText;
            counter = 0;
            currentScore.innerText = `0`;
        };
    };
    if (moves.length === playSequence.length){
        setTimeout(updateSequence, 800)
        currentScore.innerText = `${counter}`;
    };
};

// Start Button-  initilaizes game logic and move/sequence arrays.
const startBtn = document.querySelector('#start')
startBtn.addEventListener('click', ()=>{
    moves=[];
    sequence=[];
    playSequence=[];
    counter = 0;
    //shadow(document.querySelector('#start').id)
    makeSequence();
    if (currentScore > highScore){highScore = currentScore};
    currentScore.innerText = `0`;
});
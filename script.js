// Variables-
const gameBoard = document.querySelector('.gameBoard');
const cellArray = document.querySelectorAll('.cell');

const redBtn = document.querySelector('#red');
const yellowBtn = document.querySelector('#yellow');
const blueBtn = document.querySelector('#blue');
const greenBtn = document.querySelector('#green');

const currentScore= document.querySelector('#currentScore');
const highScore= document.querySelector('#highScore');

const storage = window.localStorage;

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
//--//
document.onkeydown = checkKey;
function checkKey(e) {
    let keyId;
    e = e || window.event;
    if (e.keyCode == '49') {
        keyId = redBtn.id;
    }
    else if (e.keyCode == '50') {
        keyId = yellowBtn.id;
    }
    else if (e.keyCode == '51') {
        keyId = blueBtn.id;
    }
    else if (e.keyCode == '52') {
        keyId = greenBtn.id;
    }
    console.log(keyId)
}
//--//

// Displays sequence and adds sounds
function soundBoard(current){
    let sound = document.querySelector(`[cell-sound='${current}']`);
    sound.play();
}
function shadowClick(current){
    current.addEventListener('mousedown', ()=> current.classList.add('shadow'));
    current.addEventListener('mouseup', () => current.classList.remove('shadow'));
    current.addEventListener('touchstart', ()=> current.classList.add('shadow'));
    current.addEventListener('touchend', () => current.classList.remove('shadow'));
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
    cellArray.forEach(cell => {
        shadowClick(cell);
        cell.addEventListener('click', clickMoves);
    });
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
shadowClick(startBtn);
startBtn.addEventListener('click', ()=>{
    moves=[];
    sequence=[];
    playSequence=[];
    counter = 0;
    makeSequence();
    if (currentScore > highScore){
        highScore = currentScore;
    }
    else {currentScore.innerText = `0`};
});

function process_touchstart(e){
    e.preventDefault();

}
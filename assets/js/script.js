document.addEventListener("DOMContentLoaded", shuffleCards);

const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', resetGame);

const cards = document.querySelectorAll('.memory-card');
cards.forEach((card) => card.addEventListener('click', (flipCard)));

// check if card is turned 
let turnedCard = false;

// lock the board when 2 cards have been turned while its checking for a match
let lockBoard = false;

// users cards
let firstCard;
let secondCard;

/** both cards to enter into an array to check if their data is === */
let selectedPairs = [];

/** an array to put the pairs that match into after the checkForMatch() */
var matchedPairs = [];

/** gets the value of moves in HTML */
var counter = document.getElementById("count-area-moves").innerHTML;



/**  Leaving the second card face upwards if its a match and locks bord after second card flipped */
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');
    if (!turnedCard) {
        turnedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    selectedPairs.push(firstCard, secondCard);
    if (selectedPairs.length === 2) {
        checkForMatch(firstCard, secondCard);
        movesCounter();
    }
}

// Help and adjusted codes from Marina Ferreira https://github.com/code-sketch/memory-game.git 
// and https://github.com/aadhavanm02/memory-game/blob/master/js/app2.js


/** To see if the cards that have been flipped are matching */
function checkForMatch(firstCard, secondCard) {
    let isMatch = firstCard.dataset.image === secondCard.dataset.image;
    if (isMatch) {
        disableCards();
        matchedPairs.push(firstCard);
        matchedPairs.push(secondCard);
        checkForGameFinish();
    } else {
        unflipCards();
    }
}

/** Check if game is finished and alert player */
function checkForGameFinish() {
    setTimeout(() => {
            if (matchedPairs.length === (12)) {
                alert(`CONGRATULATIONS! You finished the game in only ${counter} moves, well done!`);
            }
        },
        800);
}

/** Locks cards that are a match */
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    matchedPairs.push(firstCard, secondCard);
    resetBoard();
}

/** Flips cards back when not a match */
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 800);
}

/** Updates the Moves-section in DOM by incrementing one  */
function movesCounter() {
    console.log(counter);
    counter++;
    document.getElementById("count-area-moves").innerHTML = counter;
}

/** Empty selected pairs array when not a match  */
function resetBoard() {
    turnedCard = false;
    lockBoard = false;
    selectedPairs = [];
}

/** Resetting game  */
function resetGame(event) {
    location.reload();
}

/** Shuffle cards */
function shuffleCards() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 6);
        card.style.order = randomPos;
    });
}
document.addEventListener("DOMContentLoaded", shuffleCards)

const cards = document.querySelectorAll('.memory-card');
cards.forEach(card => card.addEventListener('click', flipCard));



// Just giving some slight pointers here in regards to variables 

// check if card is turned 
let turnedCard = false;

// lock the board when 2 cards have been turned while its checking for a match
let lockBoard = false;

// your cards
let firstCard;
let SecondCard;

// both cards to enter into an array to check if their data is ===
// in your game put in ai statement that if selectedPairs.length === 2 run a checkForMatch function
let selectedPairs = []

// an array to put the pairs that match into after you created a check for match function
matchedPairs = []

console.log(cards);
Timer();



// Leaving the second card face upwards if its a match and locks bord after second card flipped
function flipCard() {
    if (this === firstCard) return
    if (lockBoard) return
    this.classList.toggle('flip');

    if (!turnedCard) {
        turnedCard = true;
        firstCard = this;
        selectedPairs.push(this)
    } else {
        lockBoard = true;
        turnedCard = false;
        SecondCard = this;
        selectedPairs.push(this)
    }

    if (selectedPairs.length === 2) {
        checkForMatch(selectedPairs[0], selectedPairs[1])
        matchedPairs.push;
    }

}
/* Reset the board and timer
 */
function runGame(shuffleCards) {


}

/* To see if the cards that have been flipped are matching
 */
function checkForMatch() {
    let isMatch = firstCard.dataset.image === secondCard.dataset.image;

    isMatch ? disableCards() : unflipCards();

}

/* Locks cards that are a match 
 */
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

/* Flipps cards back when not a match
 */
function unflipCards() {
    lockBoard = false;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);

    runGame(incrementMoves[1]);
}


/* Updates the Moves-section in DOM by incrementing one
 */
function incrementMoves() {
    let oldMove = parseInt(document.getElementById("count-area-moves").innertext);
    document.getElementById("count-area-moves").innertext = ++oldMove
}

/* Shuffle cards when game is reset
 */
function resetBoard() {
    [flipCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function shuffleCards() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 8);
        card.style.order = randomPos;
    });
};
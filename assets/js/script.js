document.addEventListener("DOMContentLoaded", shuffleCards);


const cards = document.querySelectorAll('.memory-card');

cards.forEach((card) => card.addEventListener('click', (flipCard)))

// check if card is turned 
let turnedCard = false;

// lock the board when 2 cards have been turned while its checking for a match
let lockBoard = false;

// users cards
let firstCard;
let secondCard;

// both cards to enter into an array to check if their data is ===
let selectedPairs = [];

// an array to put the pairs that match into after the checkForMatch()
matchedPairs = [];

// gets the value of moves in HTML
var counter = document.getElementById("count-area-moves").innerHTML;



/**  Leaving the second card face upwards if its a match and locks bord after second card flipped 
 */
function flipCard() {
    console.log("back here")
    if (lockBoard) return;
    if (this === firstCard) return;  
    this.classList.add('flip');
    if (!turnedCard) { // first card
        turnedCard = true;
        firstCard = this;
        return;   
        // selectedPairs.push(cardClicked);
    } 
    secondCard = this;
    console.log("checking for match..");
    selectedPairs.push(firstCard, secondCard);
    if (selectedPairs.length === 2) {
        checkForMatch(firstCard, secondCard);
        movesCounter();
        }
    }

    // }

// Help and adjusted codes from Marina Ferreira https://github.com/code-sketch/memory-game.git 

/** To see if the cards that have been flipped are matching */
function checkForMatch(firstCard, secondCard) {
    let isMatch = firstCard.dataset.image === secondCard.dataset.image;
    if (isMatch) {
        console.log("its a match");
        disableCards();
        matchedPairs.push(firstCard);
        matchedPairs.push(secondCard);

}   else {
    unflipCards();
}
}
   

    //     lockBoard = false
    // }
    // if (!isMatch) {
    //     unflipCards(firstCard, secondCard);
    //     selectedPairs = [];
    //     lockBoard = false;
    

    // selectedPairs.splice(0, selectedPairs.length);
    // matchedPairs.push(this);
    // lockBoard = false;

/** Locks cards that are a match */
function disableCards() {
    console.log("disabling cards...")
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}
    // for (let card in cards) {
    //     if (!matchedPairs.includes(card)) {
    //         cards.forEach(card)
    //         };

    //     }
   
    

/** Flipps cards back when not a match */
function unflipCards() {
    console.log("unflipping cards")
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
     }, 1000);
    }
    // for (let card in cards) {
    //     if (!matchedPairs.includes(card)) {
    //         cards.forEach(card)
    //         };
    //     }
  

/** Updates the Moves-section in DOM by incrementing one  */
function movesCounter() {
    console.log(counter)
    counter++;
    document.getElementById("count-area-moves").innerHTML = counter; 
}

/** Shuffle cards when game is reset  */
function resetBoard() {
    turnedCard = false;
    lockBoard = false;
    selectedPairs = [];
    console.log([selectedPairs])
}

/** Shuffle cards */
function shuffleCards() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 6);
        card.style.order = randomPos;
    });
}


document.addEventListener("DOMContentLoaded", shuffleCards);

const cards = document.querySelectorAll('.memory-card');

cards.forEach(card => card.addEventListener('click', () => {
    flipCard(card);
}));

// check if card is turned 
let turnedCard = false;

// lock the board when 2 cards have been turned while its checking for a match
let lockBoard = false;

// your cards
let firstCard;
let secondCard;

// both cards to enter into an array to check if their data is ===
// in your game put in ai statement that if selectedPairs.length === 2 run a checkForMatch function
let selectedPairs = [];

// an array to put the pairs that match into after you created a check for match function
matchedPairs = [];

let counter = document.querySelector("#count-area-moves").innerHTML;

console.log(counter);


// Leaving the second card face upwards if its a match and locks bord after second card flipped
function flipCard(cardClicked) {
    if (cardClicked === firstCard) return;
    if (lockBoard) return;
    cardClicked.classList.toggle('flip');
    console.log(matchedPairs) 

    if (!turnedCard) { // first card
        turnedCard = true;
        firstCard = cardClicked;
        selectedPairs.push(cardClicked);

    } else { // second card
        lockBoard = true;
        turnedCard = false;
        secondCard = cardClicked;
        selectedPairs.push(cardClicked);
        console.log(selectedPairs)

        movesCounter(); // count moves
        
    }
    if (selectedPairs.length === 2) {
        checkForMatch(firstCard, secondCard);
        lockBoard = false

    } 
}

// Help and adjusted codes from Marina Ferreira https://github.com/code-sketch/memory-game.git 

/* To see if the cards that have been flipped are matching */
function checkForMatch(firstCard, secondCard) {
    
    const isMatch = firstCard.dataset.image === secondCard.dataset.image;
    console.log(firstCard.dataset.image)


    if (isMatch) {
     disableCards(firstCard, secondCard)
     matchedPairs.push(firstCard)
     matchedPairs.push(secondCard);
     lockBoard = false
    }
    if (!isMatch) {
     unflipCards(firstCard, secondCard);
     selectedPairs = [];
     lockBoard = false;
    }   
 
    selectedPairs.splice(0, selectedPairs.length);
    matchedPairs.push(this);
    lockBoard = false;
}

/* Locks cards that are a match */
function disableCards(firstCard, secondCard) {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

   for (let card in cards) {
        if (!matchedPairs.includes(card)) {
            cards.forEach(card => card.addEventListener('click', () => {
                flipCard(card);
            })); 
            
        }
        console.log(card)
    }
    lockBoard = false 
}



/* Flipps cards back when not a match */
function unflipCards(firstCard, secondCard) {
    setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    }, 1500);
    
    for (let card in cards) {
        if (!matchedPairs.includes(card)) {
            cards.forEach(card => card.addEventListener('click', () => {
                flipCard(card);
            })); 
        }
    }
    lockBoard = false
}

/* Updates the Moves-section in DOM by incrementing one  */
function movesCounter () {
            counter.innerHTML ++;
            moves ++;
          }




/* Shuffle cards when game is reset  */
function resetBoard() {
    [flipCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}



/* Shuffle cards */
function shuffleCards() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 8);
        card.style.order = randomPos;
    });
}

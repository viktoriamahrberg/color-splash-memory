
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

console.log ('.memory-card');
Timer();


function flipCard() {
    if (this === firstCard) return
    if (lockBoard) return
    this.classList.toggle('flip');

    if (!turnedCard) {
        turnedCard = true;
        firstCard = this;
        selectedPairs.push(this)
    }
    else { 
        lockBoard = true;
        turnedCard = false;
        SecondCard = this;
        selectedPairs.push(this)
    }

    if (selectedPairs.length === 2) {
        checkForMatch(selectedPairs[0], selectedPairs[1])
    }
    
}
function checkForMatch () {
    if (firstCard === secondCard) push
}
    incrementScore();

}

// Updates the Moves-section in DOM by incrementing one
function incrementMoves () {
    let oldMove = parseInt(document.getElementById("count-area-moves").innertext;
    document.getElementById("count-area-moves").innertext = ++oldMove;
}


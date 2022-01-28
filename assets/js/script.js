let memoryCards = document.getElementsByClassName("memory-card");

function flipCard() {
    this.classList.toggle('flip');
}
memoryCards.addEventListener('click', flipCard);

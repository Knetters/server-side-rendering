const playerCards = document.querySelectorAll('.player-card');

playerCards.forEach(card => {
    card.addEventListener('click', () => {
        console.log('Player ID: ' + card.id);
    });
});
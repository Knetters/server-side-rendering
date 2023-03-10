const playerCards = document.querySelectorAll(".player-card");
const informationContainer = document.getElementById("information-container")

playerCards.forEach(card => {
    card.addEventListener('click', () => {
     
        informationContainer.innerHTML = "<h3>Speler: " + card.id + "</h3>";
    });
});


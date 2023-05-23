const cards = document.querySelectorAll(".card");
const button = document.querySelector(".button-reset");

// add/remove "active"
cards.forEach(card => {
    const infoElement = card.querySelector('.info');

    card.addEventListener('click', () => {
        // if active - remove active in all cards
        if (card.classList.contains("active")) {
            setTimeout(() => {
                card.classList.remove("active");
                card.classList.add("starting-card");
                infoElement.classList.add("hidden-element");
            }, 600);
        }
        // if not active - activate this card
        else {
            cards.forEach(card => {
                if (card.classList.contains("active")) {
                    setTimeout(() => {
                        card.classList.remove("active");
                        card.classList.add("starting-card");
                    }, 600);
                }
            });
            card.classList.add("active");
            card.classList.remove("starting-card");
            infoElement.classList.remove("hidden-element");
        }
    });
});

// button RESET
button.addEventListener("click", () => {
    cards.forEach(card => {
        if (card.classList.contains("active")) {
            card.classList.remove('active');
        }
    });
});

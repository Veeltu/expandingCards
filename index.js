const cards = document.querySelectorAll(".card");
const button = document.querySelector(".button-reset");
const infoElementAll = document.querySelectorAll(".info");
const icons = document.querySelectorAll(".fi");

let previousCard = null;

// add/remove "active"
cards.forEach((card, index) => {
  const infoElement = card.querySelector('.info');
  const icon = card.querySelector(".fi");

  card.addEventListener('click', () => {
    // if active - remove active in all cards
    if (card.classList.contains("active")) {
      setTimeout(() => {
        card.classList.remove("active");
        card.classList.add("starting-card");
        infoElementAll.forEach(info => {
          info.classList.add("hidden-element");
        });
        icon.style.transform = "rotate(0deg)"; // Reset the icon rotation
      }, 600);
    }
    // if not active - activate this card
    else {
      cards.forEach(otherCard => {
        if (otherCard.classList.contains("active")) {
          setTimeout(() => {
            otherCard.classList.remove("active");
            otherCard.classList.add("starting-card");
            infoElementAll.forEach(info => {
              info.classList.add("hidden-element");
            });
            const previousIcon = icons[Array.from(cards).indexOf(otherCard)];
            previousIcon.style.transform = "rotate(0deg)"; // Reset the previous card's icon rotation
          }, 600);
        }
      });

      card.classList.add("active");
      card.classList.remove("starting-card");
      icon.style.transform = "rotate(360deg)"; // Rotate the current card's icon
      setTimeout(() => {
        infoElement.classList.remove("hidden-element");
      }, 700);
    }
  });
});

// button RESET
button.addEventListener("click", () => {
  cards.forEach(card => {
    if (card.classList.contains("active")) {
      setTimeout(() => {
        card.classList.remove("active");
        card.classList.add("starting-card");
        infoElementAll.forEach(info => {
          info.classList.add("hidden-element");
        });
        const previousIcon = icons[Array.from(cards).indexOf(card)];
        previousIcon.style.transform = "rotate(0deg)"; // Reset the icon rotation
      }, 200);
    }
  });
});

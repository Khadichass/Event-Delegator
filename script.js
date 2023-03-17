"use script";

const cards = document.querySelectorAll("#image");

cards1.forEach((cards) => {
  cards.addEventListener("click", () => {
    removeActiveClasses();
    cards.classList.add("active");
  });
});

function removeActiveClasses() {
  cards1.forEach((cards) => {
    cards.classList.remove("active");
  });
}

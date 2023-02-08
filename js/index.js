/* const bodyElement = document.querySelector('[data-js="body"]');

let boolCounter = false;

const toggleButton = document.querySelector('[data-js="toggle-button"]');
toggleButton.addEventListener("click", () => {
  boolCounter = !boolCounter;
  if (boolCounter) {
    bodyElement.classList.add("dark");
  } else {
    bodyElement.classList.remove("dark");
  }
}); */

const cardOne = document.querySelector('[data-js="cardOne"]');
const bookmark = document.querySelector('[data-js="svg-bookmark"]');

cardOne.addEventListener("click", () => {
  if (cardOne.checked === "true") {
    bookmark.classList.add("fill");
  }
  console.log("event");
});

console.log(cardOne.checked);

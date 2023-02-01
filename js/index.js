const bodyElement = document.querySelector('[data-js="body"]');

let boolCounter = false;

const toggleButton = document.querySelector('[data-js="toggle-button"]');
toggleButton.addEventListener("click", () => {
  boolCounter = !boolCounter;
  if (boolCounter) {
    bodyElement.classList.add("dark");
  } else {
    bodyElement.classList.remove("dark");
  }
});

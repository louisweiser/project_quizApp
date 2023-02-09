const cardOne = document.querySelector('[data-js="cardOne"]');
const bookmark = document.querySelector('[data-js="svg-bookmark"]');

cardOne.addEventListener("click", () => {
  if (cardOne.checked === "true") {
    bookmark.classList.add("fill");
  }
  console.log("event");
});

console.log(cardOne.checked);

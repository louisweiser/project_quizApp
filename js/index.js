const buttonBookmark = document.querySelector(
  '[data-js="card__bookmark--button"]'
);
const buttonAnswer = document.querySelector('[data-js="card__answer--button"]');

buttonBookmark.addEventListener("click", () => {
  console.log("event");
});

buttonAnswer.addEventListener("click", () => {
  console.log("answer");
});

const buttonBookmark = document.querySelector(
  '[data-js="card__bookmark--button"]'
);
const svg = document.querySelector('[data-js="card__bookmark--svgPath"]');

buttonBookmark.addEventListener("click", () => {
  svg.classList.toggle("card__bookmark--svgPath-color");
});

const buttonAnswer = document.querySelector('[data-js="card__answer--button"]');
const answer = document.createElement("p");

answer.textContent =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi quasi repellendus aliquid neque optio! Perspiciatis accusamus atque, vero cumque omnis ea totam iusto laboriosam eaque ipsam repudiandae repellendus nisi ex.";
const placeAnswer = document.querySelector('[data-js="answer"]');

buttonAnswer.addEventListener("click", () => {
  console.log(buttonAnswer.classList.contains("show-answer"));

  if (buttonAnswer.classList.contains("show-answer")) {
    buttonAnswer.textContent = "Hide Answer";
    placeAnswer.append(answer);
    buttonAnswer.classList.remove("show-answer");
  } else {
    buttonAnswer.textContent = "Show Answer";
    answer.remove();
    buttonAnswer.classList.add("show-answer");
  }
});

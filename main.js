const itemsElements = document.querySelectorAll(".items");
const fightElement = document.querySelector("#fight");
const playerElement = document.querySelector("#player");
const enemyElement = document.querySelector("#enemy");
const resultElement = document.querySelector("#result");
const retryButton = document.querySelector("#retry");

const items = ["rock", "paper", "scissors"];

itemsElements.forEach((e) =>
  e.addEventListener("click", function (e) {
    itemChosen(e.target.id);
  })
);

retryButton.addEventListener("click", function () {
  fightElement.classList.remove("show");
  resultElement.classList.remove("show");
  retryButton.classList.remove("show");
});

function itemChosen(playerItem) {
  fightElement.classList.add("show");
  resultElement.classList.add("show");
  retryButton.classList.add("show");
  const enemyItem = getRandomItem();
  playerElement.textContent = playerItem;
  enemyElement.textContent = enemyItem;
  if (playerItem === enemyItem) {
    resultElement.textContent = "Draw";
  } else if (
    (playerItem === "rock" && enemyItem === "scissors") ||
    (playerItem === "paper" && enemyItem === "rock") ||
    (playerItem === "scissors" && enemyItem === "paper")
  ) {
    resultElement.textContent = "Win";
  } else {
    resultElement.textContent = "Loose";
  }
}

function getRandomItem() {
  const min = Math.ceil(0);
  const max = Math.floor(items.length);
  return items[Math.floor(Math.random() * (max - min)) + min];
}

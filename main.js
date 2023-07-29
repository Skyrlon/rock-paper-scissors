const itemsElements = document.querySelectorAll(".items");
const playerElement = document.querySelector("#player");
const enemyElement = document.querySelector("#enemy");
const resultElement = document.querySelector("#result");

const items = ["rock", "paper", "scissors"];

itemsElements.forEach((e) =>
  e.addEventListener("click", function (e) {
    itemChosen(e.target.id);
  })
);

function itemChosen(playerItem) {
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

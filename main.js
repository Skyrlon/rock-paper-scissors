const playerItemsElements = document.querySelectorAll("#player > .items");
const fightElement = document.querySelector("#fight");
const playerElement = document.querySelector("#player");
const enemyElement = document.querySelector("#enemy");
const enemyItemElement = document.querySelector("#enemy > .items");
const resultElement = document.querySelector("#result");
const retryButton = document.querySelector("#retry");

const items = ["rock", "paper", "scissors"];

playerItemsElements.forEach((e) => e.addEventListener("click", itemChosen));

retryButton.addEventListener("click", function () {
  enemyItemElement.classList.remove("show");
  playerItemsElements.forEach((e) => {
    e.addEventListener("click", itemChosen);

    if (!e.classList.contains("show")) e.classList.add("show");
  });
  resultElement.classList.remove("show");
  retryButton.classList.remove("show");
});

function itemChosen(e) {
  const playerItem = e.target.id;
  playerItemsElements.forEach((e) => {
    e.removeEventListener("click", itemChosen);
    if (e.id !== playerItem) e.classList.remove("show");
  });
  resultElement.classList.add("show");
  retryButton.classList.add("show");
  const enemyItem = getRandomItem();
  enemyItemElement.classList.add("show");
  enemyItemElement.setAttribute("src", `assets/${enemyItem}.png`);
  if (playerItem === enemyItem) {
    resultElement.textContent = "Draw";
  } else if (
    (playerItem === "rock" && enemyItem === "scissors") ||
    (playerItem === "paper" && enemyItem === "rock") ||
    (playerItem === "scissors" && enemyItem === "paper")
  ) {
    document.querySelector("#winning-item").classList.add("show");
    if (playerItem === "scissors") {
      document.querySelector("#scissors").removeEventListener("click", itemChosen);
      document.querySelector("#scissors").classList.remove("show");
      document.querySelector(".scissors-cutting").classList.add("show");
    }
    resultElement.textContent = "Win";
  } else {
    document.querySelector("#losing-item").classList.add("show");
    if (playerItem === "paper") {
      document
        .querySelectorAll(".paper-parts")
        .forEach((e) => e.classList.add("show"));
      document.querySelector("#paper").removeEventListener("click", itemChosen);
      document.querySelector("#paper").classList.remove("show");
    }
    if (playerItem === "scissors") {
      document
        .querySelectorAll(".scissors-parts")
        .forEach((e) => e.classList.add("show"));
      document
        .querySelector("#scissors")
        .removeEventListener("click", itemChosen);
      document.querySelector("#scissors").classList.remove("show");
    }
    resultElement.textContent = "Loose";
  }
}

function getRandomItem() {
  const min = Math.ceil(0);
  const max = Math.floor(items.length);
  return items[Math.floor(Math.random() * (max - min)) + min];
}

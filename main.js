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
  const itemsElements = [
    { item: "rock", winning: ".rock-breaking", losing: ".losing-rock" },
    { item: "paper", winning: ".paper-covering", losing: ".paper-parts" },
    {
      item: "scissors",
      winning: ".scissors-cutting",
      losing: ".scissors-parts",
    },
  ];
  const playerItemId = e.target.id;
  const playerItem = itemsElements.find(
    (element) => element.item === playerItemId
  );
  playerItemsElements.forEach((e) => {
    e.removeEventListener("click", itemChosen);
    if (e.id !== playerItemId) e.classList.remove("show");
  });
  resultElement.classList.add("show");
  retryButton.classList.add("show");
  const enemyItem = getRandomItem();
  enemyItemElement.classList.add("show");
  enemyItemElement.setAttribute("src", `assets/${enemyItem}.png`);
  if (playerItemId === enemyItem) {
    resultElement.textContent = "Draw";
  } else if (
    (playerItemId === "rock" && enemyItem === "scissors") ||
    (playerItemId === "paper" && enemyItem === "rock") ||
    (playerItemId === "scissors" && enemyItem === "paper")
  ) {
    document.querySelector("#winning-item").classList.add("show");
    document
      .querySelector(`#${playerItem.item}`)
      .removeEventListener("click", itemChosen);
    document.querySelector(`#${playerItem.item}`).classList.remove("show");
    document.querySelector(`${playerItem.winning}`).classList.add("show");

    resultElement.textContent = "Win";
  } else {
    document.querySelector("#losing-item").classList.add("show");
    document
      .querySelectorAll(`${playerItem.losing}`)
      .forEach((e) => e.classList.add("show"));
    document
      .querySelector(`#${playerItem.item}`)
      .removeEventListener("click", itemChosen);
    document.querySelector(`#${playerItem.item}`).classList.remove("show");

    resultElement.textContent = "Loose";
  }
}

function getRandomItem() {
  const min = Math.ceil(0);
  const max = Math.floor(items.length);
  return items[Math.floor(Math.random() * (max - min)) + min];
}

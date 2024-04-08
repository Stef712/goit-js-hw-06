function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const div = document.querySelector("#boxes");

let amount = 0;

function createBoxes(amount) {
  let x = 30;
  for (let i = 0; i < amount; i += 1) {
    x += 10;
    const divBox = `<div style="background-color:${getRandomHexColor()}; width:${x}px; height:${x}px; border:1px solid black"></div>`;
    div.insertAdjacentHTML("beforeend", divBox);
  }
}

function createInput() {
  amount = input.value;
  createBoxes(amount);
}

function destroyBoxes() {
  input.value = "";
  div.innerHTML = "";
}

buttonCreate.addEventListener("click", createInput);
buttonDestroy.addEventListener("click", destroyBoxes);

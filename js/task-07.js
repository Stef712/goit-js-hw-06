const inputElement = document.querySelector("#font-size-control");

const spanElement = document.querySelector("#text");

const changeFontSize = () => {
  spanElement.style.fontSize = `${inputElement.value}px`;
};
inputElement.addEventListener("input", changeFontSize);

let counterValue = 0;

const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);

const counterValueElement = document.querySelector("#value");

const onDecrement = () => {
  counterValue -= 1;
  counterValueElement.textContent = counterValue;
};

const onIncrement = () => {
  counterValue += 1;
  counterValueElement.textContent = counterValue;
};

buttonDecrement.addEventListener("click", onDecrement);
buttonIncrement.addEventListener("click", onIncrement);

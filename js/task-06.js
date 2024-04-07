const inputElement = document.querySelector("#validation-input");

const addClass = (event) => {
  if (
    event.currentTarget.value.length === Number(inputElement.dataset.length)
  ) {
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.add("invalid");
  }
};
inputElement.addEventListener("blur", addClass);

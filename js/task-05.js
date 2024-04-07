const inputElement = document.querySelector("#name-input");

const nameElement = document.querySelector("#name-output");

const makeName = (event) => {
  if (event.currentTarget.value === "") {
    nameElement.textContent = "Anonymous";
  } else {
    nameElement.textContent = event.currentTarget.value;
  }
};

inputElement.addEventListener("input", makeName);

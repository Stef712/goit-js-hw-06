const form = document.querySelector(".login-form");

function onSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    return alert("Completați toate câmpurile");
  }
  const formSave = {
    email: email,
    password: password,
  };
  console.log(formSave);
  event.currentTarget.reset();
}

form.addEventListener("submit", onSubmit);

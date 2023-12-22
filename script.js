const regex = /^[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-zA-Z]{3}$/;

function verifyName() {
  let firstname = document.getElementById("firstname");
  let lastname = document.getElementById("lastname");
  if (firstname.value === "" || lastname.value === "") {
    alert("Please enter both your first and last name.");
  }
}

function verifyPassword() {
  let password = document.getElementById("password");
  if (password.value === "") {
    alert("Whoops! Don't forget to answer a password!");
  }
}

function verifyEmail() {
  let email = document.getElementById("email");
  if (email.value === "") {
    alert("E-mail field cannot be empty if you would like to subscribe.");
  } else if (!regex.test(email.value)) {
    alert("Incorrect email format.");
  } else {
    alert("Cool email!");
  }
}

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () => {
  verifyName();
  verifyPassword();
  verifyEmail();
})
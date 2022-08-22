const firstNameEl = document.querySelector("#firstName");
const lastNameEl = document.querySelector("#lastName");
const nickNameEl = document.querySelector("#nickName");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const birthdayEl = document.querySelector("#birthday");
var gendersEl = document.getElementsByName("gender");
const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkDateOfBirth();

  let isFirstNameValid = checkFirstName(),
    isLastNameValid = checkLastName(),
    isEmailValid = checkEmail(),
    isPasswordValid = checkPassword();
  isDateOfBirthValid = checkDateOfBirth();

  let isFormValid =
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isEmailValid &&
    isPasswordValid &&
    isDateOfBirthValid;

  // submit to the server if the form is valid
  if (isFormValid) {
  }
});
console.log("hello");

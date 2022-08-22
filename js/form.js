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

  let isUsernameValid = checkUsername(),
    isEmailValid = checkEmail(),
    isPasswordValid = checkPassword(),
    isConfirmPasswordValid = checkConfirmPassword();

  let isFormValid =
    isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid;

  // submit to the server if the form is valid
  if (isFormValid) {
  }
});
console.log("hello");

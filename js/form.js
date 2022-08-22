const firstNameEl = document.querySelector("#firstName");
const lastNameEl = document.querySelector("#lastName");
const nickNameEl = document.querySelector("#nickName");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const birthdayEl = document.querySelector("#birthday");
var gendersEl = document.getElementsByName("gender");
const mobileEl = document.querySelector("#mobile");
const addressEl = document.querySelector("#address");
const form = document.querySelector(".form");
const reset = document.querySelector("#reset");
const arr = [
  firstNameEl,
  lastNameEl,
  nickNameEl,
  emailEl,
  passwordEl,
  birthdayEl,
  //   gendersEl,
  mobileEl,
  addressEl,
];

resetGender = () => {
  showGenderError(gendersEl, "");
  gendersEl[0].parentElement.parentElement.parentElement.parentElement.classList.remove(
    "success"
  );
  gendersEl[0].parentElement.parentElement.parentElement.parentElement.classList.remove(
    "error"
  );

  for (let i = 0; i < gendersEl.length; i++) {
    gendersEl[i].checked = false;
  }
  //   gendersEl[]
};
const resetInputValues = () => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].value = "";
    showError(arr[i], "");
    arr[i].parentElement.parentElement.classList.remove("success");
    arr[i].parentElement.parentElement.classList.remove("error");
  }
  resetGender();
};
reset.addEventListener("click", resetInputValues);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkGender();
  let isFirstNameValid = checkFirstName(),
    isLastNameValid = checkLastName(),
    isEmailValid = checkEmail(),
    isPasswordValid = checkPassword(),
    isDateOfBirthValid = checkDateOfBirth(),
    isMobileNumberValid = checkMobileNumber(),
    isAddressValid = checkAddress(),
    isNickNameValid = checkNickName(),
    isGenderValid;

  let isFormValid =
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isEmailValid &&
    isPasswordValid &&
    isDateOfBirthValid &&
    isMobileNumberValid &&
    isAddressValid &&
    isNickNameValid;

  // submit to the server if the form is valid
  if (isFormValid) {
  }
});
console.log("hello");

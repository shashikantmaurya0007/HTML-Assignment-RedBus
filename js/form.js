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
const retaindataEl = document.querySelector("#retainData");
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
    isGenderValid = checkGender();

  let isFormValid =
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isEmailValid &&
    isPasswordValid &&
    isDateOfBirthValid &&
    isMobileNumberValid &&
    isAddressValid &&
    isNickNameValid &&
    isGenderValid;

  // submit to the server if the form is valid
  if (isFormValid) {
    window.location.href = "../thankyou.html";
  }
});

const saveToLoacalStorage = () => {
  const user = {
    firstName_: firstNameEl.value,
    lastName_: lastNameEl.value,
    nickName_: nickNameEl.value,
    email_: emailEl.value,
    password_: passwordEl.value,
    birthday_: birthdayEl.value,
    mobile_: mobileEl.value,
    address_: addressEl.value,
    gender_: getSelectedGenderValue(),
  };
  localStorage.setItem("userInformation", JSON.stringify(user));
};

const removeFromLocalStorage = () => {
  localStorage.removeItem("userInformation");
};
window.onbeforeunload = function () {
  if (retaindataEl.checked) saveToLoacalStorage();
  else {
    removeFromLocalStorage();
  }
  return null;
};

window.onload = function () {
  if (Boolean(localStorage.getItem("userInformation"))) {
    retaindataEl.checked = true;
    const user = JSON.parse(localStorage.getItem("userInformation"));

    firstNameEl.value = user.firstName_;
    lastNameEl.value = user.lastName_;
    nickNameEl.value = user.nickName_;
    emailEl.value = user.email_;
    passwordEl.value = user.password_;
    birthdayEl.value = user.birthday_;
    mobileEl.value = user.mobile_;
    addressEl.value = user.address_;
    retainGenderValue(user.gender_);
  } else {
    resetInputValues();
  }
};

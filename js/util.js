const isRequired = (value) => (value === "" ? false : true);

const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isValidBirthYear = (userDobYear, curentYear) => userDobYear < curentYear;

const isValidMobileNumber = (mobile) => {
  return mobile.match(/^(\+\d{1,3}[- ]?)?\d{10}$/);
};

const showError = (input, message) => {
  const formField = input.parentElement.parentElement;

  formField.classList.remove("success");
  formField.classList.add("error");

  const error = formField.querySelector("small");
  error.textContent = message;
};

const showGenderError = (input, message) => {
  console.log(input[0].parentElement.parentElement.parentElement);
  const formField =
    input[0].parentElement.parentElement.parentElement.parentElement;
  console.log(formField);
  formField.classList.remove("success");
  formField.classList.add("error");

  const error = formField.querySelector("small");
  error.textContent = message;
};
const showGenderSuccess = (input) => {
  const formField =
    input[0].parentElement.parentElement.parentElement.parentElement;

  formField.classList.remove("error");
  formField.classList.add("success");

  const error = formField.querySelector("small");
  error.textContent = "";
};
const showSuccess = (input) => {
  const formField = input.parentElement.parentElement;

  formField.classList.remove("error");
  formField.classList.add("success");

  const error = formField.querySelector("small");
  error.textContent = "";
};
const isPasswordSecure = (password) => {
  const re = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return re.test(password);
};

const checkFirstName = () => {
  let valid = false;
  const min = 3;
  const max = 14;

  const username = firstNameEl.value.trim();

  if (!isRequired(username)) {
    showError(firstNameEl, "First Name Can not be Blank");
  } else if (!isBetween(username.length, min, max)) {
    showError(firstNameEl, `First Name must be between ${min} and ${max}`);
  } else {
    showSuccess(firstNameEl);
    valid = true;
  }

  return valid;
};

const checkLastName = () => {
  let valid = false;
  const min = 3;
  const max = 14;

  const username = lastNameEl.value.trim();

  if (!isRequired(username)) {
    showError(lastNameEl, "Last Name Can not be Blank");
  } else if (!isBetween(username.length, min, max)) {
    showError(lastNameEl, `Last Name must be between ${min} and ${max}`);
  } else {
    showSuccess(lastNameEl);
    valid = true;
  }

  return valid;
};

const checkNickName = () => {
  let valid = false;
  const min = 3;
  const max = 14;

  const username = nickNameEl.value.trim();

  if (!isRequired(username)) {
    showError(nickNameEl, "Nick Name Can not be Blank");
  } else if (!isBetween(username.length, min, max)) {
    showError(nickNameEl, `Nick Name must be between ${min} and ${max}`);
  } else {
    showSuccess(nickNameEl);
    valid = true;
  }

  return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Email is not valid.");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};
const checkPassword = () => {
  let valid = false;

  const password = passwordEl.value.trim();

  if (!isRequired(password)) {
    showError(passwordEl, "Password cannot be blank.");
  } else if (!isPasswordSecure(password)) {
    showError(
      passwordEl,
      "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)"
    );
  } else {
    showSuccess(passwordEl);
    valid = true;
  }

  return valid;
};

const checkDateOfBirth = () => {
  let valid = false;

  const dateOfBirth = birthdayEl.value.trim();
  const currentYear = new Date().getFullYear();
  const userBirthYear = dateOfBirth.split("-")[0];
  if (!isRequired(dateOfBirth)) {
    showError(birthdayEl, "dob can not be empty");
  } else if (!isValidBirthYear(userBirthYear, currentYear)) {
    showError(birthdayEl, `dob is invalid `);
  } else {
    valid = true;
    showSuccess(birthdayEl);
  }

  return valid;
};

const checkMobileNumber = () => {
  let valid = false;
  const mobileNo = mobileEl.value.trim();

  if (!isRequired(mobileNo)) {
    showError(mobileEl, "mobile can not be empty");
  } else if (!isValidMobileNumber(mobileNo)) {
    showError(mobileEl, "mobile number is invalid");
  } else {
    valid = true;

    showSuccess(mobileEl);
  }
  return valid;
};

const checkAddress = () => {
  let valid = false;
  const min = 8;
  const max = 100;
  const address = addressEl.value.trim();
  if (!isRequired(address)) {
    showError(addressEl, "address can not be empty");
  } else if (!isBetween(address.length, min, max)) {
    showError(addressEl, `address length should be between ${min} and ${max}`);
  } else {
    valid = true;
    showSuccess(addressEl);
  }
  return valid;
};

const checkGender = () => {
  let genderValue;
  let valid = false;
  for (let i = 0; i < gendersEl.length; i++) {
    if (gendersEl[i].checked) {
      genderValue = gendersEl[i].value;
      console.log(gendersEl[i], gendersEl[i].value);
    }
  }

  if (genderValue === "" || !Boolean(genderValue)) {
    showGenderError(gendersEl, "select any one gender");
  } else {
    console.log(genderValue);
    showGenderSuccess(gendersEl);
    valid = true;
  }
  return valid;
};

const getSelectedGenderValue = () => {
  let genderValue;
  let valid = false;
  for (let i = 0; i < gendersEl.length; i++) {
    if (gendersEl[i].checked) {
      genderValue = gendersEl[i].value;
    }
  }

  return genderValue;
};

const retainGenderValue = (gender) => {
  for (let i = 0; i < gendersEl.length; i++) {
    if (gendersEl[i].value === gender) {
      gendersEl[i].checked = true;
      return;
    }
  }
};

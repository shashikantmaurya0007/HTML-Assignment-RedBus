const isRequired = (value) => (value === "" ? false : true);

const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const showError = (input, message) => {
  const formField = input.parentElement;

  formField.classList.remove("success");
  formField.classList.add("error");

  const error = formField.querySelector("small");
  error.textContent = message;
};

const isPasswordSecure = (password) => {
  const re = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return re.test(password);
};

const showSuccess = (input) => {
  const formField = input.parentElement;

  formField.classList.remove("error");
  formField.classList.add("success");

  const error = formField.querySelector("small");
  error.textContent = "";
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
    showError(lastNameEl, "First Name Can not be Blank");
  } else if (!isBetween(username.length, min, max)) {
    showError(lastNameEl, `First Name must be between ${min} and ${max}`);
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
    showError(nickNameEl, "First Name Can not be Blank");
  } else if (!isBetween(username.length, min, max)) {
    showError(nickNameEl, `First Name must be between ${min} and ${max}`);
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

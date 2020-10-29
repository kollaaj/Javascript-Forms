// function that validates the username parameter
const validateUsername = (username) => {
  // check if username is empty
  if (username.length === 0) {
    document.querySelector("#username-error").innerText = "nóbbs try again";
    return false;
  }

  // clear error
  document.querySelector("#username-error").innerText = "";
  return true;
};

// function that validates the email parameter
const validateEmail = (email) => {
  // check if email is empty
  if (email.length === 0) {
    document.querySelector("#email-error").innerText = "empty field";
    return false;
  } 

  // check if email is valid by using a very complicated regex
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.querySelector("#email-error").innerText = "invalid email";
    return false;
  } 

  // clear error
  document.querySelector("#email-error").innerText = "";
  return true;
}

// function that validates the password and passwordConfirm parameters
const validatePassword = (password, passwordConfirm) => {
  // check if the password is empty
  if (password.length === 0) {
    document.querySelector("#password-error").innerText = "nóbbs try again";
    return false;
  }

  // clear password error
  document.querySelector("#password-error").innerText = "";

  // check if the passwords match
  if (password !== passwordConfirm) {
    document.querySelector("#password-confirm-error").innerText = "nóbbs try again";
    return false;
  } 

  // clear password confirm error
  document.querySelector("#password-confirm-error").innerText = "";
  return true;
};

// function that validates the favorite parameter
const validateFavorite = (favorite) => {
  // check if the favorite selection is empty
  if (favorite.length === 0) {
    document.querySelector("#favorite-error").innerText = "nóbbs try again";
    return false;
  }

  // clear error
  document.querySelector("#favorite-error").innerText = "";
  return true;
};

// function that validates the story parameter
const validateStory = (story) => {
  // check if story is empty
  if (story.length === 0) {
    document.querySelector("#story-error").innerText = "nóbbs try again";
    return false;
  }

  // clear error
  document.querySelector("#story-error").innerText = "";
  return true;
};

// event handler function that fires when the form is submitted and
// validates the whole form
const formSubmit = (e) => {
  // get user input
  let username = document.querySelector("#username").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let passwordConfirm = document.querySelector("#password-confirm").value;
  let favorite = document.querySelector("#favorite").value;
  let story = document.querySelector("#story").value;

  // validate user input
  let usernameIsValid = validateUsername(username);
  let emailIsValid = validateEmail(email);
  let passwordIsValid = validatePassword(password, passwordConfirm);
  let favoriteIsValid = validateFavorite(favorite);
  let storyIsValid = validateStory(story);

  // print success message if user input is valid
  if (usernameIsValid && emailIsValid && passwordIsValid && favoriteIsValid && storyIsValid) {
    alert("success");
  }

  // prevent the form from actually submitting
  e.preventDefault();
};

// hook the formSubmit function to the form submit event
document.querySelector("#login").addEventListener("submit", formSubmit);

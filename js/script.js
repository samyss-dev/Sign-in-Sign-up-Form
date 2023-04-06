const inputs = document.querySelectorAll(".input-field");
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const signUpLink = document.getElementById("signUpLink");
const signInLink = document.getElementById("signInLink");
const loginForm = document.querySelector("#loginForm");
const loginEmailInput = document.querySelector("#loginEmail");
const loginEmailField = document.querySelector(".field-loginEmail");
const loginPasswordInput = document.querySelector("#loginPassword");
const loginPasswordField = document.querySelector(".field-loginPassword");
const registerForm = document.querySelector("#registerForm");
const nameInput = document.querySelector("#name");
const nameField = document.querySelector(".field-name");
const emailInput = document.querySelector("#email");
const emailField = document.querySelector(".field-email");
const passwordInput = document.querySelector("#registerPassword");
const passwordField = document.querySelector(".field-registerPassword");
const cPasswordInput = document.querySelector("#confirmRegisterPassword");
const cPasswordField = document.querySelector(".field-confirmPassword");
/*float label*/
inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});
/*show / hide password */
function myFunction() {
  let x = document.getElementById("registerPassword");
  if (x.type === "password"){
      x.type = "text";
      document.getElementById('unlock-icon').style.display = "inline-block";
      document.getElementById('lock-icon').style.display = "none";
  } else{
      x.type = "password";
      document.getElementById('unlock-icon').style.display = "none";
      document.getElementById('lock-icon').style.display = "inline-block";
  }
}
function myFunction1() {
  let x = document.getElementById("confirmRegisterPassword");
  if (x.type === "password"){
      x.type = "text";
      document.getElementById('unlock-icon1').style.display = "inline-block";
      document.getElementById('lock-icon1').style.display = "none";
  } else{
      x.type = "password";
      document.getElementById('unlock-icon1').style.display = "none";
      document.getElementById('lock-icon1').style.display = "inline-block";
  }
}
function myFunction2() {
  let x = document.getElementById("loginPassword");
  if (x.type === "password"){
      x.type = "text";
      document.getElementById('unlock-icon2').style.display = "inline-block";
      document.getElementById('lock-icon2').style.display = "none";
  } else{
      x.type = "password";
      document.getElementById('unlock-icon2').style.display = "none";
      document.getElementById('lock-icon2').style.display = "inline-block";
  }
}
 /*overlay animation*/
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});
signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
signUpLink.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});
signInLink.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
// Login Email Validation
function checkLoginEmail() {
  if (loginEmailInput.value === "") {
    return loginEmailField.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
  }
  loginEmailField.classList.remove("invalid"); //removing invalid class if email value matched with emaiPattern
}
//Login Password Validation
function createLoginPass() {
  if (loginPasswordInput.value === "") {
    return loginPasswordField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
  }
  loginPasswordField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
}
loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing form submitting
  checkLoginEmail();
  createLoginPass();
  //calling function on key up
  loginEmailInput.addEventListener("keyup", checkLoginEmail);
  loginPasswordInput.addEventListener("keyup", createLoginPass);
});
// Register Name Validation
function checkName() {
  const namePattern = /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/;
  if (!nameInput.value.match(namePattern)) {
    return nameField.classList.add("invalid"); //adding invalid class if name value do not match with name pattern
  }
  nameField.classList.remove("invalid"); //removing invalid class if name value match with namePattern
}
 // Register Email Validtion
function checkEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    return emailField.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
  }
  emailField.classList.remove("invalid"); //removing invalid class if email value matched with emaiPattern
}
// Register Password Validation
function createPass() {
  const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;
  if (!passwordInput.value.match(passPattern)) {
    return passwordField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
  }
  passwordField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
}
// Register Confirm Password Validtion
function confirmPass() {
  if (passwordInput.value !== cPasswordInput.value || cPasswordInput.value === "") {
    return cPasswordField.classList.add("invalid");
  }
  cPasswordField.classList.remove("invalid");
}
// Calling Funtion on Form Sumbit
registerForm.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing form submitting
  checkName();
  checkEmail();
  createPass();
  confirmPass();
  //calling function on key up
  nameInput.addEventListener("keyup", checkName);
  emailInput.addEventListener("keyup", checkEmail);
  passwordInput.addEventListener("keyup", createPass);
  cPasswordInput.addEventListener("keyup", confirmPass);
});
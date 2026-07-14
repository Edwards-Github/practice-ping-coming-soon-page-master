const email = document.querySelector(".email");
const errorMessage = document.querySelector(".error-message");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isValidEmail();
});

function isValidEmail() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.checkValidity() || !emailPattern.test(email.value)) {
    errorMessage.classList.add("visible");
  } else {
    errorMessage.classList.remove("visible");
  }
}

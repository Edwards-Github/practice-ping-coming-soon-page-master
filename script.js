const email = document.querySelector(".email");
const errorMessage = document.querySelector(".error-message");
const form = document.querySelector("form");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!email || !errorMessage || !form) {
  console.error("Required form elements not found in the DOM.");
} else {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!isValidEmail(email.value)) {
      errorMessage.classList.add("visible");
    } else {
      errorMessage.classList.remove("visible");
    }
  });
}

function isValidEmail(value) {
  return email.checkValidity() && emailPattern.test(value);
}

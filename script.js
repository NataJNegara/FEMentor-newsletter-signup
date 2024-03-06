document.addEventListener("DOMContentLoaded", function () {
  const email = document.getElementById("email");
  const form = document.querySelector(".cta-form");

  // submit form
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (checkInputs()) {
      showModal();
    }
  });

  // validation
  email.addEventListener("input", () => {
    validateField(email, isEmail(email.value.trim()), "Valid email required");
  });

  // check input
  function checkInputs() {
    let isValid = true;
    validateField(email, isEmail(email.value.trim()), "Valid email required");

    document.querySelectorAll(".form-row").forEach((row) => {
      if (row.classList.contains("error")) {
        isValid = false;
      }
    });
    return isValid;
  }

  // validate function
  function validateField(input, condition, errorMessage) {
    if (condition) {
      setSuccess(input);
    } else {
      setError(input, errorMessage);
    }
  }

  // success function
  function setSuccess(input) {
    const formRow = input.parentElement;
    const span = formRow.querySelector(".input-header span");
    formRow.className = "form-row success";
    span.style.display = "none";
  }
  // error function
  function setError(input, message) {
    const formRow = input.parentElement;
    const span = formRow.querySelector(".input-header span");
    formRow.className = "form-row error";
    span.innerHTML = message;
    span.style.display = "block";
  }

  function isEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  }

  // show modal
  function showModal() {
    const modal = document.querySelector(".modal-container");
    modal.style.display = "block";

    const inputValue = email.value;
    const target = document.querySelector(".modal-content p strong");
    target.innerHTML = inputValue;

    const closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
});

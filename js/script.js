// Button "Расчитать" becomes active only when all input fields are filled.
const btnSubmit = document.querySelector(".form__submit-button");
const ageInput = document.getElementById("age");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");

const inputs = [ageInput, heightInput, weightInput];

inputs.forEach(function (input) {
  input.addEventListener("change", function () {
    const age = Number(ageInput.value);
    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);

    if (age && height && weight >= 1) {
      btnSubmit.removeAttribute("disabled");
    } else {
      btnSubmit.setAttribute("disabled", "disabled");
    }
  });
});

// By clicking on "Расчитать", a block with information about calories appears.
const result = document.querySelector(".counter__result");
const form = document.querySelector(".counter__form");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (result.classList.contains("counter__result--hidden")) {
    result.classList.remove("counter__result--hidden");
  }
});

// Button "Очистить поля и расчёт" becomes active when at least one numeric field is filled.
// All elements of the application are reset to their default state
const btnReset = document.querySelector(".form__reset-button");

inputs.forEach(function (input) {
  input.addEventListener("change", function () {
    const age = Number(ageInput.value);
    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);

    if (age || height || weight >= 1) {
      btnReset.removeAttribute("disabled");
    }
  });
});

form.addEventListener("reset", function () {
  btnReset.setAttribute("disabled", "disabled");
  btnSubmit.setAttribute("disabled", "disabled");
  result.classList.add("counter__result--hidden");
});

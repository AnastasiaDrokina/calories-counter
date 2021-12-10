// Button 'Расчитать' becomes active only when all input fields are filled.
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

const form = document.querySelector(".counter__form");
const btnSubmit = document.querySelector(".form__submit-button");
const btnReset = document.querySelector(".form__reset-button");
const result = document.querySelector(".counter__result");
const male = document.getElementById("gender-male");
const female = document.getElementById("gender-female");
let caloriesNorm = document.getElementById("calories-norm");
let caloriesMin = document.getElementById("calories-minimal");
let caloriesMax = document.getElementById("calories-maximal");

form.addEventListener("change", function (evt) {
  const age = Number(evt.target.form.elements.age.value);
  const height = Number(evt.target.form.elements.height.value);
  const weight = Number(evt.target.form.elements.weight.value);

  // Button "Расчитать" becomes active only when all input fields are filled.
  if (age && height && weight >= 1) {
    btnSubmit.removeAttribute("disabled");
  } else {
    btnSubmit.setAttribute("disabled", "disabled");
  }

  // Button "Очистить поля и расчёт" becomes active when at least one numeric field is filled.
  if (age || height || weight >= 1) {
    btnReset.removeAttribute("disabled");
  }
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  // By clicking on "Расчитать", a block with information about calories appears.
  if (result.classList.contains("counter__result--hidden")) {
    result.classList.remove("counter__result--hidden");
  }

  // Maintaining weight
  const age = Number(evt.target.elements.age.value);
  const height = Number(evt.target.elements.height.value);
  const weight = Number(evt.target.elements.weight.value);
  const percentageNumberMen = (countMen(age, height, weight) / 100) * 15;

  function countMen(weight, height, age) {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  }

  caloriesNorm.textContent = countMen(age, height, weight);

  caloriesMax.textContent = Math.round(
    percentageNumberMen + countMen(age, height, weight)
  );

  caloriesMin.textContent = Math.round(
    countMen(age, height, weight) - percentageNumberMen
  );

  // function countWomen(weight, height, age) {
  //   return 10 * weight + 6.25 * height - 5 * age - 161;
  // }
  // caloriesNorm.textContent = countWomen(age, height, weight);
});

// All elements of the application are reset to their default state
form.addEventListener("reset", function () {
  btnReset.setAttribute("disabled", "disabled");
  btnSubmit.setAttribute("disabled", "disabled");
  result.classList.add("counter__result--hidden");
});

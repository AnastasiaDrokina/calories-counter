const form = document.querySelector(".counter__form");
const btnSubmit = document.querySelector(".form__submit-button");
const btnReset = document.querySelector(".form__reset-button");
const result = document.querySelector(".counter__result");
const age = document.getElementById("age");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
let caloriesNorm = document.getElementById("calories-norm");
let caloriesMin = document.getElementById("calories-minimal");
let caloriesMax = document.getElementById("calories-maximal");

// Activity rates
const activityNumber = {
  min: 1.2,
  low: 1.375,
  medium: 1.55,
  high: 1.725,
  max: 1.9,
};

// Formulas
function countCalories(weight, height, age, activity, gender) {
  if (gender === "female") {
    return (10 * weight + 6.25 * height - 5 * age - 161) * activity;
  }

  if (gender === "male") {
    return (10 * weight + 6.25 * height - 5 * age + 5) * activity;
  }
}

// Button "Расчитать" becomes active only when all input fields are filled.
function checkSubmit() {
  const ageValue = age.value;
  const heightValue = height.value;
  const weightValue = weight.value;

  if (ageValue >= 1 && heightValue >= 1 && weightValue >= 1) {
    btnSubmit.removeAttribute("disabled");
  } else {
    btnSubmit.setAttribute("disabled", "disabled");
  }
}

// Button "Очистить поля и расчёт" becomes active when at least one numeric field is filled.
function checkReset() {
  const ageValue = age.value;
  const heightValue = height.value;
  const weightValue = weight.value;

  if (ageValue || heightValue || weightValue) {
    btnReset.removeAttribute("disabled");
  }
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1 `);
}

form.addEventListener("change", function () {
  checkSubmit();
  checkReset();
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  // By clicking on "Расчитать", a block with information about calories appears.
  if (result.classList.contains("counter__result--hidden")) {
    result.classList.remove("counter__result--hidden");
  }

  // Maintaining weight
  const ageValue = Number(evt.target.elements.age.value);
  const heightValue = Number(evt.target.elements.height.value);
  const weightValue = Number(evt.target.elements.weight.value);
  const activityValue = activityNumber[evt.target.elements.activity.value];
  const genderValue = evt.target.elements.gender.value;

  const calories = countCalories(
    weightValue,
    heightValue,
    ageValue,
    activityValue,
    genderValue
  );

  const percentageCalories = (calories / 100) * 15;

  caloriesNorm.textContent = formatNumber(Math.round(calories));
  caloriesMax.textContent = formatNumber(
    Math.round(percentageCalories + calories)
  );
  caloriesMin.textContent = formatNumber(
    Math.round(calories - percentageCalories)
  );
});

// All elements of the application are reset to their default state
form.addEventListener("reset", function () {
  btnReset.setAttribute("disabled", "disabled");
  btnSubmit.setAttribute("disabled", "disabled");
  result.classList.add("counter__result--hidden");
});

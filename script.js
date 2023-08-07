const firstNumberInput = document.getElementById("first-number");
const secondNumberInput = document.getElementById("second-number");
const calculateButton = document.getElementById("calculate-button");
const resultParagraph = document.getElementById("result");

calculateButton.addEventListener("click", calculateSum);

function calculateSum() {
  const firstNumber = parseFloat(firstNumberInput.value);
  const secondNumber = parseFloat(secondNumberInput.value);

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    resultParagraph.textContent = "Please enter valid numbers";
  } else {
    const sum = addNumbers(firstNumber, secondNumber);
    resultParagraph.textContent = `Sum: ${sum}`;
  }
}

function addNumbers(a, b) {
  return a + b;
}

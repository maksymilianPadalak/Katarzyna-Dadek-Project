const number1 = document.getElementById("task25-first-number");
const number2 = document.getElementById("task25-second-number");
const additionResult = document.getElementById("task25-result");
const resultLine = document.getElementById("task25-result-line");
const firstInput = document.getElementById("task25-first-number-input")
const secondInput = document.getElementById("task25-second-number-input")
const additionButton = document.getElementById("task25-addition-button")

additionButton.addEventListener('click', () => addition(+firstInput.value, +secondInput.value))

const addition = (a, b) => {

  number1.textContent = a
  number2.textContent = `+ ${b}`

  const firstNumber = a.toString().split("").reverse();
  const secondNumber = b.toString().split("").reverse();

  const result = [];
  const longerNumberLength =
    firstNumber.length > secondNumber.length
      ? firstNumber.length
      : secondNumber.length;
  let rest = 0;

  while (firstNumber.length != longerNumberLength + 1) {
    firstNumber.push("0");
  }

  while (secondNumber.length != longerNumberLength + 1) {
    secondNumber.push("0");
  }

  for (let i = 0; i < longerNumberLength; i++) {
    const sumOfTwoNumbers = +firstNumber[i] + +secondNumber[i];
    if (sumOfTwoNumbers + rest < 10) {
      result.push((sumOfTwoNumbers + rest).toString());
      rest = 0;
    } else {
      result.push((sumOfTwoNumbers + rest - 10).toString());
      rest = 1;
    }
  }

  resultLine.textContent = `${'-'.repeat(longerNumberLength)}`

  additionResult.textContent = +result.reverse().join("");

};


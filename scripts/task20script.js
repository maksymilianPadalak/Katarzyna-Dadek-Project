const task20Input = document.getElementById("task20-input");
const task20Button = document.getElementById("task20-button");
const task20Result = document.getElementById("task20-result");
const task20Inputs = document.querySelectorAll("#task20-input");
const task20WinningNumbers = document.querySelectorAll(
  "#task20-winning-number"
);

console.log(task20WinningNumbers);

console.log(task20Inputs);

task20Button.addEventListener("click", () => {
  const inputNumbers = [];
  task20Inputs.forEach((input) => {
    inputNumbers.push(input.value);
  });
  const setInputNumbers = new Set(inputNumbers);

  for (input of inputNumbers) {
    if (input % 1 != 0) {
      task20Result.textContent = "Wprowadź liczbę całkowitą!";
      return;
    } else if (input < 1 || input > 49) {
      task20Result.textContent = "Wprowadź liczbę z przedziału 0-49!";
      return;
    }
  }

  if (inputNumbers.length !== setInputNumbers.size) {
    task20Result.textContent = "Liczby nie mogą się powtarzać!";
    return;
  }

  const winningNumbers = [];
  while (winningNumbers.length < 6) {
    const drawnNumber = Math.floor(Math.random() * 49 + 1);
    if (!winningNumbers.includes(drawnNumber)) {
      winningNumbers.push(drawnNumber);
    }
  }

  let score = 0;

  for (number of inputNumbers) {
    for (winningNumber of winningNumbers) {
      if (number == winningNumber) {
        score += 1;
      }
    }
  }

  task20Result.textContent = `Wygrane liczby to: ${winningNumbers.sort(
    (a, b) => a - b
  )}. Masz ${score} ${score === 1 ? "match" : "matche"}.`;

  for (let i = 0; i < 6; i++) {
    task20WinningNumbers[i].textContent = winningNumbers.sort((a, b) => a - b)[
      i
    ];
    task20WinningNumbers[i].style.color = 'white'
  }

  for (element of task20WinningNumbers){
    for (number of inputNumbers){
      if (+number === +element.textContent){
        element.style.color = 'red'
      }
    }
  }

});

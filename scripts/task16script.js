const task16Input = document.getElementById("task16-number-input");
const task16AddButton = document.getElementById("task16-add-button");
const task16SumButton = document.getElementById("task16-sum-button");
const task16AvgButton = document.getElementById("task16-avg-button");
const task16NumbersList = document.getElementById("task16-numbers-list");
const task16Result = document.getElementById("task16-result")

const task16NumbersArray = [];

task16AddButton.addEventListener("click", () => {
  const inputNumber = +task16Input.value;
  task16NumbersArray.push(inputNumber);
  let li = document.createElement("li");
  task16NumbersList.appendChild(li);
  li.innerHTML = inputNumber;
  task16Result.textContent = ""
});

task16SumButton.addEventListener("click", () => {
  task16Result.textContent = `Suma tych liczb jest równa ${task16NumbersArray.reduce((a, b) => a+b, 0)}`
})

task16AvgButton.addEventListener("click", () => {
  task16Result.textContent = `Średnia tych liczb jest równa ${task16NumbersArray.reduce((a, b) => a+b, 0)/task16NumbersArray.length}`
})
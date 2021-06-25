const task20Input = document.getElementById("task20-input");
const task20Button = document.getElementById("task20-button");
const task20Result = document.getElementById("task20-result")

task20Button.addEventListener("click", () => {
  const inputNumbers = task20Input.value.split(",")
  console.log(inputNumbers)
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

  task20Result.textContent = `Winning numbers are: ${winningNumbers.sort((a, b) => a - b)}. You have ${score} ${score === 1 ? "match" : "matches"}.`
});

// const lotto = (arr) => {
//   const winningNumbers = [];
//   while (winningNumbers.length < 6) {
//     const drawnNumber = Math.floor(Math.random() * 49 + 1);
//     if (!winningNumbers.includes(drawnNumber)) {
//       winningNumbers.push(drawnNumber);
//     }
//   }

//   let score = 0;

//   for (number of arr) {
//     for (winningNumber of winningNumbers) {
//       if (number === winningNumber) {
//         score += 1;
//       }
//     }
//   }

//   console.log(`Winning numbers are: ${winningNumbers.sort((a, b) => a - b)}`);
//   console.log(`You have ${score} ${score === 1 ? "match" : "matches"}.`);

//   return score;
// };


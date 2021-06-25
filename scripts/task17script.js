const closeModalButton = document.getElementById("task17-close-modal");
const modal = document.querySelector(".task17-modal-wrapper");
const functionButtons = document.querySelectorAll(".task17-function");
const functionsAndInputs = document.querySelector(
  ".task17-inputs-and-buttons-wrapper"
);
const task17Textarea = document.getElementById("task17-textarea");
const functionResult = document.getElementById("task17-result");

closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
  functionsAndInputs.style.display = "flex";
});

functionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.style.display = "grid";
    functionsAndInputs.style.display = "none";
  });
});

functionButtons[0].addEventListener("click", () => {
  functionResult.textContent = task17Textarea.value.slice(0, 3);
});

functionButtons[1].addEventListener("click", () => {
  functionResult.textContent = task17Textarea.value
    .split("")
    .reverse()
    .slice(0, 2)
    .reverse()
    .join("")
    .slice(0, 1);
});

functionButtons[2].addEventListener("click", () => {
  functionResult.textContent = task17Textarea.value
    .split("")
    .reverse()
    .slice(0, 4)
    .reverse()
    .join("");
});

functionButtons[3].addEventListener("click", () => {
  functionResult.textContent = task17Textarea.value.toLowerCase();
});

functionButtons[4].addEventListener("click", () => {
  functionResult.textContent = task17Textarea.value.toUpperCase();
});

functionButtons[5].addEventListener("click", () => {
  const result = [];
  for (let i = 0; i < task17Textarea.value.length; i++) {
    if (i % 2 === 0) {
      result.push(task17Textarea.value.split("")[i].toLowerCase());
    } else {
      result.push(task17Textarea.value.split("")[i].toUpperCase());
    }
  }
  functionResult.textContent = result.join("");
});

functionButtons[6].addEventListener("click", () => {
  functionResult.textContent = task17Textarea.value.replace(/\s/g, "");
});

functionButtons[7].addEventListener("click", () => {
  functionResult.textContent = task17Textarea.value.replace(/[aeiouyAEIOUY]/g, "");
});

functionButtons[8].addEventListener("click", () => {
  functionResult.textContent = task17Textarea.value
    .split("")
    .reverse()
    .join("");
});

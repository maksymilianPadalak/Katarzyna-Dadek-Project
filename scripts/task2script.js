const pierwszy = document.getElementById("pierwszy");
const drugi = document.getElementById("drugi");
const trzeci = document.getElementById("trzeci");
const task2Text = document.getElementById("task2-text");
const task2Letters = document.querySelector("#task2-text");
const textInnerHtml = task2Letters.innerHTML;

const colors = ["pink", "yellow", "green", "blue", "red"];

let colorChangeInterval;

const changeColor = () => {
  task2Text.style.color = colors[getRandomInt(colors.length)];
};

getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

pierwszy.addEventListener("change", () => {
  clearInterval(colorChangeInterval);
  task2Letters.innerHTML = textInnerHtml;
  task2Text.style.color = "black";
});

drugi.addEventListener("change", () => {
  task2Letters.innerHTML = textInnerHtml;
  clearInterval(colorChangeInterval);
  changeColor();
  globalThis.colorChangeInterval = setInterval(changeColor, 3000);
});

trzeci.addEventListener("change", () => {
  clearInterval(colorChangeInterval);
  let newElement = "";
  for (let i = 0; i < task2Text.textContent.length; i++) {
    newElement += `<span style="color: rgb(${getRandomInt(255)}, ${getRandomInt(
      255
    )}, ${getRandomInt(255)});">${task2Text.textContent[i]}</span>`;
  }
  task2Letters.innerHTML = newElement;
});

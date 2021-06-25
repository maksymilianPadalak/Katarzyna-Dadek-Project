const task9Button = document.getElementById("task9-button")
const task9Input = document.getElementById("task9-input")

function draw(r) {
  const canvas = document.getElementById("circle");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "pink";
    ctx.stroke();
  }
}

task9Button.addEventListener('click', () =>{
  draw(task9Input.value);
})


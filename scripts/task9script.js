const task9Button = document.getElementById("task9-button")
const task9Input = document.getElementById("task9-input")
const task9Info = document.getElementById("task9-info")

function draw(r) {

  if (isEmpty(task9Input)){
    task9Info.textContent = 'Pole nie może być puste!'
    return
  }

  if (task9Input.value < 0 || task9Input.value > 100){
    task9Info.textContent = 'Promień musi być liczbą stałą, dodatnią, nie wiekszą od 100!'
    return
  }

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
    task9Info.textContent = 'Gotowe!'
  }
}

task9Button.addEventListener('click', () =>{
  draw(task9Input.value);

})


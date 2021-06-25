const pierwszy = document.getElementById("pierwszy")
const drugi = document.getElementById("drugi")
const trzeci = document.getElementById("trzeci")
const task2Text = document.getElementById("task2-text")
const colors = ['pink', 'yellow', 'green', 'blue', 'red']

getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }
  

pierwszy.addEventListener('change', () =>{
    task2Text.style.color = 'black'
})

drugi.addEventListener('change', () =>{
    task2Text.style.color = colors[getRandomInt(colors.length)]
    const colorText = setInterval(function(){
        task2Text.style.color = colors[getRandomInt(colors.length)]
    }, 3000)
})

// trzeci.addEventListener('change', () =>{
//     task2Text.innerText[3].style.color = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`
// })


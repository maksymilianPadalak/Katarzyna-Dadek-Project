 task3function = () =>{

  if (isEmpty(document.getElementById("task3input1")) || isEmpty(document.getElementById("task3input2")) || isEmpty(document.getElementById("task3input3")) ){
    document.getElementById("task3-info").textContent = 'Pola nie mogą być puste!'
    return
  }

  alert(
    `${document.getElementById("task3input1").value}${
      document.getElementById("task3input2").value
    }${document.getElementById("task3input3").value} `
  );

  document.getElementById("task3-info").textContent = 'Gotowe'
}


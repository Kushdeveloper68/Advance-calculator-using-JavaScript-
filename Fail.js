let keys = document.querySelectorAll("#keys");
let display = document.getElementById("display");
console.log(keys);
let numbers = ``;
let number2 = ``;
let oprator = ``;
let non = "";
let value = "";
keys.forEach((e) => {
  e.addEventListener("click" , () => {
    if (!isNaN(e.innerText) && oprator == ``) {
    numbers = `${numbers}${e.innerText}`;
    console.log(numbers);
    display.innerText = numbers;
    } else if(numbers != "" && oprator == '') {
      oprator = e.innerText;
      display.innerText = oprator;
    } 
  });
});
keys.forEach((e) => {
  e.addEventListener('click' , () => {
    if (!isNaN(e.innerText) && oprator != ``) {
      number2 = `${number2}${e.innerText}`;
      display.innerText = number2;
    } else {}
    if(e.innerText == "=") {
      if(numbers != "" && number2 != "" && oprator != "") {
        switch (oprator) {
          case '+':
            value = Number(numbers) + Number(number2);
            display.innerText = value;
            break;
          case '-':
            value = numbers - number2;
            display.innerText = value;
            break;
          case '×':
            value = numbers * number2;
            display.innerText = value;
            break;
          case '÷': 
            value = numbers / number2;
            display.innerText = value;
          break;
          default:
            // nothing;
        } 
      } else {}
    } else {
      if(e.innerText == "C") {
        display.innerText = "";
        number2 = ``;
        numbers = ``;
        value = ``;
        oprator = ``;
      }
    }
  });
});
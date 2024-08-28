let inp = document.querySelector("#input");
let currentNumber = "";
let previousNumber = "";
let operator = "";
function appendNumber(number) {
  currentNumber += number;
  inp.value = currentNumber;
}

function setOperation(op) {
  if (currentNumber === "") return;
  if (previousNumber !== "") {
    calculate();
  } else {
    previousNumber = currentNumber;
  }

  operator = op;
  currentNumber = "";
}

function calculate() {
  let result = 0;
  let prev = parseFloat(previousNumber);
  let current = parseFloat(currentNumber);

  if (operator === "+") {
    result = prev + current;
  } else if (operator === "-") {
    result = prev - current;
  } else if (operator === "*") {
    result = prev * current;
  } else if (operator === "/") {
    if (current === 0) {
      inp.value = "Error";
      return;
    }
    result = prev / current;
  }

  currentNumber = result.toString()
  inp.value = currentNumber
  currentNumber = ''
  previousNumber = ''
}

function clearInp() {
    inp.value = ''
    currentNumber = ''
    previousNumber = ''
    operator = ''
}

function deletePrev(){
    currentNumber = currentNumber.slice(0,-1)
    inp.value = currentNumber
}
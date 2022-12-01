/*========================================
Project Name: PureCalc
Version: 1.0
HTML,CSS Author: Kalpesh Singh
Js Author: Maxjn[Muhammad Haghnegahdar] (https://github.com/maxjn)
Inspired From: dribbble.com/oneMoreArray =======================================*/
//*blinker
function blinker() {
  $(".blink-me").fadeOut(200);
  $(".blink-me").fadeIn(200);
}
setInterval(blinker, 500);

//*Variables
var number1 = 0;
var number2 = 0;

//*Elements
function getOperationDisplay() {
  return document.getElementById("calc-operation");
}

function getTypeDisplay() {
  return document.getElementById("calc-typed");
}

//*Boot
function boot() {
  let numBtns = document.querySelectorAll(".button.num");
  //* Numbers EventListener
  for (var i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", function () {
      insertNumber(this);
    });
  }

  //* First Operators EventListener
  let firsOperatorsBtns = document.querySelectorAll(".first-operator");
  for (var i = 0; i < firsOperatorsBtns.length; i++) {
    firsOperatorsBtns[i].addEventListener("click", function () {
      insertFirstOperator(this);
    });
  }

  //* Second Operators EventListener
  let secondOperatorsBtns = document.querySelectorAll(".second-operator");
  for (var i = 0; i < secondOperatorsBtns.length; i++) {
    secondOperatorsBtns[i].addEventListener("click", function () {
      insertSecondtOperator(this);
    });
  }

  //* Equal Operator EventListener
  var equalBtn = document.getElementById("equal");
  equalBtn.addEventListener("click", function () {
    equal();
  });

  //* Clean EventListener
  var cleanBtn = document.getElementById("clean");
  cleanBtn.addEventListener("click", function () {
    clean();
  });

  //* BackSpace EventListener
  var backspaceBtn = document.getElementById("backspace");
  backspaceBtn.addEventListener("click", function () {
    backspace();
  });
}

//*Btn functions
function insertNumber(ele) {
  let typeDisplay = getTypeDisplay();
  let number = ele.innerHTML;
  typeDisplay.append(number);
}

function insertFirstOperator(ele) {
  let operatorDisplay = getOperationDisplay();
  let operator = ele.innerHTML;
  operatorDisplay.innerHTML = operator;

  let typeDisplay = getTypeDisplay();
  number1 = parseFloat(typeDisplay.innerText)
    ? parseFloat(typeDisplay.innerText)
    : 0;
  console.log(number1);
  clean();
}

function insertSecondtOperator(ele) {
  let operator = ele.innerText;
  let operatorDisplay = getOperationDisplay();
  operatorDisplay.innerText = operator;

  let typeDisplay = getTypeDisplay();

  number1 = parseFloat(typeDisplay.innerText)
    ? parseFloat(typeDisplay.innerText)
    : 0;

  let equal = 0;
  switch (operator) {
    case "sin":
      equal = Math.sin(number1);
      break;

    case "cos":
      equal = Math.cos(number1);
      break;

    case "sqrt":
      equal = Math.sqrt(number1);
      break;

    default:
      break;
  }

  typeDisplay.innerText = equal.toString();
}

function equal() {
  let operatorDisplay = getOperationDisplay();
  let operator = operatorDisplay.innerText;

  if (operator == "") {
    alert("عملگری وارد نشده");
  } else {
    let typeDisplay = getTypeDisplay();
    number2 = parseFloat(typeDisplay.innerText)
      ? parseFloat(typeDisplay.innerText)
      : 0;

    clean();
    let equal = 0;
    switch (operator) {
      case "+":
        equal = number1 + number2;
        break;

      case "-":
        equal = number1 - number2;
        break;

      case "x":
        equal = number1 * number2;
        break;

      case "/":
        equal = number1 / number2;
        break;

      default:
        break;
    }

    typeDisplay.innerText = equal.toString();
    number1 = 0;
    number2 = 0;
    operatorDisplay.innerText = "";
  }
}

function clean() {
  let typeDisplay = getTypeDisplay();
  typeDisplay.innerText = "";
}

function backspace() {
  let typeDisplay = getTypeDisplay();
  let displayText = typeDisplay.innerText;
  typeDisplay.innerText = displayText.substr(0, displayText.length - 1);
}

function add(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

function subtract(num1, num2) {
  let difference = num1 - num2;
  return difference;
}

function multiply(num1, num2) {
  let product = num1 * num2;
  return product;
}

function divide(num1, num2) {
  let quotient = num1 / num2;
  quotient = Math.round(quotient * 10000) / 10000;
  return quotient;
}

function operate(operator, num1, num2) {
  const expr = operator;
  switch (expr) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break;
  }
}

const screen = document.querySelector('#screen');

const lastCalculation = document.createElement('div');
lastCalculation.classList.add('lastCalculation');
lastCalculation.textContent = "Manipulation";

const currentCalculation = document.createElement('div');
currentCalculation.classList.add('currentCalculation');
currentCalculation.textContent = "DOM Manipulation";

screen.appendChild(lastCalculation);
screen.appendChild(currentCalculation);
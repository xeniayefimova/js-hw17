function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "ERROR";
  }
}

let num1 = +prompt("Введіть перше число");

let operation = prompt("Ведіть арифметичну дію");

let num2 = +prompt("Введіть друге число");

switch (operation) {
  case "+":
    result = addition(num1, num2);
    break;
  case "-":
    result = subtraction(num1, num2);
    break;
  case "*":
    result = multiplication(num1, num2);
    break;
  case "/":
    result = division(num1, num2);
    break;
  default:
    result = "невідомий оператор";
}
console.log("Результат:", result);

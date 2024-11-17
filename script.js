// script.js

function performOperation(operator) {
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;

  if (!isBinary(input1) || !isBinary(input2)) {
    alert("Please enter valid binary numbers!");
    return;
  }

  const num1 = parseInt(input1, 2);
  const num2 = parseInt(input2, 2);
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        alert("Division by zero is not allowed!");
        return;
      }
      result = Math.floor(num1 / num2);
      break;
    default:
      return;
  }

  displayResults(result);
}

function isBinary(input) {
  return /^[01]+$/.test(input);
}

function displayResults(result) {
  document.getElementById("result").textContent = result.toString(2);
  document.getElementById("decimalResult").textContent = result;
  document.getElementById("octalResult").textContent = result.toString(8);
  document.getElementById("hexResult").textContent = result.toString(16).toUpperCase();
}

function convertBinary() {
  const input = document.getElementById("conversionInput").value;

  if (!isBinary(input)) {
    alert("Please enter a valid binary number!");
    return;
  }

  const decimal = parseInt(input, 2);
  document.getElementById("conversionResult").textContent = `Decimal: ${decimal}`;
}

function convertDecimal() {
  const input = document.getElementById("conversionInput").value;

  if (isNaN(input)) {
    alert("Please enter a valid decimal number!");
    return;
  }

  const binary = Number(input).toString(2);
  document.getElementById("conversionResult").textContent = `Binary: ${binary}`;
}

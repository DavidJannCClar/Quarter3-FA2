function add(num1, num2) {
    return "The sum of " + num1 + " and " + num2 + " is " + (parseFloat(num1) + parseFloat(num2)) + ".";
}

function subtract(num1, num2) {
    return "The difference of " + num1 + " and " + num2 + " is " + (parseFloat(num1) - parseFloat(num2)) + ".";
}

function multiply(num1, num2) {
    return "The product of " + num1 + " and " + num2 + " is " + (parseFloat(num1) * parseFloat(num2)) + ".";
}

function divide(num1, num2) {
    return num2 != 0 ? "The quotient of " + num1 + " and " + num2 + " is " + (parseFloat(num1) / parseFloat(num2)) + "." : "Cannot divide by zero.";
}

function modulus(num1, num2) {
    return num2 != 0 ? "The remainder of " + num1 + " divided by " + num2 + " is " + (parseFloat(num1) % parseFloat(num2)) + "." : "Cannot divide by zero.";
}

function displayResult(message) {
    document.getElementById('result').innerHTML = message;
}

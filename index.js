function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

let firstNum, operator, secondNum;

function operate(firstNum, operator, secondNum) {
	let result;
	if (operator === "plus") {
		result = add(firstNum, secondNum);
	} else if (operator === "minus") {
		result = subtract(firstNum, secondNum);
	} else if (operator === "x") {
		result = multiply(firstNum, secondNum);
	} else if (operator === "division") {
		result = divide(firstNum, secondNum);
	}
}

const screen = document.querySelector("#screen");
const btnContainer = document.querySelector("#btn-container");

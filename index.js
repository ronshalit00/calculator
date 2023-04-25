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

let firstNum = null,
	operator = null,
	secondNum = null,
	firstAndOperator = null,
	dotPressed = false;

function operate(firstNum, operator, secondNum) {
	switch (operator) {
		case "plus":
			return add(firstNum, secondNum);
		case "minus":
			return subtract(firstNum, secondNum);
		case "x":
			return multiply(firstNum, secondNum);
		case "division":
			if (secondNum != 0) {
				return divide(firstNum, secondNum);
			} else {
				alert("You can't fool me! Don't divide by 0");
				return firstNum;
			}
	}
}

const screen = document.querySelector("#screen");
const buttons = document.querySelectorAll("#btn-container div");
let displayContent = "";

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		if (button.id == "equals") {
			if (firstNum && operator) {
				secondNum = Number(displayContent.replace(firstAndOperator, ""));
				displayContent = Number(
					operate(firstNum, operator, secondNum).toFixed(5)
				);
				secondNum = null;
				operator = null;
				firstNum = null;
				dotPressed = false;
			}
		} else if (button.id == "ac") {
			displayContent = "";
			firstNum = null;
			operator = null;
			secondNum = null;
			dotPressed = false;
		} else if (button.className == "operator") {
			if (firstNum === null) {
				//First operator click
				firstNum = +displayContent;
				operator = button.id;
				displayContent += ` ${button.innerText} `;
				firstAndOperator = displayContent;
				dotPressed = false;
			} else if (secondNum === null) {
				secondNum = Number(displayContent.replace(firstAndOperator, ""));
				firstNum = Number(operate(firstNum, operator, secondNum).toFixed(5));
				secondNum = null;
				operator = button.id;
				firstAndOperator = `${firstNum} ${button.innerText} `;
				displayContent = firstAndOperator;
				dotPressed = false;
			}
		} else if (button.id == "dot") {
			switch (dotPressed) {
				case false:
					displayContent += `${button.textContent}`;
					dotPressed = true;
					break;
				case true:
					break;
			}
		} else {
			//Tap on number
			displayContent += `${button.textContent}`;
		}
		screen.textContent = displayContent;
	});
});

function calculate() {}

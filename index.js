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
		case "multiply":
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

document.addEventListener("keydown", (e) => {
	const key = e.key;
	if (isFinite(key)) {
		numPress(key);
	} else if (key == "/" || key == "*" || key == "+" || key == "-") {
		let id = "";
		let text = key;
		switch (key) {
			case "/":
				id = "division";
				text = "÷";
				break;
			case "*":
				id = "multiply";
				text = "x";
				break;
			case "+":
				id = "plus";
				break;
			case "-":
				id = "minus";
				break;
		}
		operatorPress(id, text);
	} else if (key == "=" || key == "Enter") {
		equal();
	} else if (key == "Backspace") {
		backspace();
	}
	screen.textContent = displayContent;
});

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		if (button.id == "equals") {
			equal();
		} else if (button.id == "ac") {
			displayContent = "";
			firstNum = null;
			operator = null;
			secondNum = null;
			dotPressed = false;
		} else if (button.id == "c") {
			backspace();
		} else if (button.className == "operator") {
			operatorPress(button.id, button.innerText);
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
			numPress(button.textContent);
		}
		screen.textContent = displayContent;
	});
});

function numPress(text) {
	displayContent += `${text}`;
}

function operatorPress(operatorID, operatorText) {
	if (firstNum === null) {
		//First operator click
		firstNum = +displayContent;
		operator = operatorID;
		displayContent += ` ${operatorText} `;
		firstAndOperator = displayContent;
		dotPressed = false;
	} else if (secondNum === null) {
		secondNum = Number(displayContent.replace(firstAndOperator, ""));
		firstNum = Number(operate(firstNum, operator, secondNum).toFixed(5));
		secondNum = null;
		operator = operatorID;
		firstAndOperator = `${firstNum} ${operatorText} `;
		displayContent = firstAndOperator;
		dotPressed = false;
	}
}

function equal() {
	if (firstNum && operator) {
		secondNum = Number(displayContent.replace(firstAndOperator, ""));
		displayContent = Number(operate(firstNum, operator, secondNum).toFixed(5));
		secondNum = null;
		operator = null;
		firstNum = null;
		dotPressed = false;
	}
}

function backspace() {
	displayContent = displayContent.slice(0, -1);
}

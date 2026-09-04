let display = document.getElementById("display");

let firstNumber = "";
let operator = "";
let secondNumber = "";

function pressNumber(number) {
    display.value += number;
}

function pressOperator(op) {
    firstNumber = display.value;
    operator = op;
    display.value = "";
}

function calculate() {

    secondNumber = display.value;

    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    let result;

    if (operator === "+") {
        result = num1 + num2;
    }

    else if (operator === "-") {
        result = num1 - num2;
    }

    else if (operator === "*") {
        result = num1 * num2;
    }

    else if (operator === "/") {
        if (num2 === 0) {
            display.value = "Error";
            return;
        }

        result = num1 / num2;
    }

    display.value = result;

    firstNumber = "";
    secondNumber = "";
    operator = "";
}

function clearDisplay() {
    display.value = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
}

function changeSign() {

    if (display.value !== "") {
        display.value = Number(display.value) * -1;
    }

}

function percentage() {

    if (display.value !== "") {
        display.value = Number(display.value) / 100;
    }

}